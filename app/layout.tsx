import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Pondzi App - Gestion de stock intelligente pour PME",
  description:
    "Pondzi App est la solution de gestion de stock intelligente pour les PME et commercants africains. Automatisez vos inventaires, anticipez vos reapprovisionnements avec l'IA.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
