"use client";
import { motion } from "framer-motion";
import { EASE } from "./Motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const headlineLines = [
    ["Premium digital presence", "for"],
    ["brands that want to look", null],
    ["established,", "italic:sell better,"],
    ["and", "italic:grow faster."],
  ];

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden bg-ivory pt-36 pb-40 sm:pt-44 sm:pb-56">
      {/* Subtle editorial backdrop — single soft tinted shape inspired by the logo's curve */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <svg className="absolute -right-40 -top-20 opacity-[0.06] sm:opacity-[0.08]" width="900" height="900" viewBox="0 0 900 900" fill="none">
          <circle cx="450" cy="450" r="320" stroke="#14161B" strokeWidth="1" />
          <circle cx="450" cy="450" r="220" stroke="#14161B" strokeWidth="1" />
          <path d="M620 320a200 200 0 1 0 0 260" stroke="var(--accent-brand)" strokeWidth="38" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-charcoal/40" />
            <span className="eyebrow">Crescend Media Group · Est. 2018</span>
          </motion.div>

          <h1 className="font-display text-[44px] font-medium leading-[1.02] tracking-tight text-charcoal sm:text-[68px] lg:text-[88px]">
            {headlineLines.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={inView ? { y: "0%" } : { y: "115%" }}
                  transition={{ duration: 1, ease: EASE, delay: 0.1 + li * 0.12 }}
                  className="inline-block"
                >
                  {line.map((word, wi) => {
                    if (!word) return null;
                    const isItalic = word.startsWith("italic:");
                    const text = isItalic ? word.replace("italic:", "") : word;
                    return (
                      <span
                        key={wi}
                        className={`${isItalic ? "italic text-accent-brand font-display" : ""}`}
                      >
                        {text}{wi < line.length - 1 && line[wi + 1] ? " " : ""}
                      </span>
                    );
                  })}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="mt-10 max-w-xl text-[17px] leading-relaxed text-charcoal/70 sm:text-[18px]"
          >
            We design websites, brands and growth systems that earn trust before
            the first conversation — and convert it into long-term revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ink"
            >
              Book a strategy call
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-1 py-3.5 text-sm font-semibold text-charcoal"
            >
              <span className="relative">
                See selected work
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-charcoal transition-transform duration-500 group-hover:scale-x-110" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right side — vertical meta column, editorial style */}
        <motion.aside
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:col-span-4 lg:flex lg:flex-col lg:justify-end lg:pb-6"
        >
          <div className="border-l border-hairline pl-6">
            <div className="eyebrow">In numbers</div>
            <div className="mt-6 space-y-5">
              {[
                ["120+", "Brands shipped worldwide"],
                ["38%", "Average conversion uplift"],
                ["4.9 / 5", "Verified client rating"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-display text-3xl text-charcoal">{n}</div>
                  <div className="mt-1 text-[12px] text-charcoal/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Curved bottom transition into the next (mist) section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-[80px] w-full sm:h-[140px]" aria-hidden>
          <path
            d="M0,40 C320,140 720,140 1080,80 C1240,55 1360,40 1440,30 L1440,140 L0,140 Z"
            fill="var(--mist)"
          />
        </svg>
      </div>
    </section>
  );
}
