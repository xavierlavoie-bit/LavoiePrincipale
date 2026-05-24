"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  withText?: boolean;
  monoColor?: string;
  animateGlint?: boolean;
};

export default function LogoMark({
  className = "h-9 w-auto",
  withText = true,
  monoColor,
  animateGlint = true,
}: Props) {
  const blue = monoColor ?? "#1f3a8a";
  const reduce = useReducedMotion();
  const uid = useId().replace(/[:]/g, "");
  const glintId = `lp-glint-${uid}`;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex">
        <svg viewBox="0 0 64 64" aria-hidden className="h-full w-auto">
          <defs>
            <linearGradient id="lp-gold" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#f0d99a" />
              <stop offset="55%" stopColor="#c9a961" />
              <stop offset="100%" stopColor="#9a7d3d" />
            </linearGradient>
            <linearGradient id={glintId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="45%" stopColor="#fff" stopOpacity="0" />
              <stop offset="50%" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id={`${glintId}-mask`}>
              <path
                d="M16 8 Q 14 8 14 12 L 14 44 Q 14 50 20 50 L 38 50"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 56 L 30 14 Q 30 8 36 8 L 46 8 Q 56 8 56 20 Q 56 32 46 32 L 36 32"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
          </defs>

          <path
            d="M16 8 Q 14 8 14 12 L 14 44 Q 14 50 20 50 L 38 50"
            fill="none"
            stroke={blue}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 8 Q 14 8 14 12 L 14 44 Q 14 50 20 50 L 38 50"
            fill="none"
            stroke="url(#lp-gold)"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          <path
            d="M30 56 L 30 14 Q 30 8 36 8 L 46 8 Q 56 8 56 20 Q 56 32 46 32 L 36 32"
            fill="none"
            stroke={blue}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 56 L 30 14 Q 30 8 36 8 L 46 8 Q 56 8 56 20 Q 56 32 46 32 L 36 32"
            fill="none"
            stroke="url(#lp-gold)"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
          <path
            d="M9 50 L 18 50"
            stroke="url(#lp-gold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {animateGlint && !reduce && (
            <g mask={`url(#${glintId}-mask)`}>
              <motion.rect
                x="-64"
                y="0"
                width="64"
                height="64"
                fill={`url(#${glintId})`}
                animate={{ x: [-64, 64] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 5.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </g>
          )}
        </svg>
      </span>
      {withText && (
        <span className="font-display text-[1.35rem] leading-none tracking-tight">
          <span className="font-medium">Lavoie</span>{" "}
          <span className="italic font-light">Principale</span>
        </span>
      )}
    </span>
  );
}
