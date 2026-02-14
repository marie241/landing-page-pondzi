export function CtaSection() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-dark">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark-foreground text-balance">
            Reprenez le controle de votre stock des aujourd&apos;hui
          </h2>
          <p className="mt-6 text-lg text-dark-foreground/70 leading-relaxed max-w-xl mx-auto text-pretty">
            Rejoignez les entreprises qui ont deja transforme leur gestion de stock
            avec Pondzi App. Commencez gratuitement ou demandez une demonstration personnalisee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Demander une demo
            </a>
            <a
              href="#offres"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-dark-foreground/30 px-8 py-3.5 text-base font-semibold text-dark-foreground hover:bg-dark-foreground/10 transition-colors"
            >
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
