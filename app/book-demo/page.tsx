import type { Metadata } from "next";
import { DemoContent } from "@/components/pages/demo-content";

export const metadata: Metadata = {
  title: "Book a Demo — See La Flèche AI in Action",
  description:
    "Book a 30-minute demo. We'll analyze your operations and show you exactly what can be automated with AI agents and dashboards.",
};

export default function BookDemoPage() {
  return <DemoContent />;
}
