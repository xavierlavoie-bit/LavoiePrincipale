"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitWords({
  children,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
}: Props) {
  const reduce = useReducedMotion();
  const words = children.split(" ");

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={`${className} inline`}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{
            paddingBottom: "0.18em",
            marginBottom: "-0.18em",
            marginRight: i < words.length - 1 ? "0.25em" : 0,
          }}
        >
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.05,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SplitWordsInView({
  children,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -10% 0px",
  });
  const words = children.split(" ");

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={`${className} inline`}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{
            paddingBottom: "0.18em",
            marginBottom: "-0.18em",
            marginRight: i < words.length - 1 ? "0.25em" : 0,
          }}
        >
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 1.05,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
