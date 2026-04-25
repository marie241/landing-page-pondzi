import type { Metadata, Viewport } from "next"
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
  title: "Stock-up241 - Gestion de stock intelligente pour PME africaines",
  description:
    "Stock-up241 est la solution SaaS de gestion de stock intelligente pour les PME et commercants africains. Automatisez vos inventaires, anticipez vos reapprovisionnements avec l'IA.",
}

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
