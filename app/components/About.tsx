"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      id="a-propos"
      ref={ref}
      className="relative bg-paper py-16 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait card */}
          <motion.div
            style={{ y, rotate: rot }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 border border-gold/35 rounded-[6px]" />
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 -left-4 h-16 w-16 border-l border-t border-gold origin-top-left"
              />
              <motion.div
                initial={{ scaleX: 0, scaleY: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 -right-4 h-16 w-16 border-r border-b border-gold origin-bottom-right"
              />
              <div className="relative h-full w-full rounded-[3px] overflow-hidden bg-midnight shadow-[0_30px_70px_-30px_rgba(10,31,61,0.35)]">
                <Image
                  src="/portrait.png"
                  alt="Lavoie Principale, conseiller financier"
                  fill
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                      Portrait
                    </div>
                    <div className="font-display text-xl text-paper mt-1">
                      L. Principale
                    </div>
                  </div>
                  <motion.div
                    className="font-display italic text-2xl text-gold"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  >
                    ✺
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-gold-deep mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">04 — Le conseiller</span>
              </div>
            </Reveal>

            <h2 className="font-display text-5xl lg:text-6xl leading-[0.98] tracking-tight text-midnight text-balance">
              <SplitWordsInView>Un parcours guidé par la</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.3}>rigueur</SplitWordsInView>
              </span>{" "}
              <SplitWordsInView delay={0.5}>et le</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.7}>service.</SplitWordsInView>
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-stone-700 leading-relaxed text-pretty max-w-xl">
              <Reveal delay={0.2}>
                <p>
                  <span className="font-display text-3xl text-midnight float-left mr-2 leading-[0.85] mt-1">
                    C
                  </span>
                  onseiller financier dévoué à servir les familles, professionnels
                  et entrepreneurs québécois, Lavoie Principale conjugue
                  expertise technique, écoute attentive et engagement à long
                  terme. Sa pratique repose sur une conviction simple : un bon
                  conseil financier change une vie.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Formé en sciences économiques et engagé dans un parcours menant
                  à la désignation de Planificateur financier (Pl. Fin.), il
                  bâtit aujourd&apos;hui une clientèle exigeante qui recherche
                  un accompagnement personnalisé, transparent et durable —
                  bien au-delà de la simple vente de produits.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  Chaque mandat est traité avec la même intensité : comprendre,
                  conseiller, exécuter, ajuster. Et surtout, demeurer présent
                  quand la vie pivote.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div className="mt-10 flex items-end gap-5">
                <div>
                  <svg viewBox="0 0 200 80" className="h-16 w-auto text-midnight">
                    <motion.path
                      d="M10 60 Q 30 10, 55 50 T 100 45 Q 130 20, 155 55 T 190 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.path
                      d="M85 65 L 120 65"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.8 }}
                    />
                  </svg>
                </div>
                <div className="pb-1 leading-tight">
                  <div className="font-display text-xl text-midnight">
                    Lavoie Principale
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-stone-500 mt-1">
                    Conseiller financier
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-3 gap-x-6 gap-y-6 border-t border-stone-200 pt-8">
              {[
                { k: "Formation", v: "Sciences économiques" },
                { k: "Désignation", v: "Pl. Fin. (en cours)" },
                { k: "Régulation", v: "AMF · CSF" },
              ].map((c, i) => (
                <Reveal key={c.k} delay={0.1 * i + 0.5}>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                      {c.k}
                    </div>
                    <div className="mt-1 text-charcoal font-medium">{c.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
