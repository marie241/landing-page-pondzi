"use client"

import Image from "next/image"

const partners = [
  {
    name: "Oswaldo",
    logo: "/images/partners/oswaldo.png",
  },
  {
    name: "Showroom by LJ",
    logo: "/images/partners/aj-royal.png",
  },
  {
    name: "Confederation des Entreprises du Gabon",
    logo: "/images/partners/ceg.png",
  },
  {
    name: "SOS Chrono",
    logo: "/images/partners/sos-chrono.png",
  },
  {
    name: "Alexia Graine de Plaisir by Sandra Shop",
    logo: "/images/partners/sandra-shop.png",
  },
]

export function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <section id="partenaires" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Partenaires
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Ils nous font confiance
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Des entreprises gabonaises de tous secteurs utilisent Stock-up241 pour gerer leur stock au quotidien.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll" style={{ width: "max-content" }}>
          {doubled.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center mx-4 shrink-0"
            >
              <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all w-40">
                <div className="relative w-14 h-14 shrink-0">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-xs text-card-foreground text-center leading-snug w-full line-clamp-2">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
