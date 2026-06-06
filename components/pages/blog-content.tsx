"use client";

import { Info } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { CTASection } from "@/components/cta-section";
import { blogPosts } from "@/data/blog";
import { useLanguage } from "@/lib/i18n";

export function BlogContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t.blogPage.eyebrow}
        title={t.blogPage.title}
        subtitle={t.blogPage.subtitle}
      />

      <section className="container-x py-12">
        <Reveal>
          <p className="mx-auto mb-8 flex max-w-md items-center justify-center gap-2 rounded-full border border-white/10 bg-card/30 px-4 py-2 text-center text-xs text-muted">
            <Info className="h-3.5 w-3.5 shrink-0 text-brand-cyan" />
            {t.blogPage.sampleNote}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
