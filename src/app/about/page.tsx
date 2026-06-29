import { Navbar } from "@/components/sections/Navbar";
import { AboutHero } from "@/components/sections/AboutHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { ApproachSection } from "@/components/sections/about/ApproachSection";
import { AboutFeatures } from "@/components/sections/about/AboutFeatures";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { AboutHosts } from "@/components/sections/about/AboutHosts";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <StorySection />
        <ApproachSection />
        <AboutFeatures />
        <AboutSection />
        <AboutHosts />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}