"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";

const faqs = [
  {
    q: "À qui s'adressent vos services ?",
    a: "Aux familles, professionnels et entrepreneurs qui souhaitent un véritable conseil financier — pas une transaction. Que vous démarriez ou que vous gériez un patrimoine établi, l'accompagnement s'adapte à votre étape de vie.",
  },
  {
    q: "Comment êtes-vous rémunéré ?",
    a: "La rémunération est entièrement transparente, expliquée dès la première rencontre. Selon la nature des produits et services, elle peut prendre la forme de frais de gestion intégrés, de commissions ou d'honoraires — toujours divulgués clairement.",
  },
  {
    q: "Quelle est la première étape ?",
    a: "Une rencontre exploratoire gratuite, sans engagement, d'environ 60 minutes. Elle vous permet d'évaluer si nous sommes faits pour collaborer — et inversement.",
  },
  {
    q: "Travaillez-vous en collaboration avec mes autres professionnels ?",
    a: "Absolument. Comptable, fiscaliste, notaire, avocat : votre stratégie financière est plus solide lorsqu'elle est coordonnée. Je collabore volontiers avec vos professionnels existants.",
  },
  {
    q: "Mes informations sont-elles confidentielles ?",
    a: "La confidentialité est non négociable. Tous les dossiers sont protégés selon les exigences de l'AMF, de la CSF et des plus hauts standards déontologiques.",
  },
  {
    q: "Puis-je vous joindre en cas de besoin ?",
    a: "Oui. Un interlocuteur unique, joignable directement par téléphone, courriel ou rendez-vous. Engagement personnel sur un retour dans les 24 heures ouvrables.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-cream/40 py-16 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 text-gold-deep mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">06 — Questions fréquentes</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.98] tracking-tight text-midnight text-balance">
              <SplitWordsInView>Tout ce que vous voulez</SplitWordsInView>{" "}
              <span className="italic font-light text-stone-600">
                <SplitWordsInView delay={0.3}>savoir.</SplitWordsInView>
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-stone-300/70 border-t border-b border-stone-300/70">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-6 py-7 lg:py-8 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-base text-gold-deep tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl lg:text-3xl text-midnight leading-snug group-hover:text-deep-blue transition-colors">
                      {f.q}
                    </span>
                  </div>
                  <motion.span
                    animate={isOpen ? { rotate: 45, backgroundColor: "#0a1f3d", color: "#c9a961", borderColor: "#0a1f3d" } : { rotate: 0, backgroundColor: "rgba(0,0,0,0)", color: "#0a1f3d" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 h-10 w-10 rounded-full border border-stone-300 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.35 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-12 lg:pl-16 pr-6 text-stone-600 leading-relaxed max-w-3xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
