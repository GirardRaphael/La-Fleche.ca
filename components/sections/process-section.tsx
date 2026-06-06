"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/lib/i18n";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        subtitle={t.process.subtitle}
      />

      <div className="relative mt-14">
        {/* connecting line (desktop) */}
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-background font-display text-lg font-bold gradient-text shadow-glow">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
