"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Github } from "lucide-react";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { getProject, projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectDetailContent({ slug }: { slug: string }) {
  const { lang, pick, t } = useLanguage();
  const project = getProject(slug);
  if (!project) return null;
  const related = projects.filter((item) => item.slug !== slug && item.categoryId === project.categoryId).slice(0, 3);
  const fr = lang === "fr";
  return (
    <>
      <section className="portfolio-hero pb-12 pt-28 sm:pt-36">
        <div className="container-x">
          <Link href="/projects" className="portfolio-link text-sm text-muted"><ArrowLeft className="h-4 w-4" />{t.projectDetail.back}</Link>
          <div className="mt-8 flex items-center gap-3"><div className="portfolio-icon"><Icon name={project.icon} className="h-6 w-6" /></div><span className="text-sm text-muted">{pick(project.category)}</span><span className="portfolio-status">{pick(project.status)}</span></div>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">{pick(project.name)}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{pick(project.tagline)}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href={project.githubUrl} external><Github className="h-4 w-4" />{fr ? "Explorer le code" : "Explore the code"}</Button><Button href="/contact" variant="outline">{fr ? "Discuter d'un projet similaire" : "Discuss a similar project"}<ArrowRight className="h-4 w-4" /></Button></div>
        </div>
      </section>
      <section className="container-x grid gap-6 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="portfolio-panel"><h2 className="font-display text-xl font-semibold">{fr ? "Ce que fait le projet" : "What the project does"}</h2><ul className="mt-6 space-y-5">{pick(project.features).map((feature) => <li key={feature} className="flex items-start gap-3 leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue dark:text-brand-cyan" /><span>{feature}</span></li>)}</ul></div>
        <div className="portfolio-panel"><h2 className="font-display text-xl font-semibold">{fr ? "Technologies utilisées" : "Technology stack"}</h2><ul className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <li key={tech} className="portfolio-tag">{tech}</li>)}</ul><div className="mt-8 border-t border-border pt-6"><h2 className="font-semibold">{fr ? "État du projet" : "Project stage"}</h2><p className="mt-3 text-sm leading-relaxed text-muted">{pick(project.statusNote)}</p><p className="mt-4 break-words text-xs text-muted">{project.repository}</p></div></div>
      </section>
      {related.length > 0 && <section className="container-x pb-8"><h2 className="mb-6 font-display text-2xl font-semibold">{fr ? "À explorer aussi" : "Explore related work"}</h2><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{related.map((entry) => <ProjectCard key={entry.slug} project={entry} />)}</div></section>}
    </>
  );
}
