"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageCurtain() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight"
          exit={{
            y: "-100%",
            transition: { duration: 1.1, ease: [0.85, 0, 0.15, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6 text-paper"
          >
            <svg
              viewBox="0 0 64 64"
              aria-hidden
              className="h-14 w-14"
            >
              <defs>
                <linearGradient id="curtain-gold" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f0d99a" />
                  <stop offset="55%" stopColor="#c9a961" />
                  <stop offset="100%" stopColor="#9a7d3d" />
                </linearGradient>
              </defs>
              <motion.path
                d="M16 8 Q 14 8 14 12 L 14 44 Q 14 50 20 50 L 38 50"
                fill="none"
                stroke="url(#curtain-gold)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M30 56 L 30 14 Q 30 8 36 8 L 46 8 Q 56 8 56 20 Q 56 32 46 32 L 36 32"
                fill="none"
                stroke="url(#curtain-gold)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.4em] text-gold-soft"
            >
              Lavoie · Principale
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
