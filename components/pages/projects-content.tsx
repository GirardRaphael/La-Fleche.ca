"use client";

import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
      />

      <section className="container-x py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
