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
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#top" className="shrink-0"><Logo /></a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 brand-ring" />
            <span className="absolute inset-0 brand-ring opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70" />
            <span className="relative">Start a project</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
