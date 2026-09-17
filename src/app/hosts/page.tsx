import type { Metadata } from "next";

import { Navbar } from "@/components/sections/Navbar";
import { TeamGrid } from "@/components/sections/hosts/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Hosts - TYMP Podcasts",
  description:
    "Meet the storytellers and experts behind TYMP. Discover the hosts bringing lively discussions, insights, and humor to every episode.",
};

export default function HostsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
