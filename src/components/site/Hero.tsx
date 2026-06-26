"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/cm-logo.png";
import { AnimatedHeading, EASE } from "./Motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
             style={{ background: "radial-gradient(closest-side, rgba(30,123,255,0.5), transparent)" }} />
        <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
             style={{ background: "radial-gradient(closest-side, rgba(106,0,255,0.6), transparent)" }} />
        <div className="absolute top-40 left-0 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
             style={{ background: "radial-gradient(closest-side, rgba(0,212,179,0.5), transparent)" }} />
      </div>

      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Now booking Q1 2026 — limited engagements
        </motion.div>

        <AnimatedHeading
          as="h1"
          text="Brands that scale. Systems that collect."
          highlight="scale"
          className="mx-auto max-w-5xl text-center text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base text-muted-foreground sm:text-lg"
        >
          We design, build, and grow digital businesses for ambitious founders — engineered for
          conversion, measured in revenue, refined for compounding growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-elev"
          >
            <span className="absolute inset-0 brand-ring" />
            <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">Book a strategy call</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold transition hover:bg-white/[0.07]"
          >
            See our work
          </a>
        </motion.div>

        <motion.div style={{ y: logoY }} className="relative mt-20 sm:mt-28">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
               style={{ background: "conic-gradient(from 90deg, rgba(0,212,179,0.4), rgba(30,123,255,0.35), rgba(106,0,255,0.4), rgba(0,212,179,0.4))" }} />
          <motion.img
            src={logo}
            alt=""
            aria-hidden
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
            className="mx-auto h-44 w-auto sm:h-56 drop-shadow-[0_30px_60px_rgba(30,123,255,0.45)]"
            width={224}
            height={224}
          />
        </motion.div>

        {/* trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            ["120+", "Brands shipped"],
            ["4.9/5", "Client rating"],
            ["38%", "Avg. CR uplift"],
            ["7 yrs", "Building online"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">{n}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
