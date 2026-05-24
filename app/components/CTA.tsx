"use client";

import { motion } from "framer-motion";
import LogoMark from "./LogoMark";
import { SplitWordsInView } from "./motion/SplitWords";
import Reveal from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-midnight text-paper overflow-hidden"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-px rule-gold opacity-80" />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,97,0.16),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(31,58,138,0.4),transparent_60%)]" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <LogoMark
            className="h-[120%] w-auto opacity-[0.04]"
            withText={false}
            monoColor="#c9a961"
          />
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[140px] bg-gold/20"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-[1240px] px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-gold mb-5">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">Prenons rendez-vous</span>
              </div>
            </Reveal>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-paper text-balance">
              <SplitWordsInView>
                Prenez le contrôle de votre
              </SplitWordsInView>{" "}
              <span className="italic font-light text-gold-soft">
                <SplitWordsInView delay={0.4}>avenir financier</SplitWordsInView>
              </span>
              .
            </h2>
            <Reveal delay={0.6}>
              <p className="mt-5 max-w-xl text-paper/75 text-lg leading-relaxed">
                Une rencontre exploratoire de 60 minutes — sans engagement,
                sans frais. Apportez vos questions, vos chiffres, vos rêves.
                Nous verrons ensemble si nous formons la bonne équipe.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-lg">
                <MagneticButton
                  href="tel:+15815550000"
                  strength={0.15}
                  className="group flex items-center gap-4 p-5 rounded-[3px] bg-paper/[0.04] border border-paper/10 hover:bg-paper/[0.08] transition-colors"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-midnight">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs uppercase tracking-[0.18em] text-paper/55">Téléphone</div>
                    <div className="font-display text-xl text-paper mt-1">
                      (581) 555 · 0000
                    </div>
                  </div>
                </MagneticButton>
                <MagneticButton
                  href="mailto:contact@lavoieprincipale.ca"
                  strength={0.15}
                  className="group flex items-center gap-4 p-5 rounded-[3px] bg-paper/[0.04] border border-paper/10 hover:bg-paper/[0.08] transition-colors"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-midnight">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 6h16v12H4z M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs uppercase tracking-[0.18em] text-paper/55">Courriel</div>
                    <div className="font-display text-xl text-paper mt-1">
                      contact@…
                    </div>
                  </div>
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <form
              className="relative bg-paper text-charcoal rounded-[6px] p-8 lg:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-3 left-8 inline-flex items-center gap-2 bg-gold text-midnight px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-midnight"
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                Réponse sous 24h
              </motion.div>

              <h3 className="font-display text-3xl text-midnight mb-2">
                Demander une rencontre
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Quelques détails et je vous reviens avec une plage horaire.
              </p>

              <div className="space-y-4">
                <Field label="Nom complet" placeholder="Prénom et nom" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Courriel" type="email" placeholder="vous@exemple.ca" />
                  <Field label="Téléphone" placeholder="(000) 000-0000" />
                </div>
                <div>
                  <Label>Objectif principal</Label>
                  <select className="mt-2 w-full h-12 px-4 rounded-[3px] border border-stone-300 bg-paper text-charcoal focus:outline-none focus:border-midnight transition-colors text-sm">
                    <option>Planification de retraite</option>
                    <option>Stratégie de placement</option>
                    <option>Optimisation fiscale</option>
                    <option>Protection / assurance</option>
                    <option>Conseil pour entrepreneur</option>
                    <option>Autre / à discuter</option>
                  </select>
                </div>
                <div>
                  <Label>Message (facultatif)</Label>
                  <textarea
                    rows={3}
                    placeholder="Quelques mots sur votre situation…"
                    className="mt-2 w-full px-4 py-3 rounded-[3px] border border-stone-300 bg-paper text-charcoal focus:outline-none focus:border-midnight transition-colors text-sm resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-8 w-full inline-flex items-center justify-center gap-3 h-14 rounded-full bg-midnight text-paper hover:bg-deep-blue transition-colors group"
              >
                <span className="text-[12px] uppercase tracking-[0.18em] font-medium">
                  Envoyer la demande
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-midnight transition-transform duration-500 group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.button>

              <p className="mt-4 text-[11px] text-stone-500 text-center leading-relaxed">
                Vos informations demeurent strictement confidentielles et ne
                sont jamais partagées.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
      {children}
    </span>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full h-12 px-4 rounded-[3px] border border-stone-300 bg-paper text-charcoal placeholder:text-stone-400 focus:outline-none focus:border-midnight transition-colors text-sm"
      />
    </div>
  );
}
