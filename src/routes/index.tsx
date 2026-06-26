import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Work } from "@/components/site/Work";
import { Results } from "@/components/site/Results";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crescend Media Group — Premium websites, brands & growth systems" },
      { name: "description", content: "Premium websites, brands and growth systems for ambitious companies. Editorial design, conversion engineering, measurable growth." },
      { property: "og:title", content: "Crescend Media Group — Premium websites, brands & growth systems" },
      { property: "og:description", content: "Premium websites, brands and growth systems for ambitious companies. Editorial design, conversion engineering, measurable growth." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-ivory text-charcoal">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Work />
      <Results />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
