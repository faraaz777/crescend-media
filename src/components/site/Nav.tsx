"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/85 backdrop-blur border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-10">
        <a href="#top" className="min-w-0 shrink"><Logo /></a>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-charcoal/70 transition hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-md bg-charcoal px-3 py-2 text-xs font-semibold text-ivory transition hover:bg-ink sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[13px]"
        >
          <span className="sm:hidden">Start</span>
          <span className="hidden sm:inline">Start a project</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  );
}
