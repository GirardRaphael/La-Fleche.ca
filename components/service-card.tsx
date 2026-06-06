"use client";

import { Icon } from "@/components/icon";
import { useLanguage } from "@/lib/i18n";
import type { ServicePillar } from "@/data/services";

export function ServiceCard({
  pillar,
  index,
}: {
  pillar: ServicePillar;
  index: number;
}) {
  const { pick } = useLanguage();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-glow">
      {/* hover gradient */}
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
          <Icon name={pillar.icon} className="h-6 w-6 text-brand-cyan" />
        </div>
        <span className="mt-5 block text-xs font-mono text-muted">
          0{index + 1}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold">
          {pick(pillar.title)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {pick(pillar.description)}
        </p>
      </div>
    </div>
  );
}
