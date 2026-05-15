import type { Metadata } from "next";
import { PortfolioPageFull } from "@/sections/portfolio/PortfolioPageFull";

export const metadata: Metadata = {
  title: "Portfolio — Enterprise Project Case Studies",
  description:
    "Explore Meta Intelligo's portfolio of enterprise technology projects: AI platforms, cloud migrations, mobile apps, and digital transformations with measurable outcomes.",
};

export default function Page() {
  return <PortfolioPageFull />;
}
