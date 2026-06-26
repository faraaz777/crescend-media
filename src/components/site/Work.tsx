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
  { img: restaurant, tag: "Hospitality", title: "Olea & Smoke", result: "+184% reservations", body: "Brand refresh and bookings-led site for a 3-location Mediterranean group.", span: "lg:col-span-7" },
  { img: ecommerce, tag: "E-Commerce", title: "Maison Noir", result: "3.4× store revenue", body: "Headless storefront and paid creative for a premium fashion label.", span: "lg:col-span-5" },
  { img: realestate, tag: "Real Estate", title: "Veridian Estates", result: "9.1% buyer lead CR", body: "Luxury developer site with immersive listings and concierge flow.", span: "lg:col-span-5" },
  { img: healthcare, tag: "Healthcare", title: "Northline Clinics", result: "+62% qualified intake", body: "Multi-specialty platform with integrated RCM and patient portal.", span: "lg:col-span-7" },
  { img: education, tag: "Education", title: "Lumen Academy", result: "2.7× course enrolment", body: "Funnel, brand and LMS for a fast-growing online learning company.", span: "lg:col-span-6" },
  { img: corporate, tag: "Finance", title: "Arden Capital", result: "Repositioned in 90 days", body: "Investor-grade brand and site for a boutique asset-management firm.", span: "lg:col-span-6" },
];

export function Work() {
  return (
    <section id="work" className="relative bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/40" />
                <span className="eyebrow">Selected work</span>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Work that pays for itself."
              italic="pays"
              className="font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <a href="#contact" className="group inline-flex items-center gap-2 border-b border-charcoal pb-1 text-sm font-semibold text-charcoal">
              View case studies <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {cases.map((c) => (
            <motion.a
              key={c.title}
              href="#contact"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className={`group block ${c.span}`}
            >
              <div className="relative overflow-hidden rounded-[10px] bg-mist">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1200}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/50">{c.tag}</div>
                  <h3 className="mt-2 font-display text-xl font-medium text-charcoal sm:text-2xl">{c.title}</h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-charcoal/65">{c.body}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-base italic text-accent-brand">{c.result}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-charcoal/50">Result</div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
