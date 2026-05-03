"use client"

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Tutoriel
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-balance">
            Comment ca marche ?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Decouvrez en quelques minutes comment Stock-up241 transforme la gestion
            de votre stock au quotidien.
          </p>
        </div>

        {/* Mobile-format video centered */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-foreground">
            {/* Phone notch decoration */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-foreground z-10 flex items-center justify-center">
              <div className="w-20 h-1.5 rounded-full bg-background/20" />
            </div>
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              poster=""
            >
              <source src="/videos/how-it-works.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de videos.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
