"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  PhoneCall,
  FileText,
  CalendarClock,
  LayoutDashboard,
  AlertTriangle,
  AppWindow,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { LogoMark } from "@/components/logo";
import { useLanguage } from "@/lib/i18n";

const nodeIcons = [
  Inbox,
  PhoneCall,
  FileText,
  CalendarClock,
  LayoutDashboard,
  AlertTriangle,
  AppWindow,
];

export function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow={t.solution.eyebrow}
          title={t.solution.title}
          subtitle={t.solution.subtitle}
        />

        <div className="mt-14">
          {/* Center core */}
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-background/70 px-5 py-3 shadow-glow backdrop-blur-xl"
            >
              <LogoMark size={28} />
              <span className="font-display font-semibold">
                {t.solution.center}
              </span>
            </motion.div>
          </div>

          {/* Node grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {t.solution.nodes.map((node, i) => {
              const Ico = nodeIcons[i];
              return (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-card/40 p-4 text-center transition-colors hover:border-brand-cyan/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-brand-cyan/10">
                    <Ico className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <span className="mt-3 text-sm font-semibold">
                    {node.title}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-muted">
                    {node.desc}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
