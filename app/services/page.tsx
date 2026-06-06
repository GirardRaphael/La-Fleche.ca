import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Services — AI Agents, Automation, Power BI & Custom Software",
  description:
    "AI agents, workflow automation, Power BI business intelligence, and custom software built around your real operations.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
