"use client";

import { motion } from "framer-motion";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";

const testimonials = [
  {
    q: "Pour la première fois, j'ai l'impression d'avoir un véritable plan — et un conseiller qui prend le temps de l'expliquer.",
    a: "Caroline B.",
    r: "Médecin spécialiste · Québec",
  },
  {
    q: "Lavoie a restructuré la rémunération de mon entreprise et je récupère plusieurs milliers de dollars chaque année. Aucun bla-bla, que des résultats.",
    a: "Frédéric L.",
    r: "Entrepreneur · Beauce",
  },
  {
    q: "Discrétion, professionnalisme, suivi exemplaire. Je le recommande à mes proches sans hésitation.",
    a: "Geneviève M.",
    r: "Cadre supérieure · Montréal",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative bg-paper py-16 lg:py-24 overflow-hidden"
      aria-label="Témoignages clients"
    >
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 text-gold-deep mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">05 — En confiance</span>
              </div>
            </Reveal>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.98] tracking-tight text-midnight text-balance">
              <SplitWordsInView>Ce que disent les</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.3}>clients</SplitWordsInView>
              </span>
              .
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gold"
                  fill="currentColor"
                >
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </motion.svg>
              ))}
              <span className="ml-2 text-sm text-stone-500">
                5.0 · Témoignages vérifiés
              </span>
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[3px] p-8 lg:p-10 border border-stone-200 ${
                i === 1 ? "bg-midnight text-paper lg:-mt-6 lg:mb-6" : "bg-cream/30"
              }`}
            >
              <span
                aria-hidden
                className={`absolute top-4 right-6 font-display text-7xl leading-none ${
                  i === 1 ? "text-gold/30" : "text-gold/50"
                }`}
              >
                ”
              </span>
              <blockquote
                className={`font-display text-2xl lg:text-[1.6rem] leading-snug italic ${
                  i === 1 ? "text-paper" : "text-charcoal"
                }`}
              >
                « {t.q} »
              </blockquote>
              <figcaption
                className={`mt-8 pt-6 border-t flex items-center gap-3 ${
                  i === 1 ? "border-paper/15" : "border-stone-300"
                }`}
              >
                <span
                  className={`inline-flex h-10 w-10 rounded-full items-center justify-center font-display text-lg ${
                    i === 1 ? "bg-gold text-midnight" : "bg-midnight text-gold"
                  }`}
                >
                  {t.a.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                </span>
                <div className="leading-tight">
                  <div
                    className={`text-sm font-medium ${
                      i === 1 ? "text-paper" : "text-charcoal"
                    }`}
                  >
                    {t.a}
                  </div>
                  <div
                    className={`text-xs uppercase tracking-[0.16em] mt-0.5 ${
                      i === 1 ? "text-paper/60" : "text-stone-500"
                    }`}
                  >
                    {t.r}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
