import Link from "next/link";
import GlitchText from "@/components/glitch-text/GlitchText";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  href?: string | null;
  size?: number;
};

/**
 * La Fleche AI logo: a custom arrow glyph blending an arrowhead,
 * a data-flow line, and a motion trail.
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
        <linearGradient
          id="lafleche-grad"
          x1="4"
          y1="40"
          x2="44"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C3AED" />
          <stop offset="0.5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
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
      <path
        d="M14 40 L40 14"
        stroke="url(#lafleche-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
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

export function Logo({
  className,
  showText = true,
  href = "/",
  size = 36,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight">
          <GlitchText
            speed={0.9}
            enableShadows
            enableOnHover
            className="gradient-text bg-brand-gradient"
          >
            La Fleche AI
          </GlitchText>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="La Fleche AI home" className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
