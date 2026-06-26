"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { AnimatedHeading, Reveal } from "./Motion";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Get in touch
              </div>
            </Reveal>
            <AnimatedHeading
              text="Let's talk about the next chapter."
              highlight="next"
              className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Share a few details and the founder will reach out personally. We typically reply
                within one business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                { Icon: Mail, label: "hello@crescendmedia.com", href: "mailto:hello@crescendmedia.com" },
                { Icon: Phone, label: "+91 90000 00000", href: "tel:+919000000000" },
                { Icon: MessageCircle, label: "WhatsApp — 24/7 for clients", href: "https://wa.me/0000000000" },
                { Icon: MapPin, label: "Mumbai · Dubai · Remote", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-teal transition-colors group-hover:text-blue">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 sm:p-10 shadow-card"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
              <div className="relative space-y-5">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Company name" />
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    What are you exploring?
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="A new site, a rebrand, growth retainer..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-elev"
                >
                  <span className="absolute inset-0 brand-ring" />
                  <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="relative">
                    {sent ? "Thanks — we'll be in touch" : "Send enquiry"}
                  </span>
                  {!sent && <span className="relative transition-transform group-hover:translate-x-0.5">→</span>}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  Your details stay private. No spam, ever.
                </p>
              </div>
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
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
      />
    </div>
  );
}
