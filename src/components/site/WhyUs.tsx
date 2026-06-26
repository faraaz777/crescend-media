"use client";
import { Reveal, AnimatedHeading } from "./Motion";
import { Target, Zap, TrendingUp, ShieldCheck, LineChart, Handshake } from "lucide-react";

const reasons = [
  { icon: Target, title: "Strategy before pixels", body: "Every project starts with a positioning sprint. We build for the buyer, not the brief." },
  { icon: TrendingUp, title: "Engineered for conversion", body: "Layouts, copy and pages structured to compound revenue — not just look beautiful." },
  { icon: Zap, title: "Senior team. Fast cycles.", body: "No juniors, no hand-offs. Weekly sprints, daily shipping, real velocity." },
  { icon: ShieldCheck, title: "Premium craft, end-to-end", body: "From the kerning to the codebase — the standard is the same: nothing average ships." },
  { icon: LineChart, title: "Tied to your numbers", body: "We report on pipeline, CAC, LTV — the metrics your board actually cares about." },
  { icon: Handshake, title: "Long-term partners", body: "Most of our clients have worked with us for 2+ years. We grow as you grow." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" /> Why Crescend
              </div>
            </Reveal>
            <AnimatedHeading
              text="Premium isn't a finish. It's how the work is run."
              highlight="Premium"
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We don't sell deliverables. We build the digital engine that makes your
                business worth more — every quarter, for years.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
                >
                  Talk to a strategist
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.05}>
                  <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-surface-2">
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-teal transition-colors group-hover:text-purple">
                      <r.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
