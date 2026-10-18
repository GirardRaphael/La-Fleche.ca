"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Icon } from "@/components/icon";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { pick, lang } = useLanguage();
  return (
    <article className="portfolio-card group" data-project={project.slug} data-accent={project.accent}>
      <div className="portfolio-card-header">
        <div className="portfolio-icon"><Icon name={project.icon} className="h-6 w-6" /></div>
        <span className="portfolio-status">{pick(project.status)}</span>
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">{pick(project.category)}</p>
      <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
        <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-brand-blue">{pick(project.name)}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{pick(project.tagline)}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={lang === "fr" ? "Technologies" : "Technology stack"}>
        {project.stack.slice(0, 5).map((tech) => <li key={tech} className="portfolio-tag">{tech}</li>)}
        {project.stack.length > 5 && <li className="portfolio-tag">+{project.stack.length - 5}</li>}
      </ul>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
        <Link href={`/projects/${project.slug}`} className="portfolio-link text-sm font-semibold" aria-label={`${lang === "fr" ? "Explorer" : "Explore"} ${pick(project.name)}`}>
          {lang === "fr" ? "Explorer le projet" : "Explore project"}<ArrowUpRight className="h-4 w-4" />
        </Link>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="portfolio-source" aria-label={`GitHub — ${project.repository}`}>
          <Github className="h-4 w-4" /><span className="sr-only">GitHub</span>
        </a>
      </div>
    </article>
  );
}
