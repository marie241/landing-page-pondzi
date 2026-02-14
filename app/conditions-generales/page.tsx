import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Generales d'Utilisation - Pondzi App",
  description: "Consultez les conditions generales d'utilisation de Pondzi App.",
}

export default function ConditionsGenerales() {
  return (
    <>
      <header className="bg-dark py-6">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-lg text-dark-foreground">Pondzi App</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-dark-foreground/70 hover:text-dark-foreground transition-colors"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Conditions Generales d&apos;Utilisation
          </h1>
          <p className="text-muted-foreground mb-8">
            Derniere mise a jour : Fevrier 2026
          </p>

          <div className="flex flex-col gap-8 text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">1. Objet</h2>
              <p className="text-muted-foreground">
                Les presentes Conditions Generales d&apos;Utilisation (CGU) regissent l&apos;utilisation
                de la plateforme Pondzi App, un service de gestion de stock en ligne destine aux
                entreprises et commercants. En accedant a notre plateforme, vous acceptez d&apos;etre
                lie par les presentes CGU.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">2. Description du service</h2>
              <p className="text-muted-foreground">
                Pondzi App offre une solution SaaS (Software as a Service) de gestion de stock
                comprenant : le suivi des inventaires en temps reel, les previsions de
                reapprovisionnement assistees par intelligence artificielle, les alertes
                automatiques, la generation de rapports et statistiques, et la gestion
                multi-utilisateurs.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">3. Inscription et compte</h2>
              <p className="text-muted-foreground">
                Pour utiliser Pondzi App, vous devez creer un compte en fournissant des informations
                exactes et completes. Vous etes responsable de la confidentialite de vos identifiants
                de connexion et de toutes les activites effectuees sous votre compte. Vous vous
                engagez a nous informer immediatement de toute utilisation non autorisee.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">4. Tarification et paiement</h2>
              <p className="text-muted-foreground mb-3">
                Pondzi App propose deux formules d&apos;abonnement :
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
              <h2 className="font-heading text-xl font-semibold mb-3">5. Obligations de l&apos;utilisateur</h2>
              <p className="text-muted-foreground mb-3">
                En utilisant Pondzi App, vous vous engagez a :
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Utiliser le service conformement aux lois en vigueur</li>
                <li>Ne pas tenter d&apos;acceder a des systemes ou donnees non autorises</li>
                <li>Ne pas copier, modifier ou distribuer le logiciel</li>
                <li>Maintenir la securite de votre compte et de vos identifiants</li>
                <li>Respecter les droits de propriete intellectuelle de Pondzi App</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">6. Propriete intellectuelle</h2>
              <p className="text-muted-foreground">
                L&apos;ensemble des elements constituant la plateforme Pondzi App (logiciel, design,
                textes, graphismes, logos, algorithmes) sont proteges par le droit de la propriete
                intellectuelle et restent la propriete exclusive de Pondzi App. Aucune licence
                ou droit de reproduction n&apos;est accorde en dehors de l&apos;utilisation normale du service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">7. Disponibilite du service</h2>
              <p className="text-muted-foreground">
                Nous nous efforcons d&apos;assurer une disponibilite continue de notre plateforme.
                Toutefois, nous ne pouvons garantir l&apos;absence d&apos;interruptions liees a la
                maintenance, aux mises a jour ou a des circonstances exceptionnelles. Nous vous
                informerons dans la mesure du possible de toute interruption programmee.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">8. Limitation de responsabilite</h2>
              <p className="text-muted-foreground">
                Pondzi App ne saurait etre tenu responsable des dommages indirects resultant de
                l&apos;utilisation ou de l&apos;impossibilite d&apos;utilisation du service, y compris les pertes
                de donnees, les pertes de revenus ou les interruptions d&apos;activite. Notre responsabilite
                totale est limitee au montant des frais d&apos;abonnement payes au cours des 12 derniers mois.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">9. Resiliation</h2>
              <p className="text-muted-foreground">
                Vous pouvez resilier votre abonnement a tout moment depuis votre espace client.
                La resiliation prend effet a la fin de la periode d&apos;abonnement en cours. Nous
                nous reservons le droit de suspendre ou de resilier votre compte en cas de
                violation des presentes CGU.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">10. Modifications des CGU</h2>
              <p className="text-muted-foreground">
                Nous nous reservons le droit de modifier les presentes CGU a tout moment. Les
                modifications entreront en vigueur des leur publication sur notre site. L&apos;utilisation
                continue du service apres la publication des modifications vaut acceptation des
                nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">11. Contact</h2>
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
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Pondzi App. Tous droits reserves.
          </p>
        </div>
      </footer>
    </>
  )
}
