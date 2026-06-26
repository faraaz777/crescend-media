"use client";
import { AnimatedHeading, Reveal } from "./Motion";

const services = [
  { n: "01", t: "Brand & Identity", d: "Positioning, visual systems and verbal identity built to make ambitious companies feel inevitable." },
  { n: "02", t: "Website Design & Development", d: "Editorial-grade marketing sites engineered for speed, SEO and measurable conversion." },
  { n: "03", t: "E-Commerce", d: "Shopify, headless and custom storefronts that lift AOV, repeat rate and category authority." },
  { n: "04", t: "Performance Marketing", d: "Creative-led paid acquisition on Meta, Google and LinkedIn — tied to pipeline, not vanity metrics." },
  { n: "05", t: "SEO & Content", d: "Technical foundations and editorial that compound traffic and qualified intent for years." },
  { n: "06", t: "Growth Retainers", d: "An embedded senior squad — strategy, design, dev, media — moving weekly against your KPIs." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-mist py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/40" />
                <span className="eyebrow">Capabilities</span>
              </div>
            </Reveal>
            <AnimatedHeading
              text="One senior team. Every lever that moves the business."
              italic="lever"
              className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                We replace the agency stack with one connected team — strategy,
                brand, product and acquisition under one roof, on one timeline.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-hairline">
              {services.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <li className="group grid grid-cols-12 items-baseline gap-4 border-b border-hairline py-7 transition-colors hover:bg-ivory/60">
                    <div className="col-span-2 font-display text-sm text-charcoal/50 sm:text-base">{s.n}</div>
                    <div className="col-span-10 sm:col-span-4">
                      <h3 className="font-display text-xl font-medium text-charcoal sm:text-2xl">{s.t}</h3>
                    </div>
                    <p className="col-span-12 text-[14.5px] leading-relaxed text-charcoal/70 sm:col-span-6">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
