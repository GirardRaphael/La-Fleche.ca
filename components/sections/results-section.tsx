"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { useLanguage } from "@/lib/i18n";

export function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow={t.results.eyebrow}
        title={t.results.title}
        subtitle={t.results.subtitle}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.results.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 text-center"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
            <div className="font-display text-4xl font-bold gradient-text md:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mx-auto mt-3 max-w-[14rem] text-sm text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
