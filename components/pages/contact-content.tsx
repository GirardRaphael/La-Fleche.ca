"use client";

import { Mail, Github, CalendarCheck, ArrowUpRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";

export function ContactContent() {
  const { t } = useLanguage();
  const c = t.contactPage;

  const cards = [
    {
      icon: Mail,
      title: c.emailCard,
      value: "xxraphaelgirardxx@gmail.com",
      href: "mailto:xxraphaelgirardxx@gmail.com",
      external: false,
    },
    {
      icon: Github,
      title: c.githubCard,
      value: "@xxraphaelgirardxx",
      href: "https://github.com/xxraphaelgirardxx",
      external: true,
    },
    {
      icon: CalendarCheck,
      title: c.demoCard,
      value: t.common.bookDemo,
      href: "/book-demo",
      external: false,
    },
  ];

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="container-x grid gap-8 py-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <ContactForm variant="contact" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <h2 className="font-display text-lg font-semibold">
              {c.cardsTitle}
            </h2>
            {cards.map((card) => {
              const Ico = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card/40 p-4 transition-all hover:-translate-y-0.5 hover:border-brand-purple/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                    <Ico className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{card.title}</p>
                    <p className="truncate text-sm text-muted">{card.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-foreground" />
                </a>
              );
            })}

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card/30 p-4 text-sm text-muted">
              <MapPin className="h-5 w-5 text-brand-cyan" />
              {t.footer.location}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
