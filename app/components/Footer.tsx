import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="relative bg-ink-blue text-paper/80">
      <div className="absolute inset-x-0 top-0 h-px rule-gold opacity-60" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <LogoMark className="h-10 text-paper" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/65">
              Conseiller financier au service des familles, professionnels et
              entrepreneurs du Québec. Bâtir un patrimoine qui traverse les
              générations.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 hover:bg-paper/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.78 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.45h-4.56V15.4c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V22H8V8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 hover:bg-paper/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 hover:bg-paper/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.83 3.7-3.83 1.07 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.9h-2.29v6.98A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-gold/70 mb-5">Navigation</div>
            <ul className="space-y-3 text-sm">
              {["Approche", "Services", "Processus", "À propos", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace("à ", "a-")}`}
                    className="hover:text-paper transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="eyebrow text-gold/70 mb-5">Contact</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:contact@lavoieprincipale.ca" className="hover:text-paper">
                  contact@lavoieprincipale.ca
                </a>
              </li>
              <li>
                <a href="tel:+15815550000" className="hover:text-paper">
                  (581) 555 · 0000
                </a>
              </li>
              <li className="text-paper/55">
                Sur rendez-vous<br />
                Lévis · Québec · Beauce
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-gold/70 mb-5">Disponibilité</div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-3">
                <span className="text-paper/60">Lun — Ven</span>
                <span>9h — 18h</span>
              </li>
              <li className="flex justify-between gap-3">
                <span className="text-paper/60">Samedi</span>
                <span>Sur RDV</span>
              </li>
              <li className="flex justify-between gap-3">
                <span className="text-paper/60">Dimanche</span>
                <span>—</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory disclosure */}
        <div className="mt-16 pt-8 border-t border-paper/10">
          <p className="text-[11px] leading-relaxed text-paper/45 max-w-4xl">
            Lavoie Principale est conseiller financier inscrit auprès de
            l&apos;Autorité des marchés financiers (AMF) et membre de la Chambre
            de la sécurité financière (CSF). Les produits d&apos;épargne
            collective et les fonds communs de placement sont offerts par
            l&apos;entremise d&apos;un cabinet de services financiers dûment
            inscrit. Les rendements passés ne garantissent pas les rendements
            futurs. Le présent site est à titre informatif uniquement et ne
            constitue ni une offre, ni un conseil personnalisé.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[12px] text-paper/40">
          <div>
            © {new Date().getFullYear()} Lavoie Principale. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-paper/70">Politique de confidentialité</a>
            <a href="#" className="hover:text-paper/70">Conditions d&apos;utilisation</a>
            <a href="#" className="hover:text-paper/70">Divulgations AMF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
