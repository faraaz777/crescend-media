"use client";
import { motion } from "framer-motion";
import {
  Code2, ShoppingBag, Sparkles, BarChart3, Search, Megaphone, Workflow, Users, Rocket,
} from "lucide-react";
import { AnimatedHeading, Reveal, EASE } from "./Motion";

const services = [
  { icon: Code2, title: "Website Development", body: "Conversion-led marketing sites and web apps built on a modern stack — fast, accessible, infinitely refined." },
  { icon: ShoppingBag, title: "E-Commerce", body: "Shopify, Woo, headless — engineered store experiences that lift AOV, repeat rate, and margin." },
  { icon: Sparkles, title: "Branding & Identity", body: "Distinct visual systems that position you above the category and stay coherent across every surface." },
  { icon: Megaphone, title: "Performance Marketing", body: "Meta, Google, LinkedIn — creative-led paid acquisition tied to pipeline, not vanity metrics." },
  { icon: Search, title: "SEO & Content", body: "Technical foundations, programmatic pages, and editorial that ranks and converts in equal measure." },
  { icon: BarChart3, title: "Growth Analytics", body: "Server-side tracking, attribution, and dashboards built around the metrics that actually move revenue." },
  { icon: Workflow, title: "Automation & CRM", body: "Lifecycle systems, lead routing, and operations workflows that compound while you sleep." },
  { icon: Users, title: "Medical RCM", body: "Specialist revenue cycle workflows for clinics and practices — claims, denials, and patient retention." },
  { icon: Rocket, title: "Growth Retainers", body: "An embedded squad — strategy, design, dev, media — moving in weekly sprints against your KPIs." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" /> What we do
            </div>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="One partner. Every lever that moves the business."
            highlight="Every"
            className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              We replace the agency stack with one senior team — connected across brand,
              product, and acquisition so nothing slows you down.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 shadow-card"
            >
              <div className="absolute -inset-px -z-10 rounded-2xl opacity-0 blur transition-opacity duration-500 group-hover:opacity-100 brand-ring" />
              <div className="absolute inset-0 -z-10 rounded-2xl bg-card" />
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal transition-colors duration-500 group-hover:text-blue">
                <s.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Learn more <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
