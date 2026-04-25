import {
  Wallet,
  Wrench,
  Sparkles,
  Clock,
  ShieldCheck,
  LineChart,
} from "lucide-react"

const advantages = [
  {
    icon: Wallet,
    title: "Prix accessible",
    description: "Des tarifs penses pour les realites economiques des entreprises africaines.",
  },
  {
    icon: Wrench,
    title: "Maintenance incluse",
    description: "Mises a jour regulieres et support technique sans frais supplementaires.",
  },
  {
    icon: Sparkles,
    title: "Evolution continue avec l'IA",
    description: "Des fonctionnalites toujours plus intelligentes au fil du temps.",
  },
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Automatisez les taches repetitives et concentrez-vous sur votre activite.",
  },
  {
    icon: ShieldCheck,
    title: "Reduction des pertes",
    description: "Anticipez les ruptures et les surplus pour minimiser les pertes financieres.",
  },
  {
    icon: LineChart,
    title: "Decisions basees sur les donnees",
    description: "Des analyses detaillees de vos stocks et ventes pour des decisions eclairees.",
  },
]

export function Advantages() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Avantages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Les avantages de Stock-up241
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Decouvrez pourquoi des centaines d&apos;entreprises font confiance a Stock-up241
            pour la gestion de leur stock.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:shadow-lg hover:shadow-foreground/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <advantage.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
