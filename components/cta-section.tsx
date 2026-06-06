"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12">
          <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand-purple/30 blur-[100px]" />
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-brand-blue/30 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.6rem]">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-muted md:text-lg">
              {t.finalCta.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book-demo" size="lg" className="w-full sm:w-auto">
                {t.common.bookDemo}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.common.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
