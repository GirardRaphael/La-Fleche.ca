import { createHash } from "crypto";
import { NextResponse } from "next/server";

const RECIPIENT =
  process.env.CONTACT_RECIPIENT_EMAIL ?? "xxraphaelgirardxx@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 16 * 1024;
const EMAIL_TIMEOUT_MS = 10_000;
const ALLOWED_ORIGIN =
  process.env.ALLOWED_ORIGIN ?? "https://la-fleche.ca";
const requestsByIp = new Map<string, number[]>();

const SECURITY_HEADERS = {
  "Cache-Control": "no-store, no-cache",
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: SECURITY_HEADERS });
}

type ContactRequest = {
  variant?: "contact" | "demo";
  language?: "fr" | "en";
  fields?: Record<string, unknown>;
};

function clean(value: unknown, maxLength = 2000) {
  return typeof value === "string"
    ? value.replace(/\0/g, "").trim().slice(0, maxLength)
    : "";
}

function cleanSingleLine(value: unknown, maxLength = 200) {
  return clean(value, maxLength).replace(/[\r\n]+/g, " ");
}

function hashIp(ip: string) {
  return createHash("sha256").update(ip).digest("hex").slice(0, 32);
}

async function isRedisRateLimited(ip: string) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl || !redisToken) return null;

  const key = `contact-rate:${hashIp(ip)}`;
  const response = await fetch(`${redisUrl.replace(/\/$/, "")}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)],
    ]),
  });

  if (!response.ok) {
    console.error("Redis rate limit check failed", response.status);
    return null;
  }

  const [increment] = (await response.json()) as Array<{ result?: number }>;
  return Number(increment?.result ?? 0) > MAX_REQUESTS;
}

function isMemoryRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS) {
    requestsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestsByIp.set(ip, recent);
  if (requestsByIp.size > 1000) {
    for (const [key, timestamps] of requestsByIp) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        requestsByIp.delete(key);
      }
    }
  }
  return false;
}

async function isRateLimited(ip: string) {
  try {
    const redisLimited = await isRedisRateLimited(ip);
    if (redisLimited !== null) return redisLimited;
  } catch (error) {
    console.error("Rate limit backend unavailable", error);
  }

  return isMemoryRateLimited(ip);
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const isDev = process.env.NODE_ENV === "development";
  if (origin && origin !== ALLOWED_ORIGIN && !(isDev && origin.includes("localhost"))) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403, headers: SECURITY_HEADERS }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request too large" },
      { status: 413, headers: SECURITY_HEADERS }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service unavailable" },
      { status: 503, headers: SECURITY_HEADERS }
    );
  }

  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (await isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: SECURITY_HEADERS }
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400, headers: SECURITY_HEADERS }
    );
  }

  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request too large" },
      { status: 413, headers: SECURITY_HEADERS }
    );
  }

  let payload: ContactRequest;
  try {
    payload = JSON.parse(rawBody) as ContactRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400, headers: SECURITY_HEADERS }
    );
  }

  const fields =
    payload.fields && typeof payload.fields === "object" ? payload.fields : {};
  if (clean(fields.website, 100)) {
    return NextResponse.json({ ok: true }, { headers: SECURITY_HEADERS });
  }

  const name = cleanSingleLine(fields.name, 120);
  const email = cleanSingleLine(fields.email, 254).toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400, headers: SECURITY_HEADERS }
    );
  }

  const allowedFields = [
    "name",
    "email",
    "company",
    "projectType",
    "industry",
    "budget",
    "automate",
    "tools",
    "contactMethod",
    "message",
  ];
  const lines = allowedFields
    .map((key) => [key, clean(fields[key])] as const)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`);

  const isDemo = payload.variant === "demo";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "La Fleche AI <onboarding@resend.dev>";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: isDemo
          ? `Demo request from ${name}`
          : `Quote request from ${name}`,
        text: [
          `Submission type: ${isDemo ? "Demo request" : "Quote/contact request"}`,
          `Language: ${payload.language === "en" ? "English" : "French"}`,
          "",
          ...lines,
        ].join("\n"),
      }),
    });
  } catch (error) {
    console.error("Contact email request failed", error);
    return NextResponse.json(
      { error: "Email delivery failed" },
      { status: 502, headers: SECURITY_HEADERS }
    );
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend rejected contact email", response.status, details);
    return NextResponse.json(
      { error: "Email delivery failed" },
      { status: 502, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json({ ok: true }, { headers: SECURITY_HEADERS });
}
