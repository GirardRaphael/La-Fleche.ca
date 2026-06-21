"use client";

import { ArrowUpRight, Check, Github } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack/ScrollStack";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const accentText = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
} as const;

const accentGlow = {
  purple: "from-brand-purple/40",
  blue: "from-brand-blue/40",
  cyan: "from-brand-cyan/40",
} as const;

export function ProjectsContent() {
  const { t, pick } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
      />

      <section className="container-x py-12">
        <Reveal>
          <div className="relative overflow-visible">
            <ScrollStack
              itemDistance={86}
              itemScale={0.025}
              itemStackDistance={26}
              stackPosition="16%"
              scaleEndPosition="7%"
              baseScale={0.83}
              rotationAmount={0.35}
              blurAmount={0.35}
              useWindowScroll
            >
              {projects.map((project, index) => (
                <ScrollStackItem
                  key={project.slug}
                  itemClassName="project-folder-card"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-folder-link group"
                    aria-label={`${t.common.viewProject}: ${pick(project.name)}`}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-70",
                        accentGlow[project.accent],
                      )}
                    />
                    <div className="project-folder-content">
                      <div className="min-w-0">
                        <div className="project-folder-meta">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10">
                            <Icon
                              name={project.icon}
                              className={cn(
                                "h-6 w-6",
                                accentText[project.accent],
                              )}
                            />
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                            {pick(project.category)}
                          </span>
                          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-muted">
                            Folder {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                          {pick(project.name)}
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                          {pick(project.tagline)}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {pick(project.features)
                            .slice(0, 4)
                            .map((feature) => (
                              <div
                                key={feature}
                                className="project-folder-feature text-sm text-muted"
                              >
                                <Check
                                  className={cn(
                                    "mt-0.5 h-4 w-4 shrink-0",
                                    accentText[project.accent],
                                  )}
                                />
                                <span>{feature}</span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="project-folder-side">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {t.common.problem}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                            {pick(project.problem)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {t.common.value}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                            {pick(project.value)}
                          </p>
                        </div>

                        <div
                          className={cn(
                            "inline-flex items-center gap-2 font-semibold",
                            accentText[project.accent],
                          )}
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </a>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
