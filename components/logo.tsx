import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  href?: string | null;
  size?: number;
};

/**
 * La Flèche AI logo — a custom arrow glyph blending an arrowhead, a
 * data-flow line and a motion trail, in a purple→blue→cyan gradient.
 */
export function LogoMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lafleche-grad" x1="4" y1="40" x2="44" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="0.5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      {/* motion trail */}
      <path
        d="M4 38 L20 22"
        stroke="url(#lafleche-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M10 40 L26 24"
        stroke="url(#lafleche-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* main shaft */}
      <path
        d="M14 40 L40 14"
        stroke="url(#lafleche-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* arrowhead */}
      <path
        d="M28 10 L42 8 L40 22"
        stroke="url(#lafleche-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ className, showText = true, href = "/", size = 36 }: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight">
          La Flèche{" "}
          <span className="gradient-text">AI</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="La Flèche AI — accueil" className="inline-flex">
        {content}
      </Link>
    );
  }
  return content;
}
