"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { EASE } from "./Motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const headlineLines = [
  ["Premium digital presence", "for"],
  ["brands that want to look", null],
  ["established,", "italic:sell better,"],
  ["and", "italic:grow faster."],
];

type BentoCardConfig = {
  id: string;
  gradient: string;
  label: string;
  labelPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  decorations: Array<{
    kind: "circle" | "square";
    size: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  }>;
  skeleton: Array<{
    width: number;
    opacity: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  }>;
};

const bentoCards: BentoCardConfig[] = [
  {
    id: "teal",
    gradient: "linear-gradient(155deg, #12736C 0%, #0A3E3B 100%)",
    label: "BRAND",
    labelPosition: "top-left",
    decorations: [
      { kind: "square", size: 56, top: 36, left: 22 },
      { kind: "circle", size: 70, top: 110, right: 18 },
      { kind: "circle", size: 52, bottom: 30, left: 26 },
    ],
    skeleton: [
      { width: 72, opacity: 0.52, top: 20, left: 22 },
      { width: 44, opacity: 0.35, top: 30, left: 22 },
      { width: 90, opacity: 0.58, bottom: 28, left: 22 },
      { width: 58, opacity: 0.36, bottom: 18, left: 22 },
    ],
  },
  {
    id: "violet",
    gradient: "linear-gradient(155deg, #6C5CE8 0%, #33279C 100%)",
    label: "GROWTH",
    labelPosition: "top-left",
    decorations: [
      { kind: "circle", size: 58, top: 26, left: 24 },
      { kind: "circle", size: 36, top: 68, right: 34 },
      { kind: "square", size: 48, bottom: 42, right: 26 },
    ],
    skeleton: [
      { width: 76, opacity: 0.48, top: 20, left: 22 },
      { width: 46, opacity: 0.34, top: 30, left: 22 },
      { width: 78, opacity: 0.52, bottom: 28, left: 22 },
      { width: 52, opacity: 0.35, bottom: 18, left: 22 },
    ],
  },
  {
    id: "blue",
    gradient: "linear-gradient(155deg, #3F63F0 0%, #1E3299 100%)",
    label: "CASE STUDY",
    labelPosition: "top-left",
    decorations: [
      { kind: "circle", size: 62, top: 26, left: 24 },
      { kind: "circle", size: 44, top: 98, right: 24 },
      { kind: "square", size: 52, bottom: 34, left: 24 },
    ],
    skeleton: [
      { width: 80, opacity: 0.53, top: 20, left: 22 },
      { width: 50, opacity: 0.33, top: 30, left: 22 },
      { width: 84, opacity: 0.56, bottom: 28, left: 22 },
      { width: 50, opacity: 0.36, bottom: 18, left: 22 },
    ],
  },
  {
    id: "amber",
    gradient: "linear-gradient(155deg, #E8A24A 0%, #B15E1E 100%)",
    label: "ADS",
    labelPosition: "top-right",
    decorations: [
      { kind: "square", size: 90, top: 20, right: 20 },
      { kind: "circle", size: 52, top: 120, left: 26 },
      { kind: "circle", size: 38, bottom: 36, right: 28 },
    ],
    skeleton: [
      { width: 72, opacity: 0.5, top: 20, left: 22 },
      { width: 48, opacity: 0.34, top: 30, left: 22 },
      { width: 88, opacity: 0.56, bottom: 28, left: 22 },
      { width: 58, opacity: 0.35, bottom: 18, left: 22 },
    ],
  },
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
            We design websites, brands and growth systems that earn trust before the first
            conversation — and convert it into long-term revenue.
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
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
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
        className="absolute bottom-10 right-[7vw] top-[calc(6.75rem+env(safe-area-inset-top,0px))] z-0 hidden w-[34vw] lg:block"
        aria-hidden
      >
        <HeroBentoVisual inView={inView} />
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

function HeroBentoVisual({ inView }: { inView: boolean }) {
  const leftCards = [bentoCards[0], bentoCards[2]];
  const rightCards = [bentoCards[1], bentoCards[3]];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
      className="relative ml-auto w-[min(34vw,520px)]"
    >
      <div className="grid grid-cols-2 gap-[18px]">
        <div className="space-y-[18px]">
          {leftCards.map((card, index) => (
            <BentoCard
              key={card.id}
              card={card}
              floatIndex={index}
              revealIndex={index === 0 ? 0 : 2}
              inView={inView}
            />
          ))}
        </div>
        <div className="space-y-[18px] pt-[56px]">
          {rightCards.map((card, index) => (
            <BentoCard
              key={card.id}
              card={card}
              floatIndex={index + 2}
              revealIndex={index === 0 ? 1 : 3}
              inView={inView}
            />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-4 -top-4">
        <div className="rounded-[18px] bg-white px-4 py-3 shadow-[0_20px_40px_-18px_rgba(17,24,39,0.28)]">
          <p className="font-display text-[34px] leading-none text-charcoal">+164%</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-charcoal/55">avg. organic growth</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BentoCard({
  card,
  floatIndex,
  revealIndex,
  inView,
}: {
  card: BentoCardConfig;
  floatIndex: number;
  revealIndex: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const smoothRotateX = useSpring(rotateX, { stiffness: 140, damping: 20, mass: 0.8 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 140, damping: 20, mass: 0.8 });
  const smoothGlowX = useSpring(glowX, { stiffness: 180, damping: 26, mass: 0.9 });
  const smoothGlowY = useSpring(glowY, { stiffness: 180, damping: 26, mass: 0.9 });
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${smoothGlowX}% ${smoothGlowY}%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`;

  const labelPositionClass =
    card.labelPosition === "top-left"
      ? "left-4 top-4"
      : card.labelPosition === "top-right"
        ? "right-4 top-4"
        : card.labelPosition === "bottom-left"
          ? "left-4 bottom-4"
          : "right-4 bottom-4";

  return (
    <div className="h-[258px] overflow-hidden rounded-[20px]">
      <motion.div
        initial={{ y: "112%" }}
        animate={inView ? { y: "0%" } : { y: "112%" }}
        transition={{ duration: 0.95, ease: EASE, delay: 0.15 + revealIndex * 0.1 }}
      >
        <motion.div
          className="h-[258px]"
          animate={{ y: [0, -4, 0, -2, 0] }}
          transition={{
            y: {
              duration: 6.4 + floatIndex * 0.45,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.45 + floatIndex * 0.25,
            },
          }}
        >
          <motion.div
            className="relative h-full overflow-hidden rounded-[20px] p-4 shadow-[0_20px_40px_-18px_rgba(16,24,40,0.28)]"
            style={{
              background: card.gradient,
              transformStyle: "preserve-3d",
              perspective: 600,
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
            }}
            animate={{ y: hovered ? -6 : 0 }}
            transition={{ y: { type: "spring", stiffness: 220, damping: 24 } }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              const rx = ((y / rect.height) * 2 - 1) * -5;
              const ry = ((x / rect.width) * 2 - 1) * 5;
              rotateX.set(rx);
              rotateY.set(ry);
              glowX.set((x / rect.width) * 100);
              glowY.set((y / rect.height) * 100);
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
              rotateX.set(0);
              rotateY.set(0);
              glowX.set(50);
              glowY.set(50);
            }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: glowBackground }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            {card.decorations.map((shape, index) => (
              <div
                key={`${card.id}-shape-${index}`}
                className={
                  shape.kind === "circle"
                    ? "absolute rounded-full bg-white/16"
                    : "absolute rounded-2xl bg-white/16"
                }
                style={{
                  width: shape.size,
                  height: shape.size,
                  top: shape.top,
                  left: shape.left,
                  right: shape.right,
                  bottom: shape.bottom,
                }}
              />
            ))}

            {card.skeleton.map((line, index) => (
              <div
                key={`${card.id}-line-${index}`}
                className="absolute h-[2.5px] rounded-full bg-white"
                style={{
                  width: line.width,
                  opacity: line.opacity,
                  top: line.top,
                  left: line.left,
                  right: line.right,
                  bottom: line.bottom,
                }}
              />
            ))}

            <span
              className={`absolute ${labelPositionClass} inline-flex items-center rounded-full bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white`}
            >
              {card.label}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
