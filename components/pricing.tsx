import { Check, ArrowRight } from "lucide-react"

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
    <section id="offres" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Tarifs
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Nos offres
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Des tarifs simples et transparents, adaptes a la realite des entreprises africaines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 lg:p-10 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-dark text-dark-foreground border-2 border-dark shadow-2xl shadow-dark/20 lg:scale-105"
                  : "bg-background text-foreground border-2 border-border hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-5 py-1.5 text-xs font-bold text-white shadow-lg shadow-accent/30">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="font-heading font-bold text-xl">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? "text-dark-foreground/60" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1.5 mt-8">
                <span className="font-heading text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm font-medium ${plan.highlighted ? "text-dark-foreground/50" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              {plan.savings && (
                <p className="mt-2 text-sm font-semibold text-accent">{plan.savings}</p>
              )}
              <div className={`my-8 h-px ${plan.highlighted ? "bg-dark-foreground/10" : "bg-border"}`} />
              <ul className="flex flex-col gap-3.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.highlighted ? "bg-accent/20" : "bg-secondary"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-accent" : "text-primary"}`} strokeWidth={2.5} />
                    </div>
                    <span className={plan.highlighted ? "text-dark-foreground/80" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90"
                    : "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
