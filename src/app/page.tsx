import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionCards } from "@/components/sections/solution-cards";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { FitSection } from "@/components/sections/fit-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionCards />
      <FeatureGrid />
      <Timeline />
      <FitSection />
      <FAQSection />
      <CTABand />
    </>
  );
}
