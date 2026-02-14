"use client"

const partners = [
  "Boutique Mama Aisha",
  "SuperMarche Central",
  "Distribution Express",
  "Magasin du Peuple",
  "Commerce Plus",
  "AfricaShop",
  "Stock Pro",
  "MarketPlace DK",
  "QuickStore",
  "TradeLink Africa",
]

const colors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/15 text-primary",
  "bg-accent/15 text-accent",
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
            Nos boutiques partenaires
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Ils nous font confiance pour gerer leur stock au quotidien.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll" style={{ width: "max-content" }}>
          {doubled.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex items-center justify-center mx-3 shrink-0"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors[index % colors.length]}`}>
                  <span className="font-heading font-bold text-sm">
                    {partner.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-sm text-card-foreground whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
