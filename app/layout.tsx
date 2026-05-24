import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavoie Principale — Conseiller financier de confiance",
  description:
    "Conseiller financier et futur planificateur financier au Québec. Une approche personnalisée pour bâtir, protéger et transmettre votre patrimoine avec rigueur et discrétion.",
  metadataBase: new URL("https://lavoieprincipale.ca"),
  openGraph: {
    title: "Lavoie Principale — Conseiller financier de confiance",
    description:
      "Bâtir un patrimoine qui traverse les générations. Conseil financier sur mesure pour familles, professionnels et entrepreneurs.",
    locale: "fr_CA",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr-CA"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
