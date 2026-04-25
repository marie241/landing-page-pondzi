import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conditions Generales d'Utilisation - Stock-up241",
  description: "Consultez les conditions generales d'utilisation de Stock-up241.",
}

export default function ConditionsGenerales() {
  return (
    <>
      <header className="bg-dark">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/stock-up241-logo.png"
              alt="Stock-up241"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-heading font-bold text-xl text-dark-foreground">Stock-up241</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark-foreground/60 hover:text-dark-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Conditions Generales d&apos;Utilisation
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Derniere mise a jour : Fevrier 2026
          </p>

          <div className="flex flex-col gap-10 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Objet</h2>
              <p className="text-muted-foreground">
                Les presentes Conditions Generales d&apos;Utilisation (CGU) regissent l&apos;utilisation
                de la plateforme Stock-up241, un service de gestion de stock en ligne destine aux
                entreprises et commercants. En accedant a notre plateforme, vous acceptez d&apos;etre
                lie par les presentes CGU.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Description du service</h2>
              <p className="text-muted-foreground">
                Stock-up241 offre une solution SaaS de gestion de stock comprenant : le suivi des
                inventaires en temps reel, les previsions de reapprovisionnement assistees par
                intelligence artificielle, les alertes automatiques, la generation de rapports et
                statistiques, et la gestion multi-utilisateurs.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Inscription et compte</h2>
              <p className="text-muted-foreground">
                Pour utiliser Stock-up241, vous devez creer un compte en fournissant des informations
                exactes et completes. Vous etes responsable de la confidentialite de vos identifiants
                de connexion et de toutes les activites effectuees sous votre compte. Vous vous
                engagez a nous informer immediatement de toute utilisation non autorisee.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Tarification et paiement</h2>
              <p className="text-muted-foreground mb-3">
                Stock-up241 propose deux formules d&apos;abonnement :
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Offre Mensuelle : 25 000 FCFA par mois</li>
                <li>Offre Annuelle : 200 000 FCFA par an</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Les paiements sont dus a l&apos;avance et ne sont pas remboursables, sauf disposition
                contraire prevue par la loi applicable. Nous nous reservons le droit de modifier nos
                tarifs avec un preavis de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Obligations de l&apos;utilisateur</h2>
              <p className="text-muted-foreground mb-3">En utilisant Stock-up241, vous vous engagez a :</p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Utiliser le service conformement aux lois en vigueur</li>
                <li>Ne pas tenter d&apos;acceder a des systemes ou donnees non autorises</li>
                <li>Ne pas copier, modifier ou distribuer le logiciel</li>
                <li>Maintenir la securite de votre compte et de vos identifiants</li>
                <li>Respecter les droits de propriete intellectuelle de Stock-up241</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Propriete intellectuelle</h2>
              <p className="text-muted-foreground">
                L&apos;ensemble des elements constituant la plateforme Stock-up241 (logiciel, design,
                textes, graphismes, logos, algorithmes) sont proteges par le droit de la propriete
                intellectuelle et restent la propriete exclusive de Stock-up241.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Disponibilite du service</h2>
              <p className="text-muted-foreground">
                Nous nous efforcons d&apos;assurer une disponibilite continue de notre plateforme.
                Toutefois, nous ne pouvons garantir l&apos;absence d&apos;interruptions liees a la
                maintenance, aux mises a jour ou a des circonstances exceptionnelles.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Limitation de responsabilite</h2>
              <p className="text-muted-foreground">
                Stock-up241 ne saurait etre tenu responsable des dommages indirects resultant de
                l&apos;utilisation ou de l&apos;impossibilite d&apos;utilisation du service. Notre responsabilite
                totale est limitee au montant des frais d&apos;abonnement payes au cours des 12 derniers mois.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">9. Resiliation</h2>
              <p className="text-muted-foreground">
                Vous pouvez resilier votre abonnement a tout moment depuis votre espace client.
                La resiliation prend effet a la fin de la periode d&apos;abonnement en cours. Nous
                nous reservons le droit de suspendre ou de resilier votre compte en cas de
                violation des presentes CGU.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">10. Modifications des CGU</h2>
              <p className="text-muted-foreground">
                Nous nous reservons le droit de modifier les presentes CGU a tout moment. Les
                modifications entreront en vigueur des leur publication sur notre site.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">11. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question relative aux presentes CGU, veuillez nous contacter a
                l&apos;adresse suivante : contact@pondzi.app
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Stock-up241. Tous droits reserves.
          </p>
        </div>
      </footer>
    </>
  )
}
