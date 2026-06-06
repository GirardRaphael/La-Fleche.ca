import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-brand-cyan/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-balance text-base text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
