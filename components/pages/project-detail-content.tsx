"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, AlertCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { getProject } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const accentText = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
} as const;

export function ProjectDetailContent({ slug }: { slug: string }) {
  const { t, pick } = useLanguage();
  const project = getProject(slug);

  if (!project) return null;
  const labels = t.projectDetail;

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 mesh-bg" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />

        <div className="container-x relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-start gap-5"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Icon
                name={project.icon}
                className={cn("h-8 w-8", accentText[project.accent])}
              />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
              {pick(project.category)}
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {pick(project.name)}
            </h1>
            <p className="max-w-2xl text-balance text-muted md:text-lg">
              {pick(project.tagline)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-x grid gap-6 py-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-card/40 p-6">
          <div className="flex items-center gap-2 text-rose-400/90">
            <AlertCircle className="h-5 w-5" />
            <h2 className="font-display font-semibold">{labels.problem}</h2>
          </div>
          <p className="mt-3 text-sm text-muted">{pick(project.problem)}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-card/40 p-6">
          <div className="flex items-center gap-2 text-brand-cyan">
            <Check className="h-5 w-5" />
            <h2 className="font-display font-semibold">{labels.features}</h2>
          </div>
          <ul className="mt-3 space-y-2">
            {pick(project.features).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-card/40 p-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <TrendingUp className="h-5 w-5" />
            <h2 className="font-display font-semibold">{labels.value}</h2>
          </div>
          <p className="mt-3 text-sm text-muted">{pick(project.value)}</p>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-card/30 p-8 text-center">
          <h3 className="font-display text-xl font-semibold">{labels.cta}</h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book-demo">
              {t.common.bookDemo}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              {t.common.contactUs}
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
