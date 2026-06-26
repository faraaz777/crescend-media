"use client";
import { motion } from "framer-motion";
import { AnimatedHeading, Reveal, EASE } from "./Motion";

const steps = [
  { n: "01", t: "Discover", d: "Deep audit of your business, audience, funnel, and competitive landscape." },
  { n: "02", t: "Strategy", d: "Positioning, offer architecture, and a measurable roadmap with clear KPIs." },
  { n: "03", t: "Design", d: "Brand systems and high-fidelity prototypes designed to convert, not just impress." },
  { n: "04", t: "Development", d: "Production-grade engineering: fast, accessible, SEO-ready, built to scale." },
  { n: "05", t: "Launch", d: "Tracking, QA, page-speed, security — shipped with confidence and care." },
  { n: "06", t: "Growth", d: "Weekly experiments across paid, SEO, CRO and lifecycle to compound results." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" /> The Process
            </div>
          </Reveal>
          <AnimatedHeading
            text="A clear, calm path from idea to compounding growth."
            highlight="compounding"
            className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div className="h-full w-full" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)" }} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-6 lg:gap-10"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
                }}
                className={`relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="text-gradient text-6xl font-bold tracking-tighter sm:text-7xl">{s.n}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{s.t}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground lg:inline-block">
                    {s.d}
                  </p>
                </div>
                <div className="relative">
                  <div className={`group glass relative h-44 overflow-hidden rounded-2xl p-6 shadow-card transition-all duration-500 hover:-translate-y-1`}>
                    <div className="absolute inset-0 opacity-10" style={{ background: "var(--gradient-brand)" }} />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
                    <div className="relative flex h-full flex-col justify-end">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Phase {s.n}</div>
                      <div className="mt-1 text-xl font-semibold">{s.t}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
