import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { OperationsDashboard } from "@/components/sections/operations-dashboard";
import { RenterPortal } from "@/components/sections/renter-portal";
import { BookingWebsite } from "@/components/sections/booking-website";
import { Timeline } from "@/components/sections/timeline";
import { FitSection } from "@/components/sections/fit-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OperationsDashboard />
      <RenterPortal />
      <BookingWebsite />
      <Timeline />
      <FitSection />
      <FAQSection />
      <CTABand />
    </>
  );
}
