"use client";
import { motion } from "framer-motion";
import { AnimatedHeading, Reveal, EASE } from "./Motion";

const steps = [
  { n: "01", t: "Discover", d: "Deep audit of your business, audience, funnel and competitive landscape." },
  { n: "02", t: "Strategy", d: "Positioning, offer architecture and a measurable roadmap with clear KPIs." },
  { n: "03", t: "Design", d: "Brand systems and prototypes designed to convert, not just impress." },
  { n: "04", t: "Development", d: "Production-grade engineering — fast, accessible, SEO-ready, built to scale." },
  { n: "05", t: "Launch", d: "Tracking, QA, page-speed and security — shipped with confidence." },
  { n: "06", t: "Growth", d: "Weekly experiments across paid, SEO, CRO and lifecycle to compound results." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-mist py-28 sm:py-36">
      {/* Curved top divider */}
      <div className="pointer-events-none absolute -top-px left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[100px]" aria-hidden>
          <path d="M0,100 C360,20 1080,20 1440,100 L1440,100 L0,100 Z" fill="var(--mist)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-charcoal/40" />
              <span className="eyebrow">The process</span>
            </div>
          </Reveal>
          <AnimatedHeading
            text="A clear, calm path from idea to compounding growth."
            italic="compounding"
            className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
          />
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-hairline sm:left-1/2 sm:-translate-x-1/2" />
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12 sm:space-y-16"
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                }}
                className={`relative grid grid-cols-[40px_1fr] gap-6 sm:grid-cols-2 sm:gap-16 ${
                  i % 2 === 1 ? "sm:[&>*:last-child]:order-first sm:text-right" : ""
                }`}
              >
                <div className="relative sm:hidden">
                  <span className="absolute left-[10px] top-2 h-3 w-3 rounded-full bg-accent-brand ring-4 ring-mist" />
                </div>
                <div className={`hidden sm:block ${i % 2 === 1 ? "sm:pr-10" : "sm:pl-10"}`}>
                  <div className="font-display text-sm text-accent-brand">— {s.n}</div>
                  <h3 className="mt-2 font-display text-2xl font-medium text-charcoal sm:text-3xl">{s.t}</h3>
                  <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-charcoal/70 sm:max-w-none">{s.d}</p>
                </div>
                <div className={`sm:hidden ${""}`}>
                  <div className="font-display text-sm text-accent-brand">— {s.n}</div>
                  <h3 className="mt-1 font-display text-xl font-medium text-charcoal">{s.t}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{s.d}</p>
                </div>
                <div className="relative hidden sm:block">
                  <span className={`absolute top-3 h-3 w-3 rounded-full bg-accent-brand ring-4 ring-mist ${i % 2 === 1 ? "right-0 translate-x-[6px]" : "left-0 -translate-x-[6px]"}`} style={i % 2 === 1 ? { right: "calc(50% - 6px)" } : { left: "calc(-50% + 50%)" }} />
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
