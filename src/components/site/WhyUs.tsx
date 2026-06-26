"use client";
import { Reveal, AnimatedHeading } from "./Motion";

const reasons = [
  { t: "Strategy before pixels", d: "Every engagement starts with positioning. We design for the buyer, not the brief." },
  { t: "Engineered for conversion", d: "Layouts, copy and pages structured to compound revenue, not just look beautiful." },
  { t: "Senior team, fast cycles", d: "No juniors, no hand-offs. Weekly sprints, daily shipping, real velocity." },
  { t: "Premium craft, end-to-end", d: "From the kerning to the codebase — the standard is the same: nothing average ships." },
  { t: "Tied to your numbers", d: "We report on pipeline, CAC and LTV — the metrics your board actually cares about." },
  { t: "Long-term partners", d: "Most clients work with us for 2+ years. We grow as you grow." },
];

export function WhyUs() {
  return (
    <section className="relative bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/40" />
                <span className="eyebrow">Why Crescend</span>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Premium isn't a finish. It's how the work is run."
              italic="finish."
              className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                We don't sell deliverables. We build the digital engine that
                makes your business worth more — every quarter, for years.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 border-b border-charcoal pb-1 text-sm font-semibold text-charcoal"
              >
                Talk to a strategist
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.t} delay={i * 0.05}>
                  <div className="border-b border-hairline px-0 py-7 sm:px-6">
                    <div className="font-display text-sm text-accent-brand">— 0{i + 1}</div>
                    <h3 className="mt-3 font-display text-lg font-medium text-charcoal">{r.t}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-charcoal/65">{r.d}</p>
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
