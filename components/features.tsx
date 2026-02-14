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
    title: "Previsions de reapprovisionnement avec IA",
    description:
      "Notre intelligence artificielle analyse vos tendances de vente pour vous proposer des reapprovisionnements optimaux.",
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
      "Vos donnees sont hebergees sur des serveurs securises avec sauvegardes automatiques et cryptage de bout en bout.",
  },
  {
    icon: FileBarChart,
    title: "Rapports et statistiques",
    description:
      "Generez des rapports detailles sur vos ventes, vos stocks et vos performances pour prendre les bonnes decisions.",
  },
  {
    icon: Users,
    title: "Gestion multi-utilisateurs",
    description:
      "Attribuez des roles et des permissions a votre equipe pour une collaboration efficace et securisee.",
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Fonctionnalites
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Tout ce dont vous avez besoin pour gerer votre stock
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Pondzi App reunit les outils essentiels pour simplifier et automatiser
            la gestion de votre inventaire au quotidien.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
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
