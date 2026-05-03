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

        {/* Facebook Reels video centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-[320px]">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F979780501651499&show_text=false&width=320&height=568"
              width="320"
              height="568"
              className="border-0 rounded-3xl overflow-hidden shadow-2xl"
              allow="autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
