"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: any;
}) {
  const MotionAs = motion(As as any);
  return (
    <MotionAs
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionAs>
  );
}

export function AnimatedHeading({
  text,
  className,
  as: Tag = "h2",
  highlight,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  highlight?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");
  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={className}>
      <span className="inline-block overflow-hidden">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline">
            <motion.span
              initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
              animate={
                inView
                  ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                  : { y: "110%", opacity: 0, filter: "blur(8px)" }
              }
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
              className={`inline-block ${
                highlight && w.toLowerCase().includes(highlight.toLowerCase())
                  ? "text-gradient"
                  : ""
              }`}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    </Comp>
  );
}

export { motion };
