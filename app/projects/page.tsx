import type { Metadata } from "next";
import { ProjectsContent } from "@/components/pages/projects-content";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects — AI, Web, Mobile & Machine Learning",
  description:
    "Explore Raphael Girard’s public GitHub projects: AI applications, forecasting, computer vision, web and mobile development, logistics and cloud infrastructure.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
