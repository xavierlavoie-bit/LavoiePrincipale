"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const seed = [
  { sym: "S&P 500", v: 5847.42, d: 0.42 },
  { sym: "TSX", v: 25104.18, d: 0.31 },
  { sym: "NASDAQ", v: 18472.06, d: -0.18 },
  { sym: "OR (oz)", v: 2768.51, d: 0.94 },
  { sym: "PÉTROLE", v: 78.43, d: -0.27 },
  { sym: "CAD/USD", v: 0.7234, d: 0.12 },
  { sym: "DOW", v: 43240.55, d: 0.21 },
  { sym: "BITCOIN", v: 73128.0, d: 1.84 },
];

type Q = (typeof seed)[number];

function fmt(v: number) {
  if (v >= 1000)
    return v.toLocaleString("fr-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return v.toLocaleString("fr-CA", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

export default function MarketsTicker() {
  const [items, setItems] = useState<Q[]>(seed);
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const upd = () => {
      setNow(
        new Date().toLocaleTimeString("fr-CA", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setItems((prev) =>
        prev.map((q) => {
          const jitter = (Math.random() - 0.5) * 0.0015 * q.v;
          const delta = (Math.random() - 0.5) * 0.1;
          return { ...q, v: q.v + jitter, d: +(q.d + delta).toFixed(2) };
        })
      );
    };
    upd();
    const id = setInterval(upd, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-label="Marchés"
      className="fixed top-0 inset-x-0 z-[60] bg-ink-blue text-paper border-b border-paper/10"
    >
      <div className="relative flex items-stretch h-9">
        {/* Status block */}
        <div className="hidden sm:flex items-center gap-2 shrink-0 px-4 lg:px-6 border-r border-paper/10 bg-midnight">
          <span className="relative inline-flex h-1.5 w-1.5">
            <motion.span
              className="absolute inset-0 rounded-full bg-gold"
              animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.2, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] text-paper/55">
            Marchés en direct
          </span>
          <span className="text-paper/20">·</span>
          <span className="font-display text-[12px] text-gold-soft tabular-nums">
            {now}
          </span>
        </div>

        {/* Ticker */}
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="marquee inline-flex items-center gap-8 whitespace-nowrap h-full pl-8">
            {[...items, ...items, ...items].map((q, i) => {
              const up = q.d >= 0;
              return (
                <span
                  key={`${q.sym}-${i}`}
                  className="inline-flex items-center gap-2 text-[12px]"
                >
                  <span className="text-paper/55 uppercase tracking-[0.16em] text-[10px]">
                    {q.sym}
                  </span>
                  <span className="font-display text-[13px] text-paper tabular-nums">
                    {fmt(q.v)}
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-[10px] font-medium tabular-nums ${
                      up ? "text-gold-soft" : "text-rose-300/80"
                    }`}
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className={`h-2 w-2 ${up ? "" : "rotate-180"}`}
                      fill="currentColor"
                    >
                      <path d="M6 2l4 6H2z" />
                    </svg>
                    {up ? "+" : ""}
                    {q.d.toFixed(2)}%
                  </span>
                  <span className="text-paper/15 mx-2">◆</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Closing tag */}
        <div className="hidden md:flex items-center gap-2 shrink-0 px-4 border-l border-paper/10 bg-midnight">
          <span className="text-[9px] uppercase tracking-[0.28em] text-paper/40">
            Source informationnelle
          </span>
        </div>
      </div>
    </div>
  );
}
