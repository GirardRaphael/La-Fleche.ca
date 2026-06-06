import type { Metadata } from "next";
import { SolutionsContent } from "@/components/pages/solutions-content";

export const metadata: Metadata = {
  title: "Solutions — Logistics, Warehousing, Industrial & SMB Automation",
  description:
    "Industry-specific AI solutions for logistics, warehousing, small businesses, industrial operations, customer service, and admin teams.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
