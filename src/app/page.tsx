import { HeroSection } from "@/sections/home/HeroSection";
import { StatsSection } from "@/sections/home/StatsSection";
import { ServicesSection } from "@/sections/home/ServicesSection";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { PortfolioSection } from "@/sections/home/PortfolioSection";
import { ValuesSection } from "@/sections/home/ValuesSection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { CTASection } from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <ValuesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
