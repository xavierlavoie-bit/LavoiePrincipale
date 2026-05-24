"use client";

import { motion } from "framer-motion";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";
import {
  IconCompass,
  IconDiscretion,
  IconHorizon,
  IconHumain,
} from "./Icons";

const pillars = [
  {
    n: "01",
    t: "Discrétion",
    m: "Vos affaires demeurent strictement vôtres.",
    Icon: IconDiscretion,
  },
  {
    n: "02",
    t: "Long terme",
    m: "Un patrimoine pensé pour traverser les cycles.",
    Icon: IconHorizon,
  },
  {
    n: "03",
    t: "Sur mesure",
    m: "Aucune solution copiée — tout est conçu pour vous.",
    Icon: IconCompass,
  },
  {
    n: "04",
    t: "Humain",
    m: "Un interlocuteur unique, accessible et engagé.",
    Icon: IconHumain,
  },
];

export default function Philosophy() {
  return (
    <section
      id="approche"
      className="relative bg-paper py-16 lg:py-24 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grain" />
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 text-gold-deep mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">01 — L&apos;approche</span>
              </div>
            </Reveal>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-midnight text-balance">
              <SplitWordsInView>Au-delà du</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.25}>rendement.</SplitWordsInView>
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
            <Reveal delay={0.3}>
              <p className="text-stone-700 leading-relaxed">
                Quatre principes qui guident chaque décision — bien avant le
                premier dollar investi.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pull quote — centered, signature moment */}
        <Reveal delay={0.2}>
          <figure className="relative max-w-4xl mx-auto py-10 lg:py-14">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3 text-gold-deep">
              <span className="h-px w-8 bg-gold" />
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
              </svg>
              <span className="h-px w-8 bg-gold" />
            </div>
            <blockquote className="font-display text-3xl lg:text-[2.4rem] leading-[1.2] italic text-charcoal text-balance text-center px-6">
              <SplitWordsInView stagger={0.04}>
                La fortune ne se mesure pas en chiffres, mais dans la liberté qu’elle offre.
              </SplitWordsInView>
            </blockquote>
            <Reveal delay={0.6}>
              <figcaption className="mt-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-stone-500">
                <span className="h-px w-8 bg-gold" />
                L. Principale
              </figcaption>
            </Reveal>
          </figure>
        </Reveal>

        {/* Pillars — iconographic vignettes */}
        <div className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-[2px] overflow-hidden">
          {pillars.map((p, i) => {
            const Icon = p.Icon;
            return (
              <motion.article
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-paper p-7 lg:p-9 transition-colors duration-500 hover:bg-cream/50"
              >
                {/* Roman numeral watermark */}
                <span
                  aria-hidden
                  className="absolute top-4 right-5 font-display text-[3rem] leading-none text-stone-300/70 transition-colors duration-500 group-hover:text-gold/50 select-none"
                >
                  {p.n}
                </span>

                {/* Icon */}
                <div className="relative inline-flex h-14 w-14 items-center justify-center text-gold-deep mb-6">
                  <Icon className="h-14 w-14" />
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <h3 className="font-display text-2xl lg:text-[1.7rem] text-midnight leading-tight">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 italic font-display">
                  {p.m}
                </p>

                {/* animated gold underline on hover */}
                <span className="block mt-5 h-px w-10 bg-stone-300 transition-all duration-700 group-hover:w-24 group-hover:bg-gold" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
