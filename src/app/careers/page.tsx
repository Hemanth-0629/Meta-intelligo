import type { Metadata } from "next";
import { CareersPage } from "@/sections/careers/CareersPage";

export const metadata: Metadata = {
  title: "Careers — Join the Meta Intelligo Team",
  description:
    "Build your career at Meta Intelligo Technologies. We're hiring engineers, data scientists, cloud architects, and product managers to drive AI-powered enterprise innovation.",
};

export default function Page() {
  return <CareersPage />;
}
