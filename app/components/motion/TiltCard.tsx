"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export default function TiltCard({
  children,
  className = "",
  intensity = 6,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const srx = useSpring(rotX, { stiffness: 180, damping: 18 });
  const sry = useSpring(rotY, { stiffness: 180, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    rotY.set((x - 0.5) * intensity);
    rotX.set((0.5 - y) * intensity);
    px.set(x * 100);
    py.set(y * 100);
  };
  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  const glow = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(201,169,97,0.18), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 1000,
      }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{ background: glow }}
      />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}
