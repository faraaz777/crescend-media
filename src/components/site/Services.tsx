"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { AnimatedHeading, Reveal } from "./Motion";

const services = [
  {
    n: "01",
    t: "Brand & Identity",
    d: "Positioning, visual systems and verbal identity built to make ambitious companies feel inevitable.",
  },
  {
    n: "02",
    t: "Website Design & Development",
    d: "Editorial-grade marketing sites engineered for speed, SEO and measurable conversion.",
  },
  {
    n: "03",
    t: "E-Commerce",
    d: "Shopify, headless and custom storefronts that lift AOV, repeat rate and category authority.",
  },
  {
    n: "04",
    t: "Performance Marketing",
    d: "Creative-led paid acquisition on Meta, Google and LinkedIn — tied to pipeline, not vanity metrics.",
  },
  {
    n: "05",
    t: "SEO & Content",
    d: "Technical foundations and editorial that compound traffic and qualified intent for years.",
  },
  {
    n: "06",
    t: "Growth Retainers",
    d: "An embedded senior squad — strategy, design, dev, media — moving weekly against your KPIs.",
  },
] as const;

const ITEM_HEIGHT = 148;
const MENU_VIEW_HEIGHT = 460;

function ServiceMenuItem({
  index,
  smoothIndex,
  service,
}: {
  index: number;
  smoothIndex: MotionValue<number>;
  service: (typeof services)[number];
}) {
  const opacity = useTransform(smoothIndex, (v) => Math.max(0.28, 1 - Math.abs(index - v) * 0.38));
  const scale = useTransform(smoothIndex, (v) => Math.max(0.94, 1 - Math.abs(index - v) * 0.05));
  const x = useTransform(smoothIndex, (v) => {
    const dist = Math.abs(index - v);
    return dist < 0.6 ? (1 - dist) * 14 : 0;
  });
  const numberOpacity = useTransform(smoothIndex, (v) => (Math.abs(index - v) < 0.45 ? 1 : 0));
  const titleOpacity = useTransform(smoothIndex, (v) =>
    Math.abs(index - v) < 0.45 ? 1 : 0.32,
  );
  const descOpacity = useTransform(smoothIndex, (v) => {
    const dist = Math.abs(index - v);
    if (dist > 0.55) return 0;
    return Math.max(0, 1 - dist * 1.75);
  });
  const descY = useTransform(smoothIndex, (v) => Math.abs(index - v) * 6);

  return (
    <motion.li
      style={{ height: ITEM_HEIGHT, opacity, scale, x }}
      className="origin-left will-change-transform"
    >
      <div className="flex gap-5">
        <div className="relative w-10 shrink-0 pt-1">
          <motion.span
            style={{ opacity: numberOpacity }}
            className="absolute inset-0 font-display text-base text-accent-brand"
          >
            {service.n}
          </motion.span>
          <span className="font-display text-base text-charcoal/30">{service.n}</span>
        </div>
        <div className="min-w-0 flex-1">
          <motion.h3
            style={{ opacity: titleOpacity }}
            className="font-display text-[2rem] font-medium leading-[1.12] text-charcoal xl:text-[2.25rem]"
          >
            {service.t}
          </motion.h3>
          <motion.p
            style={{ opacity: descOpacity, y: descY }}
            className="mt-2 max-w-xl text-[17px] leading-relaxed text-charcoal/75 xl:text-[18px]"
          >
            {service.d}
          </motion.p>
        </div>
      </div>
    </motion.li>
  );
}

function MenuDot({
  index,
  smoothIndex,
}: {
  index: number;
  smoothIndex: MotionValue<number>;
}) {
  const scale = useTransform(smoothIndex, (v) =>
    Math.abs(index - v) < 0.45 ? 1.35 : 1,
  );
  const opacity = useTransform(smoothIndex, (v) =>
    Math.abs(index - v) < 0.45 ? 1 : 0.22,
  );

  return (
    <motion.span
      style={{ scale, opacity }}
      className="h-1.5 w-1.5 rounded-full bg-charcoal"
    />
  );
}

function DesktopScrollMenu({ smoothIndex }: { smoothIndex: MotionValue<number> }) {
  const listY = useTransform(
    smoothIndex,
    (v) => MENU_VIEW_HEIGHT / 2 - ITEM_HEIGHT / 2 - v * ITEM_HEIGHT,
  );

  return (
    <div className="relative">
      <div className="relative overflow-hidden" style={{ height: MENU_VIEW_HEIGHT }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-mist via-mist/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-mist via-mist/85 to-transparent"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 border-y border-hairline"
          style={{ height: ITEM_HEIGHT }}
        />

        <motion.ul style={{ y: listY }} className="relative will-change-transform">
          {services.map((service, index) => (
            <ServiceMenuItem
              key={service.n}
              index={index}
              smoothIndex={smoothIndex}
              service={service}
            />
          ))}
        </motion.ul>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {services.map((service, index) => (
          <MenuDot key={service.n} index={index} smoothIndex={smoothIndex} />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);
  const smoothIndex = useSpring(rawIndex, {
    stiffness: 140,
    damping: 32,
    mass: 0.85,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-mist pb-28 pt-14 sm:pb-36 sm:pt-16 lg:pb-0 lg:pt-0"
    >
      <div
        className="hidden lg:block"
        style={{ height: `${services.length * 58}vh` }}
      >
        <div className="sticky top-[4.5rem] flex h-[calc(100vh-4.5rem)] items-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-10">
            <div className="grid grid-cols-12 items-center gap-16">
              <div className="col-span-5">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-charcoal/40" />
                  <span className="eyebrow">Capabilities</span>
                </div>
                <AnimatedHeading
                  text="One senior team. Every lever that moves the business."
                  italic="lever"
                  className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
                />
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                  We replace the agency stack with one connected team — strategy,
                  brand, product and acquisition under one roof, on one timeline.
                </p>
                <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal/45">
                  Scroll to explore
                </p>
              </div>

              <div className="col-span-7">
                <DesktopScrollMenu smoothIndex={smoothIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:hidden">
        <div className="grid gap-12">
          <div>
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

          <ul className="border-t border-hairline">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <li className="group grid grid-cols-12 items-baseline gap-4 border-b border-hairline py-7 transition-colors hover:bg-ivory/60">
                  <div className="col-span-2 font-display text-sm text-charcoal/50 sm:text-base">
                    {s.n}
                  </div>
                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="font-display text-xl font-medium text-charcoal sm:text-2xl">
                      {s.t}
                    </h3>
                  </div>
                  <p className="col-span-12 text-[14.5px] leading-relaxed text-charcoal/70 sm:col-span-6">
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
