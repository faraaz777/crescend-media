"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import orbitSprite from "@/assets/orbit-icons-sprite.png";
import { EASE } from "./Motion";

const GRID = 6;

/** 6×6 sprite grid — { col, row } are 0-indexed from top-left */
const ORBIT_ITEMS: { label: string; col: number; row: number }[] = [
  { label: "Brand", col: 0, row: 2 }, // diamond
  { label: "Web", col: 1, row: 3 }, // browser
  { label: "Commerce", col: 2, row: 4 }, // cart
  { label: "Media", col: 2, row: 1 }, // megaphone
  { label: "SEO", col: 3, row: 0 }, // magnifying glass
  { label: "Growth", col: 0, row: 3 }, // line graph
  { label: "Global", col: 1, row: 4 }, // globe
  { label: "Creative", col: 4, row: 1 }, // rocket
];

/** Semicircle: top 90° → left 180° → bottom 270°. Center pulled inward toward the page middle. */
const ARC_START = 90;
const ARC_SWEEP = 180;
const ORBIT_DURATION_S = 48;

const VB_W = 1000;
const VB_H = 2000;
const CENTER_INSET = 200;
const CX = VB_W - CENTER_INSET;
const CY = VB_H / 2;
const RADIUS_RATIO = 0.68;
const R = VB_W * RADIUS_RATIO;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const ICON_GAP_DEG = 14;

function semicircleAngle(offset: number, spin: number) {
  return ARC_START + ((offset + spin) % ARC_SWEEP);
}

function scaleAt(deg: number) {
  const d = ((deg % 360) + 360) % 360;
  const distFromCenter = Math.min(Math.abs(d - 180), 360 - Math.abs(d - 180)) / 90;
  return 1 - distFromCenter * 0.48;
}

function opacityAt(deg: number) {
  const s = scaleAt(deg);
  return 0.45 + s * 0.55;
}

function spriteStyle(col: number, row: number) {
  const x = (col / (GRID - 1)) * 100;
  const y = (row / (GRID - 1)) * 100;
  return {
    backgroundImage: `url(${orbitSprite})`,
    backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
    backgroundPosition: `${x}% ${y}%`,
  };
}

function OrbitIcon({
  index,
  spin,
  item,
}: {
  index: number;
  spin: ReturnType<typeof useMotionValue<number>>;
  item: (typeof ORBIT_ITEMS)[number];
}) {
  const offset = index * ICON_GAP_DEG;

  const left = useTransform(spin, (s) => {
    const { x } = polar(CX, CY, R, semicircleAngle(offset, s));
    return `${(x / VB_W) * 100}%`;
  });
  const top = useTransform(spin, (s) => {
    const { y } = polar(CX, CY, R, semicircleAngle(offset, s));
    return `${(y / VB_H) * 100}%`;
  });
  const scale = useTransform(spin, (s) => scaleAt(semicircleAngle(offset, s)));
  const opacity = useTransform(spin, (s) => opacityAt(semicircleAngle(offset, s)));

  return (
    <motion.div
      className="absolute z-10 will-change-transform"
      style={{ left, top, translateX: "-50%", translateY: "-50%", scale, opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.25 + index * 0.06 }}
    >
      <div
        className="h-12 w-12 overflow-hidden rounded-2xl shadow-[0_4px_20px_-4px_rgba(20,22,27,0.16),0_1px_4px_rgba(20,22,27,0.06)] sm:h-[3.25rem] sm:w-[3.25rem] sm:rounded-[18px]"
        style={spriteStyle(item.col, item.row)}
        role="img"
        aria-label={item.label}
      />
    </motion.div>
  );
}

export function OrbitVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const spin = useMotionValue(0);

  const arcTop = polar(CX, CY, R, ARC_START);
  const arcBottom = polar(CX, CY, R, ARC_START + ARC_SWEEP);
  const arcPath = `M ${arcTop.x} ${arcTop.y} A ${R} ${R} 0 0 0 ${arcBottom.x} ${arcBottom.y}`;

  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(spin, 360, {
      duration: ORBIT_DURATION_S,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [spin, reducedMotion]);

  return (
    <div
      className={`relative aspect-[1/2] w-[29vw] shrink-0 select-none ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
      >
        <defs>
          <linearGradient id="semi-arc" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--charcoal)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--accent-brand)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--charcoal)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.path
          d={arcPath}
          stroke="url(#semi-arc)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        />
      </svg>

      <div className="absolute inset-0">
        {ORBIT_ITEMS.map((item, i) => (
          <OrbitIcon key={item.label} index={i} spin={spin} item={item} />
        ))}
      </div>
    </div>
  );
}
