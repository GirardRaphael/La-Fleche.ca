import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About — Practical AI, Not Hype",
  description:
    "La Flèche AI helps businesses move faster by turning repetitive tasks into intelligent systems. Practical AI built around real operations.",
};

export default function AboutPage() {
  return <AboutContent />;
}
