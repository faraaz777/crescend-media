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
      { title: "Crescend Media Group — Develop. Scale. Collect." },
      { name: "description", content: "Premium digital agency for ambitious founders. Brand, web, e-commerce, performance marketing and growth systems — engineered to compound revenue." },
      { property: "og:title", content: "Crescend Media Group — Develop. Scale. Collect." },
      { property: "og:description", content: "Premium digital agency for ambitious founders. Brand, web, e-commerce, performance marketing and growth systems — engineered to compound revenue." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
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
