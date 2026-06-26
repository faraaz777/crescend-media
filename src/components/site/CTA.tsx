"use client";
import { AnimatedHeading, Reveal } from "./Motion";

export function CTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-10 sm:p-16 shadow-elev">
          <div className="absolute inset-0 -z-10 opacity-90">
            <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full opacity-50 blur-[100px]"
                 style={{ background: "radial-gradient(closest-side, rgba(0,212,179,0.5), transparent)" }} />
            <div className="absolute -right-20 -bottom-32 h-[460px] w-[460px] rounded-full opacity-60 blur-[100px]"
                 style={{ background: "radial-gradient(closest-side, rgba(106,0,255,0.5), transparent)" }} />
          </div>
          <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Limited engagements
              </div>
            </Reveal>
            <AnimatedHeading
              text="Ready to build something worth scaling?"
              highlight="scaling?"
              className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
            />
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Tell us about the business. We'll come back within one working day with a
                first read and a clear next step — no pitch, no pressure.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href="#contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-elev">
                  <span className="absolute inset-0 brand-ring" />
                  <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="relative">Book a strategy call</span>
                  <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href="https://wa.me/0000000000" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold transition hover:bg-white/[0.1]">
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
