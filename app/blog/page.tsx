import type { Metadata } from "next";
import { BlogContent } from "@/components/pages/blog-content";

export const metadata: Metadata = {
  title: "Blog — Practical AI for Operations & Automation",
  description:
    "Insights on AI agents, workflow automation, Power BI dashboards, and how businesses can automate without replacing their team.",
};

export default function BlogPage() {
  return <BlogContent />;
}
