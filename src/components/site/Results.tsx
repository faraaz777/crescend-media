"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimatedHeading, Reveal } from "./Motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { v: 120, s: "+", label: "Brands launched", sub: "across 11 countries" },
  { v: 38, s: "%", label: "Avg. conversion uplift", sub: "first 90 days post-launch" },
  { v: 4.9, s: "/5", label: "Client rating", sub: "verified retainer clients" },
  { v: 24, s: "h", label: "Support response", sub: "for active partners" },
];

export function Results() {
  return (
    <section id="results" className="relative bg-ink py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-ivory/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/60">The receipts</span>
            </div>
          </Reveal>
          <AnimatedHeading
            text="Numbers that built the reputation."
            italic="reputation."
            className="font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`border-b border-ivory/15 px-0 py-10 sm:px-8 sm:py-12 ${i < 3 ? "lg:border-r lg:border-ivory/15" : ""}`}>
                <div className="font-display text-5xl font-medium text-ivory sm:text-6xl">
                  {typeof s.v === "number" && s.v % 1 !== 0 ? (
                    <span>{s.v}{s.s}</span>
                  ) : (
                    <Counter to={s.v as number} suffix={s.s} />
                  )}
                </div>
                <div className="mt-5 text-sm font-semibold text-ivory">{s.label}</div>
                <div className="mt-1 text-xs text-ivory/55">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
