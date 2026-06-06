"use client";

import { AlertCircle, Sparkles, Workflow, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { solutions } from "@/data/solutions";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const accentText = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
} as const;

export function SolutionsContent() {
  const { t, pick } = useLanguage();
  const labels = t.solutionsPage;

  return (
    <>
      <PageHeader
        eyebrow={labels.eyebrow}
        title={labels.title}
        subtitle={labels.subtitle}
      />

      <section className="container-x grid gap-6 py-12 lg:grid-cols-2">
        {solutions.map((sol) => (
          <Reveal key={sol.id}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-8 transition-colors hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon
                    name={sol.icon}
                    className={cn("h-6 w-6", accentText[sol.accent])}
                  />
                </div>
                <h2 className="font-display text-xl font-bold">
                  {pick(sol.industry)}
                </h2>
              </div>

              <dl className="mt-6 space-y-4">
                <Row
                  icon={<AlertCircle className="h-4 w-4 text-rose-400/80" />}
                  label={labels.painLabel}
                  value={pick(sol.pain)}
                />
                <Row
                  icon={<Sparkles className="h-4 w-4 text-brand-cyan" />}
                  label={labels.solutionLabel}
                  value={pick(sol.solution)}
                />
                <Row
                  icon={<Workflow className="h-4 w-4 text-brand-purple" />}
                  label={labels.exampleLabel}
                  value={pick(sol.example)}
                />
                <Row
                  icon={<TrendingUp className="h-4 w-4 text-emerald-400" />}
                  label={labels.valueLabel}
                  value={pick(sol.value)}
                />
              </dl>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm text-foreground/90">{value}</dd>
      </div>
    </div>
  );
}
