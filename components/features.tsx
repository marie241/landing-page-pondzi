import {
  BarChart3,
  BrainCircuit,
  BellRing,
  Cloud,
  FileBarChart,
  Users,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Gestion de stock en temps reel",
    description:
      "Suivez chaque mouvement de stock instantanement. Entrees, sorties, transferts : tout est visible en un coup d'oeil.",
  },
  {
    icon: BrainCircuit,
    title: "Previsions IA",
    description:
      "Notre intelligence artificielle analyse vos tendances de vente pour proposer des reapprovisionnements optimaux.",
  },
  {
    icon: BellRing,
    title: "Alertes intelligentes",
    description:
      "Recevez des notifications automatiques lorsque vos niveaux de stock atteignent un seuil critique.",
  },
  {
    icon: Cloud,
    title: "Hebergement cloud securise",
    description:
      "Vos donnees sont hebergees sur des serveurs securises avec sauvegardes automatiques et chiffrement.",
  },
  {
    icon: FileBarChart,
    title: "Rapports et statistiques",
    description:
      "Generez des rapports detailles sur vos ventes, vos stocks et vos performances.",
  },
  {
    icon: Users,
    title: "Gestion multi-utilisateurs",
    description:
      "Attribuez des roles et permissions a votre equipe pour une collaboration securisee.",
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Fonctionnalites
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tout ce dont vous avez besoin pour gerer votre stock
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Pondzi App reunit les outils essentiels pour simplifier et automatiser
            la gestion de votre inventaire au quotidien.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col p-7 rounded-2xl border border-border bg-background hover:bg-card hover:shadow-lg hover:shadow-foreground/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
