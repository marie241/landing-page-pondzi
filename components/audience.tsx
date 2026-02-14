import { Store, ShoppingBag, Building2, Truck, TrendingUp } from "lucide-react"

const audiences = [
  {
    icon: ShoppingBag,
    title: "Commercants",
    description:
      "Gerez facilement votre inventaire et ne manquez plus jamais une vente a cause d'une rupture de stock.",
  },
  {
    icon: Store,
    title: "Boutiques & magasins",
    description:
      "Suivez vos produits en rayon, vos entrees en reserve et vos ventes en temps reel depuis un seul tableau de bord.",
  },
  {
    icon: Building2,
    title: "PME",
    description:
      "Optimisez vos operations logistiques avec des outils de gestion de stock concu pour la croissance.",
  },
  {
    icon: Truck,
    title: "Grossistes & distributeurs",
    description:
      "Gerez de gros volumes, suivez vos expeditions et anticipez la demande de vos clients.",
  },
  {
    icon: TrendingUp,
    title: "Entreprises en croissance",
    description:
      "Faites evoluer votre gestion de stock au meme rythme que votre entreprise, sans friction.",
  },
]

export function Audience() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pour qui ?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Qui peut utiliser Pondzi App ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Que vous soyez un petit commercant ou une entreprise en pleine expansion,
            Pondzi App s&apos;adapte a vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
