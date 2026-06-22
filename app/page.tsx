import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { ResultsSection } from "@/components/sections/results-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ResultsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
