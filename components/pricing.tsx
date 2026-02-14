import { Check } from "lucide-react"

const plans = [
  {
    name: "Offre Mensuelle",
    price: "25 000",
    period: "FCFA / mois",
    description: "Ideal pour demarrer et tester toutes les fonctionnalites de Pondzi App.",
    features: [
      "Gestion de stock en temps reel",
      "Alertes intelligentes",
      "Rapports et statistiques",
      "Hebergement cloud securise",
      "Support par email",
      "1 utilisateur inclus",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
  {
    name: "Offre Annuelle",
    price: "200 000",
    period: "FCFA / an",
    description: "La meilleure offre pour les entreprises engagees dans la duree.",
    badge: "Meilleure offre",
    savings: "Economisez 100 000 FCFA par an",
    features: [
      "Toutes les fonctionnalites mensuelles",
      "Previsions IA de reapprovisionnement",
      "Gestion multi-utilisateurs",
      "Support prioritaire",
      "Mises a jour en avant-premiere",
      "Formation personnalisee",
    ],
    cta: "Choisir cette offre",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="offres" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nos offres
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Des tarifs simples et transparents, adaptes a la realite des entreprises africaines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-dark text-dark-foreground shadow-2xl scale-[1.02]"
                  : "border-border bg-card text-card-foreground hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="font-heading font-bold text-xl">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-dark-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mt-6">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-dark-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              {plan.savings && (
                <p className="mt-2 text-sm font-medium text-accent">{plan.savings}</p>
              )}
              <ul className="flex flex-col gap-3 mt-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                    <span className={plan.highlighted ? "text-dark-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
