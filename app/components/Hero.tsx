"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import SplitWords from "./motion/SplitWords";
import Counter from "./motion/Counter";
import MagneticButton from "./motion/MagneticButton";

const stats = [
  { v: 150, suf: "+", l: "Familles" },
  { v: 97, suf: "%", l: "Rétention" },
  { v: 15, suf: "+", l: "Années" },
  { v: 24, suf: "h", l: "Réponse" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 100, damping: 18 });
  const smy = useSpring(my, { stiffness: 100, damping: 18 });
  const tx = useTransform(smx, [-1, 1], [-10, 10]);
  const ty = useTransform(smy, [-1, 1], [-10, 10]);
  const rx = useTransform(smy, [-1, 1], [3, -3]);
  const ry = useTransform(smx, [-1, 1], [-3, 3]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative isolate overflow-hidden bg-paper pt-28 lg:pt-32"
    >
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(10,31,61,0.06),transparent_60%)]" />
        <motion.svg
          className="absolute -top-20 -right-20 h-[520px] w-[520px] opacity-[0.07] text-midnight"
          viewBox="0 0 200 200"
          fill="none"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={8 + i * 5}
              stroke="currentColor"
              strokeWidth="0.4"
            />
          ))}
        </motion.svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-16 lg:pb-20">
        {/* Top meta bar — fills the void above headline */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between gap-6 mb-6 lg:mb-8 pb-5 border-b border-stone-200/80 text-stone-500"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-gold"
            />
            <span className="eyebrow">Conseiller financier</span>
            <span className="text-stone-300">/</span>
            <span className="eyebrow text-stone-400">Québec</span>
            <span className="text-stone-300 hidden sm:inline">/</span>
            <span className="eyebrow text-stone-400 hidden sm:inline">
              Depuis 2018
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-stone-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Cabinet ouvert
            </span>
            <span>№ 01 / 11</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[14vw] sm:text-[8.5vw] lg:text-[5.2rem] xl:text-[6rem] leading-[0.96] tracking-[-0.02em] text-balance text-midnight">
              <SplitWords delay={0.1} stagger={0.05}>
                Bâtir un patrimoine
              </SplitWords>{" "}
              <span className="italic font-light text-stone-700">
                <SplitWords delay={0.45} stagger={0.05}>
                  qui traverse
                </SplitWords>
              </span>{" "}
              <SplitWords delay={0.7} stagger={0.05}>
                les
              </SplitWords>{" "}
              <span className="gold-word font-medium">générations.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base lg:text-lg leading-relaxed text-stone-700 text-pretty"
            >
              Une approche personnalisée, discrète et rigoureuse pour les
              familles, professionnels et entrepreneurs qui exigent davantage
              de leur conseiller. Conseil, stratégie et accompagnement —
              au-delà du chiffre.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="#contact"
                className="group inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-midnight text-paper transition-colors duration-500 hover:bg-deep-blue shadow-[0_18px_40px_-18px_rgba(10,31,61,0.7)]"
              >
                <span className="text-[12px] uppercase tracking-[0.16em] font-medium">
                  Réserver une consultation
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-midnight transition-transform duration-500 group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </MagneticButton>
              <MagneticButton
                href="#approche"
                strength={0.15}
                className="group inline-flex items-center gap-3 h-12 px-5 rounded-full border border-midnight/15 text-midnight hover:bg-midnight/[0.04] transition-colors"
              >
                <span className="text-[12px] uppercase tracking-[0.16em] font-medium">
                  Découvrir l&apos;approche
                </span>
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </MagneticButton>
            </motion.div>

            {/* Inline stats — replaces the bottom strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mt-10 lg:mt-12 grid grid-cols-4 divide-x divide-stone-200 border-y border-stone-200"
            >
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="px-3 py-4 lg:px-4 lg:py-5 group relative overflow-hidden"
                >
                  <div className="font-display text-2xl lg:text-3xl text-midnight leading-none tabular-nums">
                    <Counter value={s.v} suffix={s.suf} />
                  </div>
                  <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    {s.l}
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </motion.div>

            {/* Credentials inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-stone-500"
            >
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold-deep" fill="currentColor">
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
                Représentant en épargne collective
              </span>
              <span className="text-stone-300">·</span>
              <span>Pl. Fin. en cours</span>
              <span className="text-stone-300">·</span>
              <span>AMF · CSF</span>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative lg:sticky lg:top-32"
          >
            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
              className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto"
            >
              {/* gold trim */}
              <motion.div
                style={{ x: tx, y: ty }}
                className="absolute -inset-3 rounded-[10px] border border-gold/40"
              />
              <div className="absolute -bottom-4 -left-4 h-14 w-14 border-l-2 border-b-2 border-gold" />
              <div className="absolute -top-4 -right-4 h-14 w-14 border-r-2 border-t-2 border-gold" />

              {/* portrait */}
              <div className="relative h-full w-full rounded-[6px] overflow-hidden bg-midnight shadow-[0_40px_80px_-30px_rgba(10,31,61,0.55)]">
                <Image
                  src="/portrait.png"
                  alt="Lavoie Principale, conseiller financier"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
                {/* gold glint sweep */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    className="absolute -inset-1/2 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0], x: ["-30%", "30%", "30%"] }}
                    transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-2xl" />
                  </motion.div>
                )}
                {/* bottom gradient overlay for label */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-gold-soft mb-1">
                    <span className="h-px w-6 bg-gold-soft" />
                    <span className="text-[10px] uppercase tracking-[0.3em]">
                      Le conseiller
                    </span>
                  </div>
                  <div className="font-display text-2xl text-paper leading-tight">
                    L. Principale
                  </div>
                </div>
              </div>

              {/* signature badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 bg-paper border border-stone-200 rounded-full pl-1.5 pr-4 py-1.5 shadow-[0_18px_36px_-12px_rgba(10,31,61,0.25)]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-midnight text-gold text-[10px] font-semibold">
                  15+
                </span>
                <span className="text-[10px] text-stone-700 leading-tight uppercase tracking-[0.14em]">
                  années<br />
                  <span className="text-charcoal font-medium">d&apos;expérience</span>
                </span>
              </motion.div>

              {/* floating chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -top-2 -left-3 hidden md:flex items-center gap-2 bg-midnight text-paper rounded-full pl-1.5 pr-3.5 py-1.5 shadow-[0_18px_36px_-12px_rgba(10,31,61,0.6)]"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-midnight">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em]">
                  Stratégie sur mesure
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
