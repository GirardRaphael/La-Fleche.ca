"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/lib/i18n";

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow={t.problem.eyebrow}
        title={t.problem.title}
        subtitle={t.problem.subtitle}
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.problem.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-card/30 p-4"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400/80" />
            <span className="text-sm text-muted">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
