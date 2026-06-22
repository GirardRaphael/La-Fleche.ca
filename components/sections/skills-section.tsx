"use client";

import {
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Layers3,
  Network,
  Server,
} from "lucide-react";
import TiltedCard from "@/components/tilted-card/TiltedCard";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/skills";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const iconMap = [Code2, Server, Bot, Database, Cloud, Network, Layers3, BriefcaseBusiness];

const accentClasses = [
  "text-brand-blue border-brand-blue/40 bg-brand-blue/15",
  "text-emerald-300 border-emerald-300/40 bg-emerald-300/15",
  "text-brand-purple border-brand-purple/40 bg-brand-purple/15",
  "text-brand-cyan border-brand-cyan/40 bg-brand-cyan/15",
  "text-yellow-300 border-yellow-300/40 bg-yellow-300/15",
  "text-pink-300 border-pink-300/40 bg-pink-300/15",
  "text-teal-300 border-teal-300/40 bg-teal-300/15",
  "text-orange-300 border-orange-300/40 bg-orange-300/15",
];

function SkillCardOverlay({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const Icon = iconMap[index] ?? Code2;
  const secondaryItems =
    category.examples ?? category.tools ?? category.databases ?? category.platforms ?? [];
  const secondaryLabel = category.examples
    ? "Examples"
    : category.tools
      ? "Tools"
      : category.databases
        ? "Databases"
        : category.platforms
          ? "Cloud"
          : null;

  return (
    <div className="flex h-full flex-col justify-between p-5">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur",
              accentClasses[index],
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-xs font-semibold text-foreground/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 max-w-[15rem] font-display text-2xl font-semibold leading-tight tracking-tight text-white">
          {category.title}
        </h3>
        <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-slate-200">
          {category.description}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            Skills
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {category.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-black/35 px-2 py-1 text-[11px] font-medium text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {secondaryLabel && secondaryItems.length > 0 && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
              {secondaryLabel}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              {secondaryItems.slice(0, 3).join(" / ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20" id="skills">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={(index % 4) * 0.05}>
            <TiltedCard
              imageSrc={category.image}
              altText={`${category.title} skill card`}
              captionText={category.title}
              containerHeight="390px"
              containerWidth="100%"
              imageHeight="390px"
              imageWidth="100%"
              rotateAmplitude={9}
              scaleOnHover={1.035}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <SkillCardOverlay category={category} index={index} />
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
