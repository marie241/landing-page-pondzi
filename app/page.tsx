import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Audience } from "@/components/audience"
import { Pricing } from "@/components/pricing"
import { Advantages } from "@/components/advantages"
import { Partners } from "@/components/partners"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Audience />
        <Pricing />
        <Advantages />
        <Partners />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
