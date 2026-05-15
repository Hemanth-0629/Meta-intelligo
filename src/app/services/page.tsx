import type { Metadata } from "next";
import { ServicesPage } from "@/sections/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services — AI, Cloud, DevOps & Digital Transformation",
  description:
    "Explore Meta Intelligo's full spectrum of enterprise technology services: AI & ML, Cloud Computing, DevOps, Digital Transformation, Custom Software, IoT, and more.",
};

export default function Page() {
  return <ServicesPage />;
}
