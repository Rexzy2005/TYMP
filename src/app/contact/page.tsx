import type { Metadata } from "next";

import { Navbar } from "@/components/sections/Navbar";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us - TYMP Podcasts",
  description:
    "Get in touch with TYMP or apply to be a guest on the show. We'd love to hear your story, expertise, or feedback.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
