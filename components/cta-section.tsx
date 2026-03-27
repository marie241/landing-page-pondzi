import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,#1e40af22,transparent)]" />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark-foreground leading-tight text-balance">
            Reprenez le controle de votre stock des aujourd&apos;hui
          </h2>
          <p className="mt-6 text-lg text-dark-foreground/60 leading-relaxed max-w-xl mx-auto text-pretty">
            Rejoignez les entreprises qui ont deja transforme leur gestion de stock
            avec Pondzi App. Commencez gratuitement ou demandez une demonstration personnalisee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all"
            >
              Demander une demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#offres"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-dark-foreground/20 px-8 py-4 text-base font-semibold text-dark-foreground hover:bg-dark-foreground/5 transition-all"
            >
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
