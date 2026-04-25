import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#dbeafe,transparent)]" />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-sm font-medium text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Gestion de stock intelligente
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] text-balance">
              Prenez le controle
              <span className="text-primary"> total </span>
              de votre stock
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Stock-up241 aide les PME et commercants africains a gerer leurs
              inventaires en temps reel, anticiper les ruptures et optimiser
              chaque commande grace a l&apos;intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="https://wa.me/24166758191"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
              >
                Demander une demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://ponzi-2.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-border px-7 py-3.5 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Essai gratuit
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Sans engagement
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Support inclus
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-up-delay-2">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/5 rounded-[2rem] blur-3xl" />
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl" />
              <Image
                src="/images/hero-mockup.jpg"
                alt="Interface de gestion de stock Stock-up241 montrant un tableau de bord avec graphiques et niveaux d'inventaire"
                width={640}
                height={440}
                className="relative rounded-2xl shadow-2xl shadow-foreground/10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
