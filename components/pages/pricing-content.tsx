"use client";

import { Info } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/pricing-card";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { tiers, oneTimeServices } from "@/data/pricing";
import { useLanguage } from "@/lib/i18n";

export function PricingContent() {
  const { t, pick } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.pricingPage.eyebrow}
        title={t.pricingPage.title}
        subtitle={t.pricingPage.subtitle}
      />

      <section className="container-x py-12">
        <div className="grid gap-5 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.06}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-white/10 bg-card/30 px-4 py-3 text-center text-sm text-muted">
            <Info className="h-4 w-4 shrink-0 text-brand-cyan" />
            {t.pricingPage.note}
          </p>
        </Reveal>
      </section>

      {/* One-time services */}
      <section className="container-x py-12">
        <SectionHeading
          title={t.pricingPage.oneTimeTitle}
          subtitle={t.pricingPage.oneTimeSubtitle}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {oneTimeServices.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.06}>
              <div className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-card/40 p-6 transition-colors hover:border-brand-purple/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon name={svc.icon} className="h-5 w-5 text-brand-cyan" />
                </div>
                <h3 className="mt-4 font-display font-semibold">
                  {pick(svc.name)}
                </h3>
                <p className="mt-2 text-sm font-medium gradient-text">
                  {pick(svc.price)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
