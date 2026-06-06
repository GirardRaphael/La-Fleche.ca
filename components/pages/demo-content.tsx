"use client";

import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";

export function DemoContent() {
  const { t } = useLanguage();
  const d = t.demoPage;

  return (
    <>
      <PageHeader eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />

      <section className="container-x grid gap-8 py-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <ContactForm variant="demo" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-card/40 p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold">
              {d.whatToExpect}
            </h2>
            <ul className="mt-5 space-y-4">
              {d.expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-4">
              <p className="text-sm font-medium gradient-text">
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
