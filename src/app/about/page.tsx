import type { Metadata } from "next";
import { AboutPage } from "@/sections/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Learn about Meta Intelligo Technologies — our mission to revolutionize enterprise digital transformation, our values, and the team driving AI-powered innovation.",
};

export default function Page() {
  return <AboutPage />;
}
