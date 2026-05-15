import type { Metadata } from "next";
import { ContactPageFull } from "@/sections/contact/ContactPageFull";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Enterprise Transformation",
  description:
    "Get in touch with Meta Intelligo Technologies. Schedule a free consultation, WhatsApp us, or visit our Bengaluru office.",
};

export default function Page() {
  return <ContactPageFull />;
}
