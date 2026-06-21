"use client";

import { Target, Crosshair, Wrench, Eye, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import ProfileCard from "@/components/profile-card/ProfileCard";

const valueIcons = [Target, Crosshair, Wrench, Eye];

export function AboutContent() {
  const { t, lang } = useLanguage();
  const about = t.aboutPage;

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} />

      <section className="container-x py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <div className="space-y-5 text-balance text-lg leading-relaxed text-muted">
              <p>{about.story1}</p>
              <p>{about.story2}</p>
              <p className="text-xl font-semibold gradient-text">
                {t.footer.tagline}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex justify-center lg:justify-end">
              <ProfileCard
                name="La Flèche AI"
                title={
                  lang === "fr"
                    ? "Studio d'automatisation IA"
                    : "AI Automation Studio"
                }
                handle="laflecheai"
                status={lang === "fr" ? "Disponible" : "Available"}
                contactText={t.common.contactUs}
                avatarUrl="/assets/profile-card/avatar.svg"
                miniAvatarUrl="/assets/profile-card/avatar.svg"
                iconUrl="/assets/profile-card/iconpattern.svg"
                showUserInfo
                enableTilt
                enableMobileTilt={false}
                behindGlowEnabled
                behindGlowColor="rgba(56, 189, 248, 0.55)"
                innerGradient="linear-gradient(145deg, rgba(124, 58, 237, 0.48) 0%, rgba(37, 99, 235, 0.28) 45%, rgba(56, 189, 248, 0.22) 100%)"
                onContactClick={() => {
                  window.location.href = "/contact";
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-12">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            {about.valuesTitle}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((value, i) => {
            const Ico = valueIcons[i];
            return (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card/40 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                    <Ico className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x py-12">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-card/30 p-10 text-center">
            <h3 className="font-display text-2xl font-bold">
              {about.ctaTitle}
            </h3>
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
        </Reveal>
      </section>
    </>
  );
}
