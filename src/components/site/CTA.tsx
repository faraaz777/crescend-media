"use client";
import { AnimatedHeading, Reveal } from "./Motion";

export function CTA() {
  return (
    <section className="relative bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
        <Reveal>
          <div className="mx-auto mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-charcoal/40" />
            <span className="eyebrow">Limited engagements · Q1 2026</span>
            <span className="h-px w-10 bg-charcoal/40" />
          </div>
        </Reveal>
        <AnimatedHeading
          text="Ready to build something worth scaling?"
          italic="scaling?"
          className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-charcoal/70">
            Tell us about the business. We'll come back within one working day
            with a first read and a clear next step — no pitch, no pressure.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ink">
              Book a strategy call
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a href="https://wa.me/0000000000" className="inline-flex items-center gap-2 rounded-md border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:bg-mist">
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
