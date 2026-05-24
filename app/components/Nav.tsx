"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

const links = [
  { href: "#approche", label: "Approche" },
  { href: "#services", label: "Services" },
  { href: "#processus", label: "Processus" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-9 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-stone-200/60"
          : "bg-paper/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="group inline-flex items-center"
            aria-label="Lavoie Principale — accueil"
          >
            <LogoMark
              className={`h-9 transition-colors ${
                scrolled ? "text-midnight" : "text-midnight"
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-medium text-stone-700 tracking-[0.08em] uppercase hover:text-midnight transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-midnight text-paper text-[12px] font-medium tracking-[0.14em] uppercase hover:bg-deep-blue transition-all duration-300 shadow-[0_8px_28px_-12px_rgba(10,31,61,0.6)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Réserver une consultation
            </a>

            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300/70 text-midnight"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 7h18" strokeLinecap="round" />
                    <path d="M3 17h18" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-paper border-t border-stone-200/60`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl py-2 text-midnight border-b border-stone-200 last:border-none"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center h-12 rounded-full bg-midnight text-paper text-sm uppercase tracking-[0.14em]"
          >
            Réserver une consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
