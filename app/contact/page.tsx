import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact — Let's Talk About Your Operations",
  description:
    "Get in touch with La Flèche AI. Tell us about your project, budget, and goals — we reply fast.",
};

export default function ContactPage() {
  return <ContactContent />;
}
