"use client";

import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { serviceCategories } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

export function ServicesContent() {
  const { t, pick } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
      />

      <section className="container-x space-y-6 py-12">
        {serviceCategories.map((cat, i) => (
          <Reveal key={cat.id}>
            <div
              id={cat.id}
              className="grid scroll-mt-24 gap-8 rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon name={cat.icon} className="h-7 w-7 text-brand-cyan" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                  {pick(cat.title)}
                </h2>
                <p className="mt-3 max-w-md text-muted">
                  {pick(cat.description)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                  {t.servicesPage.examplesLabel}
                </span>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {pick(cat.examples).map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <Check className="h-4 w-4 shrink-0 text-brand-purple" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
