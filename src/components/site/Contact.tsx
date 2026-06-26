"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { AnimatedHeading, Reveal } from "./Motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative bg-mist py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-charcoal/40" />
                <span className="eyebrow">Get in touch</span>
              </div>
            </Reveal>
            <AnimatedHeading
              text="Let's talk about the next chapter."
              italic="next"
              className="text-balance font-display text-4xl font-medium leading-[1.05] text-charcoal sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                Share a few details and a founder will reach out personally.
                We typically reply within one business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-px border-t border-hairline">
              {[
                { Icon: Mail, label: "hello@crescendmedia.com", href: "mailto:hello@crescendmedia.com" },
                { Icon: Phone, label: "+91 90000 00000", href: "tel:+919000000000" },
                { Icon: MessageCircle, label: "WhatsApp — 24/7 for clients", href: "https://wa.me/0000000000" },
                { Icon: MapPin, label: "Mumbai · Dubai · Remote", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} className="group flex items-center gap-4 border-b border-hairline py-4 transition hover:text-accent-brand">
                  <Icon className="h-4 w-4 text-charcoal/60 transition group-hover:text-accent-brand" strokeWidth={1.6} />
                  <span className="text-[14px] font-medium text-charcoal">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-[10px] border border-hairline bg-ivory p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Company name" />
                <Field label="Budget" name="budget" placeholder="$ range" />
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                  What are you exploring?
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="A new site, a rebrand, a growth retainer…"
                  className="w-full resize-none border-b border-charcoal/20 bg-transparent px-0 py-2 text-[15px] outline-none transition focus:border-charcoal"
                />
              </div>
              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-charcoal px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-ink"
              >
                {sent ? "Thanks — we'll be in touch" : "Send enquiry"}
                {!sent && <span className="transition-transform group-hover:translate-x-0.5">→</span>}
              </button>
              <p className="mt-4 text-[11px] text-charcoal/50">
                Your details stay private. No spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-charcoal/20 bg-transparent px-0 py-2 text-[15px] outline-none transition focus:border-charcoal"
      />
    </div>
  );
}
