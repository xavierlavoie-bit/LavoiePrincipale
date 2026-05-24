"use client";

import { motion } from "framer-motion";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";
import {
  IconEntrepreneurial,
  IconFiscal,
  IconInvestissements,
  IconProtection,
  IconRetraite,
  IconSuccessoral,
} from "./Icons";

const services = [
  {
    n: "I",
    t: "Planification de retraite",
    tag: "Bâtir et préserver votre revenu.",
    d: "REER, CELI, décaissement optimal, coordination RRQ/SV — chaque dollar à sa juste place.",
    Icon: IconRetraite,
  },
  {
    n: "II",
    t: "Investissements",
    tag: "Allocation rigoureuse, diversification réelle.",
    d: "Portefeuilles construits autour de votre horizon, vos convictions et votre tolérance au risque.",
    Icon: IconInvestissements,
  },
  {
    n: "III",
    t: "Stratégies fiscales",
    tag: "Garder davantage de ce que vous gagnez.",
    d: "Structurer vos revenus, vos cotisations et vos retraits pour minimiser la facture fiscale.",
    Icon: IconFiscal,
  },
  {
    n: "IV",
    t: "Protection",
    tag: "Mettre les vôtres à l'abri.",
    d: "Couverture vie, invalidité, maladies graves — calibrée, jamais surdimensionnée.",
    Icon: IconProtection,
  },
  {
    n: "V",
    t: "Succession",
    tag: "Transmettre avec clarté.",
    d: "Stratégies successorales, fiducies, coordination notariale — pour une transmission harmonieuse.",
    Icon: IconSuccessoral,
  },
  {
    n: "VI",
    t: "Entrepreneurs",
    tag: "Optimiser, accumuler, transférer.",
    d: "Rémunération, société de gestion, préparation du transfert — pensés pour les propriétaires d'entreprise.",
    Icon: IconEntrepreneurial,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-midnight text-paper py-16 lg:py-24 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.10),transparent_55%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0" stroke="#c9a961" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>

        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/4 h-72 w-72 rounded-full blur-[120px] bg-gold/20"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 right-10 h-96 w-96 rounded-full blur-[140px] bg-royal/30"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-8 lg:mb-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 text-gold mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">02 — Les services</span>
              </div>
            </Reveal>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-paper text-balance">
              <SplitWordsInView>Un seul interlocuteur,</SplitWordsInView>{" "}
              <span className="italic font-light text-gold-soft">
                <SplitWordsInView delay={0.3}>six expertises</SplitWordsInView>
              </span>
              .
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 hidden lg:block">
            <Reveal delay={0.5}>
              <p className="text-paper/70 leading-relaxed text-pretty text-sm">
                <span className="text-gold-soft">Survolez</span> chaque service pour révéler le détail.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20 rounded-[2px] overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-midnight p-8 lg:p-10 transition-colors duration-500 hover:bg-deep-blue overflow-hidden cursor-default"
              >
                {/* Roman watermark */}
                <span
                  aria-hidden
                  className="absolute -bottom-4 -right-2 font-display text-[7rem] leading-none text-gold/[0.06] group-hover:text-gold/[0.14] transition-colors duration-700 select-none"
                >
                  {s.n}
                </span>

                {/* Top row: icon + numeral */}
                <div className="flex items-start justify-between mb-7">
                  <motion.div
                    className="text-gold-soft"
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon className="h-14 w-14" />
                  </motion.div>
                  <span className="font-display text-xl text-gold tracking-[0.2em] mt-1">
                    {s.n}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-[1.75rem] text-paper leading-tight text-balance">
                  {s.t}
                </h3>

                {/* Short tagline (always visible) */}
                <p className="mt-3 text-sm leading-relaxed italic font-display text-gold-soft/90">
                  {s.tag}
                </p>

                {/* Description — visible by default (mobile/tablet), hover-reveal on desktop */}
                <div className="mt-5 max-h-40 opacity-100 lg:mt-0 lg:max-h-0 lg:opacity-0 lg:group-hover:mt-5 lg:group-hover:max-h-40 lg:group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="h-px w-10 bg-gold/40 mb-4" />
                  <p className="text-sm text-paper/65 leading-relaxed">{s.d}</p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  aria-hidden
                  className="mt-6 flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-500"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em]">
                    En savoir plus
                  </span>
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <motion.path
                      d="M5 12h14M13 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
