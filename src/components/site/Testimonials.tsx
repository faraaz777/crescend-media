"use client";
import { motion } from "framer-motion";
import { AnimatedHeading, EASE, Reveal } from "./Motion";

const items = [
  {
    quote:
      "Crescend rebuilt our entire web presence in eight weeks. The numbers moved immediately — and the brand finally matches the ambition of the company.",
    name: "Priya N.",
    role: "Founder, Lumen Academy",
  },
  {
    quote:
      "A genuinely senior team. Strategy was sharp, design was on another level, and the engineering held up under our biggest launch yet.",
    name: "Marcus D.",
    role: "CMO, Maison Noir",
  },
  {
    quote:
      "They treat the work like owners, not vendors. Two years in and they're the most valuable line item on our P&L.",
    name: "Dr. R. Kapoor",
    role: "Director, Northline Clinics",
  },
  {
    quote:
      "Our enquiry quality changed overnight. The site doesn't just look premium — it filters and converts the right buyer.",
    name: "Ananya S.",
    role: "Partner, Veridian Estates",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" /> Client voices
            </div>
          </Reveal>
          <AnimatedHeading
            text="Trusted by founders who measure twice."
            highlight="measure"
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {items.map((it) => (
            <motion.figure
              key={it.name}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 shadow-card sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-[0.08] blur-2xl" style={{ background: "var(--gradient-brand)" }} />
              <div className="text-gradient text-5xl font-serif leading-none">"</div>
              <blockquote className="mt-2 text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {it.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold">
                  {it.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
