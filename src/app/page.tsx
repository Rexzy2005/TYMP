import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Episodes } from "@/components/sections/Episodes";
import { Discovery } from "@/components/sections/Discovery";
import { Categories } from "@/components/sections/Categories";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Hosts } from "@/components/sections/Hosts";
import { Pricing } from "@/components/sections/Pricing";
import { Blog } from "@/components/sections/Blog";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Episodes />
        <Discovery />
        <Categories />
        <Features />
        <Testimonials />
        <Hosts />
        <Pricing />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}