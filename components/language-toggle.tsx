"use client";

import { useLanguage, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  const option = (value: Lang, label: string) => (
    <button
      key={value}
      type="button"
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={cn(
        "relative z-10 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
        lang === value ? "text-white" : "text-muted hover:text-foreground"
      )}
    >
      {label}
    </button>
  );

  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5",
        className
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-brand-gradient transition-transform duration-300",
          lang === "en" ? "translate-x-full" : "translate-x-0"
        )}
        aria-hidden="true"
      />
      {option("fr", "FR")}
      {option("en", "EN")}
    </div>
  );
}
