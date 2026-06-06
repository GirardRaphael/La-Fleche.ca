"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow={t.featured.eyebrow}
        title={t.featured.title}
        subtitle={t.featured.subtitle}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/projects" variant="secondary" size="lg">
          {t.common.viewAll}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
