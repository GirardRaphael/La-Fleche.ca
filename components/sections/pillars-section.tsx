"use client";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { pillars } from "@/data/services";
import { useLanguage } from "@/lib/i18n";

export function PillarsSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow={t.pillars.eyebrow}
        title={t.pillars.title}
        subtitle={t.pillars.subtitle}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.id} delay={i * 0.08}>
            <ServiceCard pillar={pillar} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
