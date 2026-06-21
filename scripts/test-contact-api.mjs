import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";

const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;
const isWindows = process.platform === "win32";

const server = spawn(
  isWindows ? "cmd.exe" : "npm",
  isWindows
    ? ["/d", "/s", "/c", `npm.cmd run dev -- -p ${PORT}`]
    : ["run", "dev", "--", "-p", String(PORT)],
  {
    cwd: process.cwd(),
    env: {
      ...process.env,
      RESEND_API_KEY: "test_key",
      NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --use-system-ca`.trim(),
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  },
);

let serverOutput = "";
server.stdout.on("data", (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverOutput += chunk.toString();
});

let passed = false;

async function waitForServer() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${BASE_URL}/contact`);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  throw new Error(`Dev server did not start.\n${serverOutput}`);
}

try {
  await waitForServer();

  const invalidJson = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{",
  });
  assert.equal(invalidJson.status, 400);

  const oversized = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "x".repeat(17_000),
  });
  assert.equal(oversized.status, 413);

  console.log("contact API smoke tests passed");
  passed = true;
} finally {
  if (isWindows && server.pid) {
    try {
      execFileSync("taskkill", ["/pid", String(server.pid), "/t", "/f"], {
        stdio: "ignore",
      });
    } catch {
      // The dev server may already have exited after the final request.
    }
  } else {
    server.kill();
  }
}

if (passed) {
  process.exit(0);
}
