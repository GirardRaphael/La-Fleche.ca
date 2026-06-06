"use client";

import Link from "next/link";
import { Mail, Github, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const pageLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/solutions", label: t.nav.solutions },
    { href: "/projects", label: t.nav.projects },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
  ];

  const offerLinks = [
    { href: "/services#ai-agents", label: t.nav.services },
    { href: "/book-demo", label: t.common.bookDemo },
    { href: "/contact", label: t.common.contactUs },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              {t.footer.description}
            </p>
            <p className="mt-4 text-sm font-medium gradient-text">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.pages}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.offers}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {offerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:xxraphaelgirardxx@gmail.com"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-brand-cyan" />
                  xxraphaelgirardxx@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/xxraphaelgirardxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4 text-brand-cyan" />
                  @xxraphaelgirardxx
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-brand-cyan" />
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {year} La Flèche AI. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
