"use client";

import { Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

const accentBar: Record<BlogPost["accent"], string> = {
  purple: "from-brand-purple to-brand-blue",
  blue: "from-brand-blue to-brand-cyan",
  cyan: "from-brand-cyan to-brand-purple",
};

export function BlogCard({ post }: { post: BlogPost }) {
  const { pick, t } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      {/* gradient header band */}
      <div className={cn("h-2 w-full bg-gradient-to-r", accentBar[post.accent])} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-medium text-brand-cyan">
            {pick(post.category)}
          </span>
          <span className="inline-flex items-center gap-1 text-muted">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} {t.common.readTime}
          </span>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
          {pick(post.title)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {pick(post.excerpt)}
        </p>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-brand-cyan">
          {t.common.readArticle}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
