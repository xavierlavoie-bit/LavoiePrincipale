"use client";

import { motion, useReducedMotion } from "framer-motion";
import Counter from "./motion/Counter";

const points: [number, number][] = [
  [0, 92],
  [10, 85],
  [20, 82],
  [30, 76],
  [40, 70],
  [50, 60],
  [60, 58],
  [70, 48],
  [80, 42],
  [90, 30],
  [100, 22],
];

const xLabels = ["2018", "2020", "2022", "2024", "2026"];

const linePath = (() => {
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    const [px, py] = points[i - 1];
    const cx1 = px + (x - px) / 2;
    const cy1 = py;
    const cx2 = px + (x - px) / 2;
    const cy2 = y;
    d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`;
  }
  return d;
})();

const areaPath = `${linePath} L 100 100 L 0 100 Z`;

export default function GrowthChart() {
  const reduce = useReducedMotion();
  const lineDelay = 1.4;
  const lineDuration = 2.4;

  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative rounded-[6px] bg-gradient-to-br from-cream/40 via-paper to-bone/40 border border-stone-200 overflow-hidden shadow-[0_30px_60px_-30px_rgba(10,31,61,0.25)]">
        {/* Corner trim */}
        <div className="absolute top-0 left-0 h-6 w-6 border-l border-t border-gold/60" />
        <div className="absolute top-0 right-0 h-6 w-6 border-r border-t border-gold/60" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-l border-b border-gold/60" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-r border-b border-gold/60" />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-3">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Profil patrimonial — exemple
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-5xl lg:text-6xl text-midnight leading-none tabular-nums">
                +<Counter value={147} suffix="%" duration={2400} />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-stone-500">
                7 ans
              </span>
            </div>
            <p className="mt-2 text-xs text-stone-600 leading-relaxed max-w-[260px]">
              Croissance suivie d&apos;un portefeuille équilibré, ajusté
              annuellement.
            </p>
          </div>

          <div className="hidden sm:flex flex-col items-end gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
              Indice de référence
            </span>
            <div className="flex items-center gap-2 text-sm text-charcoal">
              <span className="inline-flex h-2 w-2 rounded-full bg-stone-400" />
              <span className="font-display tabular-nums">+98%</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-deep mt-1">
              <span className="inline-flex h-2 w-2 rounded-full bg-gold" />
              <span className="font-display tabular-nums">+147%</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative px-6 pb-6">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-[180px] lg:h-[220px]"
            aria-hidden
          >
            <defs>
              <linearGradient id="growth-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9a961" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="growth-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7a5f25" />
                <stop offset="60%" stopColor="#c9a961" />
                <stop offset="100%" stopColor="#e3c98a" />
              </linearGradient>
            </defs>

            {/* horizontal grid */}
            {[20, 40, 60, 80].map((y) => (
              <line
                key={y}
                x1="0"
                x2="100"
                y1={y}
                y2={y}
                stroke="#d8d1bc"
                strokeWidth="0.15"
                strokeDasharray="0.6 0.8"
              />
            ))}

            {/* benchmark dashed line (lower curve) */}
            <motion.path
              d="M 0 90 C 25 86 50 78 75 65 L 100 50"
              fill="none"
              stroke="#8a8472"
              strokeWidth="0.35"
              strokeDasharray="1 1"
              strokeLinecap="round"
              initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
              whileInView={
                reduce
                  ? undefined
                  : { pathLength: 1, opacity: 1 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.8,
                delay: lineDelay + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* area fill */}
            <motion.path
              d={areaPath}
              fill="url(#growth-area)"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.4,
                delay: lineDelay + lineDuration * 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* main growth line */}
            <motion.path
              d={linePath}
              fill="none"
              stroke="url(#growth-line)"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? undefined : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: lineDuration,
                delay: lineDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* inflection dots */}
            {points.filter((_, i) => i % 2 === 0).map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="0.7"
                fill="#fbf9f3"
                stroke="#c9a961"
                strokeWidth="0.3"
                initial={reduce ? undefined : { opacity: 0, scale: 0 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay:
                    lineDelay +
                    (lineDuration * (x / 100)) +
                    0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}

            {/* end marker */}
            <motion.g
              initial={reduce ? undefined : { opacity: 0, scale: 0 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: lineDelay + lineDuration + 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.circle
                cx="100"
                cy="22"
                r="2"
                fill="#c9a961"
                opacity="0.25"
                animate={
                  reduce
                    ? undefined
                    : { r: [1.8, 3, 1.8], opacity: [0.4, 0.05, 0.4] }
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <circle cx="100" cy="22" r="1" fill="#c9a961" />
              <circle cx="100" cy="22" r="0.5" fill="#fbf9f3" />
            </motion.g>
          </svg>

          {/* X-axis labels */}
          <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.18em] text-stone-400 tabular-nums">
            {xLabels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="border-t border-stone-200/70 px-6 py-3 flex items-center justify-between bg-cream/30">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 text-gold-deep"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
            </svg>
            <span>Rigueur · Discipline · Long terme</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400">
            Cas-type
          </span>
        </div>
      </div>
    </div>
  );
}
