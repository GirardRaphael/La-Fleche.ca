"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "@/components/icon";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const accentRing: Record<Project["accent"], string> = {
  purple: "group-hover:border-brand-purple/50",
  blue: "group-hover:border-brand-blue/50",
  cyan: "group-hover:border-brand-cyan/50",
};

const accentText: Record<Project["accent"], string> = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
};

export function ProjectCard({ project }: { project: Project }) {
  const { pick, t } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1",
        accentRing[project.accent]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
          <Icon name={project.icon} className={cn("h-6 w-6", accentText[project.accent])} />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <span className="mt-5 text-xs font-medium uppercase tracking-wide text-muted">
        {pick(project.category)}
      </span>
      <h3 className="mt-1 font-display text-lg font-semibold">
        {pick(project.name)}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {pick(project.tagline)}
      </p>

      <div className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
        {pick(project.features)
          .slice(0, 3)
          .map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-muted">
              <Check className={cn("h-3.5 w-3.5 shrink-0", accentText[project.accent])} />
              {f}
            </div>
          ))}
      </div>

      <span className={cn("mt-5 inline-flex items-center gap-1 text-sm font-medium", accentText[project.accent])}>
        {t.common.viewProject}
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
