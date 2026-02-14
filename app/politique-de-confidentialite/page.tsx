import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialite - Pondzi App",
  description: "Decouvrez comment Pondzi App collecte, utilise et protege vos donnees personnelles.",
}

export default function PolitiqueDeConfidentialite() {
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
            Politique de confidentialite
          </h1>
          <p className="text-muted-foreground mb-8">
            Derniere mise a jour : Fevrier 2026
          </p>

          <div className="flex flex-col gap-8 text-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">
                Pondzi App s&apos;engage a proteger la vie privee de ses utilisateurs. La presente
                politique de confidentialite explique comment nous collectons, utilisons, stockons et
                protegeons vos informations personnelles lorsque vous utilisez notre application de
                gestion de stock et notre site web.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">2. Donnees collectees</h2>
              <p className="text-muted-foreground mb-3">
                Nous collectons les types de donnees suivants :
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Informations d&apos;identification : nom, prenom, adresse email, numero de telephone</li>
                <li>Informations commerciales : nom de l&apos;entreprise, secteur d&apos;activite, adresse</li>
                <li>Donnees d&apos;utilisation : historique de connexion, fonctionnalites utilisees, donnees de stock</li>
                <li>Donnees techniques : adresse IP, type de navigateur, systeme d&apos;exploitation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">3. Utilisation des donnees</h2>
              <p className="text-muted-foreground mb-3">
                Vos donnees sont utilisees pour :
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Fournir et ameliorer nos services de gestion de stock</li>
                <li>Personnaliser votre experience utilisateur</li>
                <li>Generer des previsions et des alertes intelligentes via notre IA</li>
                <li>Communiquer avec vous concernant votre compte et nos services</li>
                <li>Assurer la securite de votre compte et de vos donnees</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">4. Protection des donnees</h2>
              <p className="text-muted-foreground">
                Nous mettons en place des mesures de securite techniques et organisationnelles
                appropriees pour proteger vos donnees personnelles contre tout acces non autorise,
                perte, destruction ou alteration. Vos donnees sont chiffrees en transit et au repos
                sur nos serveurs securises.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">5. Partage des donnees</h2>
              <p className="text-muted-foreground">
                Nous ne vendons jamais vos donnees personnelles a des tiers. Nous pouvons partager
                vos donnees uniquement avec des prestataires de services de confiance qui nous aident
                a exploiter notre plateforme, sous reserve de clauses de confidentialite strictes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">6. Conservation des donnees</h2>
              <p className="text-muted-foreground">
                Vos donnees personnelles sont conservees aussi longtemps que necessaire pour fournir
                nos services ou pour respecter nos obligations legales. En cas de suppression de
                votre compte, vos donnees seront supprimees dans un delai de 30 jours.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">7. Vos droits</h2>
              <p className="text-muted-foreground mb-3">
                Vous disposez des droits suivants concernant vos donnees personnelles :
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-muted-foreground">
                <li>Droit d&apos;acces : obtenir une copie de vos donnees personnelles</li>
                <li>Droit de rectification : corriger vos donnees inexactes</li>
                <li>Droit de suppression : demander la suppression de vos donnees</li>
                <li>Droit d&apos;opposition : vous opposer au traitement de vos donnees</li>
                <li>Droit a la portabilite : recevoir vos donnees dans un format structure</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold mb-3">8. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question relative a cette politique de confidentialite ou pour exercer
                vos droits, veuillez nous contacter a l&apos;adresse suivante : contact@pondzi.app
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
