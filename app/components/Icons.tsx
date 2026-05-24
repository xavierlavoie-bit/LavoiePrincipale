"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type IconProps = {
  className?: string;
  animated?: boolean;
};

const baseStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function AnimatedSvg({
  children,
  size = 56,
  animated = true,
  className = "",
}: {
  children: ReactNode;
  size?: number;
  animated?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      initial={animated && !reduce ? { opacity: 0 } : false}
      whileInView={animated && !reduce ? { opacity: 1 } : undefined}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {animated && !reduce ? (
        <motion.g
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.g>
      ) : (
        children
      )}
    </motion.svg>
  );
}

/* ---------- Approche pillars ---------- */

export function IconDiscretion({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* a shield + keyhole, expressing confidentiality */}
      <motion.path
        {...baseStroke}
        d="M32 8 L52 16 L52 32 Q52 48 32 56 Q12 48 12 32 L12 16 Z"
      />
      <motion.circle {...baseStroke} cx="32" cy="28" r="4" />
      <motion.path {...baseStroke} d="M32 32 L32 40" />
    </AnimatedSvg>
  );
}

export function IconHorizon({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* a long horizon with rising sun — vision long terme */}
      <motion.path {...baseStroke} d="M6 44 L58 44" />
      <motion.circle {...baseStroke} cx="32" cy="44" r="12" />
      <motion.path {...baseStroke} d="M32 22 L32 16" />
      <motion.path {...baseStroke} d="M14 30 L18 34" />
      <motion.path {...baseStroke} d="M50 30 L46 34" />
      <motion.path {...baseStroke} d="M6 50 L18 50" />
      <motion.path {...baseStroke} d="M46 50 L58 50" />
      <motion.path {...baseStroke} d="M22 56 L42 56" />
    </AnimatedSvg>
  );
}

export function IconCompass({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* compass rose — stratégie sur mesure */}
      <motion.circle {...baseStroke} cx="32" cy="32" r="22" />
      <motion.circle {...baseStroke} cx="32" cy="32" r="14" />
      <motion.path {...baseStroke} d="M32 18 L36 32 L32 46 L28 32 Z" />
      <motion.path {...baseStroke} d="M32 8 L32 12" />
      <motion.path {...baseStroke} d="M32 52 L32 56" />
      <motion.path {...baseStroke} d="M8 32 L12 32" />
      <motion.path {...baseStroke} d="M52 32 L56 32" />
    </AnimatedSvg>
  );
}

export function IconHumain({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* two figures shaking — accompagnement humain */}
      <motion.circle {...baseStroke} cx="20" cy="20" r="6" />
      <motion.circle {...baseStroke} cx="44" cy="20" r="6" />
      <motion.path {...baseStroke} d="M10 50 Q10 36 20 32 L32 38 L44 32 Q54 36 54 50" />
      <motion.path {...baseStroke} d="M22 38 L42 38" />
    </AnimatedSvg>
  );
}

/* ---------- Services ---------- */

export function IconRetraite({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* hourglass + sun = transition */}
      <motion.path {...baseStroke} d="M14 8 L50 8" />
      <motion.path {...baseStroke} d="M14 56 L50 56" />
      <motion.path {...baseStroke} d="M14 8 Q14 26 32 32 Q50 38 50 56" />
      <motion.path {...baseStroke} d="M50 8 Q50 26 32 32 Q14 38 14 56" />
      <motion.circle {...baseStroke} cx="32" cy="32" r="2" fill="currentColor" />
    </AnimatedSvg>
  );
}

export function IconInvestissements({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* ascending chart + arrow */}
      <motion.path {...baseStroke} d="M8 50 L56 50" />
      <motion.path {...baseStroke} d="M12 42 L12 50" />
      <motion.path {...baseStroke} d="M24 32 L24 50" />
      <motion.path {...baseStroke} d="M36 22 L36 50" />
      <motion.path {...baseStroke} d="M48 12 L48 50" />
      <motion.path {...baseStroke} d="M8 38 L20 30 L32 32 L44 18 L56 8" />
      <motion.path {...baseStroke} d="M50 8 L56 8 L56 14" />
    </AnimatedSvg>
  );
}

export function IconFiscal({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* balance scale — equilibrium */}
      <motion.path {...baseStroke} d="M32 12 L32 52" />
      <motion.path {...baseStroke} d="M16 52 L48 52" />
      <motion.path {...baseStroke} d="M10 22 L54 22" />
      <motion.path {...baseStroke} d="M10 22 L4 38 Q4 42 10 42 Q16 42 16 38 Z" />
      <motion.path {...baseStroke} d="M54 22 L60 38 Q60 42 54 42 Q48 42 48 38 Z" />
      <motion.circle {...baseStroke} cx="32" cy="12" r="3" />
    </AnimatedSvg>
  );
}

export function IconProtection({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* shield with checkmark */}
      <motion.path {...baseStroke} d="M32 6 L54 14 V32 Q54 48 32 58 Q10 48 10 32 V14 Z" />
      <motion.path {...baseStroke} d="M22 30 L30 38 L44 22" />
    </AnimatedSvg>
  );
}

export function IconSuccessoral({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* family tree — three connected nodes */}
      <motion.circle {...baseStroke} cx="32" cy="14" r="5" />
      <motion.circle {...baseStroke} cx="16" cy="48" r="5" />
      <motion.circle {...baseStroke} cx="32" cy="48" r="5" />
      <motion.circle {...baseStroke} cx="48" cy="48" r="5" />
      <motion.path {...baseStroke} d="M32 20 L32 28" />
      <motion.path {...baseStroke} d="M16 28 L48 28" />
      <motion.path {...baseStroke} d="M16 28 L16 42" />
      <motion.path {...baseStroke} d="M32 28 L32 42" />
      <motion.path {...baseStroke} d="M48 28 L48 42" />
    </AnimatedSvg>
  );
}

export function IconEntrepreneurial({ className, animated = true }: IconProps) {
  return (
    <AnimatedSvg className={className} animated={animated}>
      {/* mountain peak with summit flag */}
      <motion.path {...baseStroke} d="M6 54 L24 22 L32 36 L40 26 L58 54 Z" />
      <motion.path {...baseStroke} d="M24 22 L24 8" />
      <motion.path {...baseStroke} d="M24 8 L34 12 L24 16" />
    </AnimatedSvg>
  );
}
