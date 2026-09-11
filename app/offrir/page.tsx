import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { Lotus } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { boxes } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offrir",
  description:
    "Cartes cadeaux, Sanctuary Box et événements sur-mesure Emilya Paris. Le cadeau idéal, valable 6 mois.",
};

export default function OffrirPage() {
  return (
    <>
      <PageHero
        kicker="Le cadeau"
        title="Offrir un moment Emilya"
        text="Offrez ou offrez-vous un coffret bien-être Emilya. Le cadeau idéal pour toutes les occasions, valable 6 mois."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {boxes.map((box) => (
            <article
              key={box.name}
              className="flex flex-col border border-gold/25 bg-ivory px-8 py-10 text-center"
            >
              <Lotus className="mx-auto h-8 w-8 text-gold" />
              <h2 className="mt-5 font-display text-3xl text-ink">{box.name}</h2>
              <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-gold">
                {box.detail}
              </p>
              <p className="mt-5 flex-1 text-sm leading-7 text-taupe">{box.description}</p>
              <div className="mt-8">
                <BookButton>Offrir ce coffret</BookButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="border border-gold/25 bg-cream/40 p-8 sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.38em] text-gold">Occasions</p>
            <h3 className="mt-3 font-display text-3xl text-ink">
              Événements & cartes cadeaux
            </h3>
            <p className="mt-5 text-sm leading-8 text-taupe">
              Anniversaire, Saint-Valentin, fête des mères, attention pour une sœur, une
              amie, une maman. Pétales, décoration de cabine, cadeau personnalisé et
              ambiance cocooning : je prépare tout pour rendre ce moment inoubliable.
            </p>
          </article>
          <article className="border border-gold/25 bg-ivory p-8 sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.38em] text-gold">À venir</p>
            <h3 className="mt-3 font-display text-3xl text-ink">Formations Emilya</h3>
            <p className="mt-5 text-sm leading-8 text-taupe">
              Formations professionnelles en massages et soins bien-être. Massages,
              soins visage, drainage & sculpt, Head Spa. Ouverture prochaine — restez
              connectés pour découvrir nos dates et programmes.
            </p>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-taupe">
            Pour un événement sur-mesure, contactez-nous au{" "}
            <a href={`tel:${site.phone}`} className="text-ink underline decoration-gold/40">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
