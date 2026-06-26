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
    <section className="relative bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-charcoal/40" />
              <span className="eyebrow">Client voices</span>
            </div>
          </Reveal>
          <AnimatedHeading
            text="Trusted by founders who measure twice."
            italic="twice."
            className="font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid gap-px border border-hairline bg-hairline md:grid-cols-2"
        >
          {items.map((it) => (
            <motion.figure
              key={it.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="bg-ivory p-8 sm:p-12"
            >
              <div className="font-display text-3xl italic text-accent-brand">"</div>
              <blockquote className="mt-2 font-display text-xl font-medium leading-[1.4] text-charcoal sm:text-2xl">
                {it.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-hairline pt-5">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-mist text-xs font-semibold text-charcoal">
                  {it.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal">{it.name}</div>
                  <div className="text-xs text-charcoal/55">{it.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
