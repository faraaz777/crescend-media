"use client";
import { motion } from "framer-motion";
import { EASE } from "./Motion";
import { OrbitVisual } from "./OrbitVisual";
import { useInView } from "framer-motion";
import { useRef } from "react";

const headlineLines = [
  ["Premium digital presence", "for"],
  ["brands that want to look", null],
  ["established,", "italic:sell better,"],
  ["and", "italic:grow faster."],
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-ivory pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4.5rem+env(safe-area-inset-top,0px))] lg:min-h-[88vh]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute -right-32 -top-16 h-auto w-[min(900px,120vw)] opacity-[0.03] sm:-right-40 sm:-top-20 lg:opacity-[0.04]"
          viewBox="0 0 900 900"
          fill="none"
        >
          <circle cx="450" cy="450" r="320" stroke="#14161B" strokeWidth="1" />
          <circle cx="450" cy="450" r="220" stroke="#14161B" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="relative z-10 max-w-3xl lg:max-w-[52vw] lg:pr-6 xl:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2.5 sm:mb-6 sm:gap-3"
          >
            <span className="h-px w-8 shrink-0 bg-charcoal/40 sm:w-10" />
            <span className="eyebrow max-sm:text-[10px] max-sm:tracking-[0.16em]">
              Crescend Media Group · Est. 2018
            </span>
          </motion.div>

          <h1 className="hero-headline text-pretty font-display font-medium tracking-tight text-charcoal">
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
                        className={isItalic ? "font-display italic text-accent-brand" : ""}
                      >
                        {text}
                        {wi < line.length - 1 && line[wi + 1] ? " " : ""}
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
            className="hero-subtext mt-7 max-w-xl leading-relaxed text-charcoal/70 sm:mt-9 lg:mt-10"
          >
            We design websites, brands and growth systems that earn trust before
            the first conversation — and convert it into long-term revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-5 lg:mt-10"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ink sm:w-auto"
            >
              Book a strategy call
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 px-1 py-3.5 text-sm font-semibold text-charcoal sm:w-auto sm:justify-start"
            >
              <span className="relative">
                See selected work
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-charcoal transition-transform duration-500 group-hover:scale-x-110" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[29vw] overflow-hidden lg:block"
        aria-hidden
      >
        <div className="flex h-full items-center justify-end">
          <OrbitVisual />
        </div>
      </motion.div>

      <div className="pointer-events-none leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-10 w-full sm:h-14 lg:h-16"
        >
          <path
            d="M0,0 C320,80 720,80 1080,40 C1240,20 1360,10 1440,0 L1440,80 L0,80 Z"
            fill="var(--mist)"
          />
        </svg>
      </div>
    </section>
  );
}
