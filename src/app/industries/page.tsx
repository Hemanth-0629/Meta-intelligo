import type { Metadata } from "next";
import { IndustriesPage } from "@/sections/industries/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries — Healthcare, Banking, Insurance & More",
  description:
    "Meta Intelligo delivers specialized technology solutions across Healthcare, Banking, Insurance, Manufacturing, Retail, Logistics, Government, and E-Commerce.",
};

export default function Page() {
  return <IndustriesPage />;
}
