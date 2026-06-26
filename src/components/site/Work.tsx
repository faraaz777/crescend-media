"use client";
import { motion } from "framer-motion";
import { AnimatedHeading, Reveal, EASE } from "./Motion";
import restaurant from "@/assets/case-restaurant.jpg";
import ecommerce from "@/assets/case-ecommerce.jpg";
import healthcare from "@/assets/case-healthcare.jpg";
import realestate from "@/assets/case-realestate.jpg";
import education from "@/assets/case-education.jpg";
import corporate from "@/assets/case-corporate.jpg";

const cases = [
  { img: restaurant, tag: "Hospitality", title: "Olea & Smoke", result: "+184% online reservations", body: "Brand refresh and bookings-led site for a 3-location modern Mediterranean group." },
  { img: ecommerce, tag: "E-Commerce", title: "Maison Noir", result: "3.4× store revenue in 9 mo.", body: "Headless storefront and paid creative engine for a premium fashion label." },
  { img: healthcare, tag: "Healthcare", title: "Northline Clinics", result: "+62% qualified intake", body: "Multi-specialty clinic platform with integrated RCM and patient portal." },
  { img: realestate, tag: "Real Estate", title: "Veridian Estates", result: "9.1% buyer lead CR", body: "Luxury developer site with immersive listings and concierge enquiry flow." },
  { img: education, tag: "Education", title: "Lumen Academy", result: "2.7× course enrolment", body: "Funnel, brand, and LMS for a fast-growing online learning company." },
  { img: corporate, tag: "Finance", title: "Arden Capital", result: "Re-positioned in 90 days", body: "Investor-grade brand and site for a boutique asset-management firm." },
];

export function Work() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Selected work
              </div>
            </Reveal>
            <AnimatedHeading
              text="Work that pays for itself."
              highlight="pays"
              className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]">
              View case studies <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <motion.a
              key={c.title}
              href="#contact"
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
              }}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
                  {c.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="text-gradient text-sm font-semibold">{c.result}</div>
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
