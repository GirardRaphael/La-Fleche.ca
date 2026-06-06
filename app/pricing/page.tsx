import type { Metadata } from "next";
import { PricingContent } from "@/components/pages/pricing-content";

export const metadata: Metadata = {
  title: "Pricing — AI Automation Packages & One-Time Services",
  description:
    "Transparent pricing for AI automation: Starter, Growth, Operations Command Center, and Custom Build packages, plus one-time services.",
};

export default function PricingPage() {
  return <PricingContent />;
}
