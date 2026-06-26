"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
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

/**
 * Mask reveal heading — line by line, no blur, no bounce.
 */
export function AnimatedHeading({
  text,
  className,
  as: Tag = "h2",
  italic,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  italic?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");
  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={className}>
      {words.map((w, i) => {
        const isItalic = italic && w.toLowerCase().includes(italic.toLowerCase());
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "115%" }}
              animate={inView ? { y: "0%" } : { y: "115%" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}
              className={`inline-block ${isItalic ? "italic text-accent-brand font-display" : ""}`}
            >
              {w}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </Comp>
  );
}

export { motion };
