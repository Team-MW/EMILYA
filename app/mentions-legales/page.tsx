import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mentions Légales",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        kicker="Informations"
        title="Mentions Légales"
        text="Retrouvez toutes les informations légales concernant le site Emilya Paris."
      />
      <section className="mx-auto max-w-3xl px-6 py-20 text-sm leading-8 text-taupe sm:py-28">
        <h2 className="mb-4 font-display text-2xl text-ink">Éditeur du site</h2>
        <p className="mb-8">
          Le site Emilya Paris est édité par l'entreprise Emilya.<br />
          Adresse : 19 Rue Descombes, 75017 Paris<br />
          Email : contact@emilyaparis.fr
        </p>
        
        <h2 className="mb-4 font-display text-2xl text-ink">Hébergement</h2>
        <p className="mb-8">
          Ce site est hébergé par Vercel Inc.<br />
          340 S Lemon Ave #4133 Walnut, CA 91789, USA
        </p>

        <h2 className="mb-4 font-display text-2xl text-ink">Création et conception</h2>
        <p className="mb-8">
          Ce site a été conçu et réalisé par <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="text-ink underline">Microdidact</a>.
        </p>
      </section>
    </>
  );
}
