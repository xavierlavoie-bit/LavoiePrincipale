"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";

const steps = [
  {
    n: "01",
    t: "Première rencontre",
    d: "Sans frais, sans engagement. Une discussion franche pour comprendre vos objectifs, vos préoccupations et vos ambitions.",
    duration: "60 min",
  },
  {
    n: "02",
    t: "Analyse approfondie",
    d: "Inventaire complet de votre situation : actifs, dettes, fiscalité, protection, projets. Rien n’est laissé au hasard.",
    duration: "2 à 3 semaines",
  },
  {
    n: "03",
    t: "Stratégie sur mesure",
    d: "Présentation détaillée de votre plan financier — clair, concret, et ajusté à votre rythme et à votre confort.",
    duration: "Rencontre dédiée",
  },
  {
    n: "04",
    t: "Mise en œuvre",
    d: "Exécution coordonnée des recommandations, avec accompagnement à chaque étape et collaboration avec vos professionnels.",
    duration: "Selon les besoins",
  },
  {
    n: "05",
    t: "Suivi continu",
    d: "Révision périodique, ajustements selon la vie qui change, et accessibilité réelle quand vous en avez besoin.",
    duration: "À vie",
  },
];

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="processus" className="relative bg-cream/50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 text-gold-deep mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">03 — Le processus</span>
              </div>
            </Reveal>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight text-midnight text-balance">
              <SplitWordsInView>Cinq étapes,</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.25}>une démarche</SplitWordsInView>
              </span>{" "}
              <SplitWordsInView delay={0.55}>limpide.</SplitWordsInView>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.4}>
              <p className="text-stone-600 leading-relaxed">
                Une méthode éprouvée qui vous met en confiance dès le premier
                jour — du diagnostic initial à l&apos;accompagnement à long
                terme.
              </p>
            </Reveal>
          </div>
        </div>

        <ol ref={ref} className="relative">
          {/* base rail */}
          <div className="absolute left-6 lg:left-1/2 top-2 bottom-2 w-px bg-stone-300/70" />
          {/* animated gold rail (scroll-progress) */}
          <motion.div
            style={{ height: railHeight }}
            className="absolute left-6 lg:left-1/2 top-2 w-px bg-gradient-to-b from-gold via-gold-soft to-transparent origin-top"
          />

          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <li key={s.n} className="relative pl-16 lg:pl-0 mb-10 last:mb-0">
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 lg:left-1/2 top-2 -translate-x-1/2 lg:-translate-x-1/2 z-10"
                >
                  <div className="relative h-12 w-12 rounded-full bg-paper border border-stone-300 flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(10,31,61,0.2)]">
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-gold/0"
                      initial={{ boxShadow: "0 0 0 0 rgba(201,169,97,0)" }}
                      whileInView={{
                        boxShadow: [
                          "0 0 0 0 rgba(201,169,97,0)",
                          "0 0 0 6px rgba(201,169,97,0.35)",
                          "0 0 0 12px rgba(201,169,97,0)",
                        ],
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.4, delay: 0.2 }}
                    />
                    <span className="font-display text-base text-gold-deep tracking-widest">
                      {s.n}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: right ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 1,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16`}
                >
                  <div
                    className={`${right ? "lg:col-start-2 lg:pl-16" : "lg:pr-16 lg:text-right"}`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-500 mb-3 ${
                        right ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      <span className="h-px w-6 bg-gold" />
                      <span>{s.duration}</span>
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl text-midnight leading-tight">
                      {s.t}
                    </h3>
                    <p className="mt-4 text-stone-700 leading-relaxed max-w-md lg:max-w-none lg:inline-block">
                      {s.d}
                    </p>
                  </div>
                  <div />
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
