const items = [
  "Investia Services Financiers",
  "Chambre de la sécurité financière",
  "Institut québécois de planification financière",
  "AMF — Autorité des marchés financiers",
  "Fonds canadien de protection",
  "OCRI",
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Affiliations et accréditations"
      className="relative border-y border-stone-200 bg-cream/40 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px rule-gold opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px rule-gold opacity-50" />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-8">
        <div className="flex items-center gap-8 flex-wrap justify-center lg:justify-between">
          <span className="eyebrow text-stone-500 shrink-0">
            Encadré par
          </span>
          <div className="overflow-hidden flex-1 max-w-[1000px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee flex gap-12 whitespace-nowrap">
              {[...items, ...items].map((item, i) => (
                <span
                  key={i}
                  className="font-display text-xl italic text-stone-700/80"
                >
                  {item}{" "}
                  <span className="not-italic text-gold mx-3">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
