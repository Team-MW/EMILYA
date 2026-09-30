import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        kicker="Protection des données"
        title="Politique de Confidentialité"
        text="Votre vie privée est importante pour nous. Découvrez comment nous gérons vos données."
      />
      <section className="mx-auto max-w-3xl px-6 py-20 text-sm leading-8 text-taupe sm:py-28">
        <h2 className="mb-4 font-display text-2xl text-ink">Collecte des données</h2>
        <p className="mb-8">
          Nous collectons uniquement les informations nécessaires au bon déroulement de vos réservations et de votre expérience au sein du salon Emilya Paris. Ces informations incluent généralement votre nom, prénom, adresse email et numéro de téléphone, recueillies via notre plateforme partenaire Planity.
        </p>

        <h2 className="mb-4 font-display text-2xl text-ink">Utilisation des données</h2>
        <p className="mb-8">
          Vos données sont utilisées exclusivement pour :
        </p>
        <ul className="mb-8 list-disc space-y-2 pl-5">
          <li>Confirmer et gérer vos rendez-vous</li>
          <li>Vous contacter en cas de besoin concernant votre prestation</li>
          <li>Vous informer de nos actualités (uniquement si vous y avez expressément consenti)</li>
        </ul>

        <h2 className="mb-4 font-display text-2xl text-ink">Partage et sécurité</h2>
        <p className="mb-8">
          Nous ne vendons ni ne louons vos données personnelles à des tiers. Les informations de réservation sont traitées de manière sécurisée par notre plateforme partenaire Planity, qui applique ses propres politiques de sécurité rigoureuses et conformes au RGPD.
        </p>

        <h2 className="mb-4 font-display text-2xl text-ink">Vos droits</h2>
        <p className="mb-8">
          Conformément à la réglementation (notamment le RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, vous pouvez nous contacter par email à <a href="mailto:contact@emilyaparis.fr" className="text-ink underline">contact@emilyaparis.fr</a>.
        </p>
      </section>
    </>
  );
}
