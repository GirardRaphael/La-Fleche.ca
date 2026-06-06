import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/projects-content";

export const metadata: Metadata = {
  title: "Projects — AI Systems for Operations & Logistics",
  description:
    "Explore La Flèche AI projects: escalation manager, inbox AI, loading planner, dispatch AI, call assistant, Power BI dashboards and more.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
