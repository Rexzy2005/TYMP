import type { Metadata } from "next";

import { Navbar } from "@/components/sections/Navbar";
import { EpisodesHero } from "@/components/sections/episodes/EpisodesHero";
import { EpisodesCatalog } from "@/components/sections/episodes/EpisodesCatalog";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Episodes - TYMP Podcasts",
  description:
    "Explore and listen to the latest podcast episodes across technology, comedy, business, and personal development.",
};

export default function EpisodesPage() {
  return (
    <>
      <Navbar />
      <main>
        <EpisodesHero />
        <EpisodesCatalog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
