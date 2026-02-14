import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Gestion de stock intelligente
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Prenez le controle total de votre stock
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Pondzi App est la solution SaaS qui aide les PME et commercants africains a gerer
              leurs inventaires en temps reel, anticiper les ruptures et optimiser chaque commande
              grace a l&apos;intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Demander une demo
              </a>
              <a
                href="#offres"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Essai gratuit
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <Image
                src="/images/hero-mockup.jpg"
                alt="Interface de gestion de stock Pondzi App montrant un tableau de bord avec graphiques et niveaux d'inventaire"
                width={640}
                height={440}
                className="relative rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
