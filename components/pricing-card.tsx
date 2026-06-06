"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/data/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  const { pick, t } = useLanguage();

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
        tier.highlighted
          ? "border-brand-purple/50 bg-card/70 shadow-glow lg:scale-[1.03]"
          : "border-white/10 bg-card/40 hover:border-white/20"
      )}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
          {t.common.mostPopular}
        </span>
      )}

      <h3 className="font-display text-lg font-semibold">{pick(tier.name)}</h3>

      <div className="mt-4">
        <span className="font-display text-3xl font-bold gradient-text">
          {pick(tier.price)}
        </span>
        {tier.setup && (
          <p className="mt-1 text-xs text-muted">+ {pick(tier.setup)}</p>
        )}
      </div>

      <p className="mt-4 text-sm text-muted">{pick(tier.best)}</p>

      <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
        {pick(tier.features).map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
            <span className="text-muted">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/book-demo"
        variant={tier.highlighted ? "primary" : "secondary"}
        className="mt-6 w-full"
      >
        {t.common.bookDemo}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
