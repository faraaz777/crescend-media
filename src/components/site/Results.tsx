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
      const controls = animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
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
  { v: 38, s: "%", label: "Average CR uplift", sub: "first 90 days post-launch" },
  { v: 4.9, s: "/5", label: "Client rating", sub: "verified retainer clients" },
  { v: 24, s: "h", label: "Support response", sub: "for active partners" },
];

export function Results() {
  return (
    <section id="results" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[140px]"
             style={{ background: "radial-gradient(closest-side, rgba(106,0,255,0.5), transparent)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" /> The receipts
            </div>
          </Reveal>
          <AnimatedHeading
            text="Numbers that built the reputation."
            highlight="reputation."
            className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
          />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4 shadow-elev">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full bg-card p-8 sm:p-10">
                <div className="text-gradient text-5xl font-bold tracking-tight sm:text-6xl">
                  {typeof s.v === "number" && s.v % 1 !== 0 ? (
                    <span>{s.v}{s.s}</span>
                  ) : (
                    <Counter to={s.v as number} suffix={s.s} />
                  )}
                </div>
                <div className="mt-4 text-sm font-semibold">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
