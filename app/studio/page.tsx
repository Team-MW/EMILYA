import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { OrnamentCorners } from "@/components/Ornaments";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Le Studio",
  description:
    "Le studio Emilya à Paris 17e, Porte de Champerret : un espace confidentiel, feutré et raffiné. Déplacements à domicile et à l'hôtel.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        kicker="Le lieu"
        title="Le studio vous accueille"
        text="Un espace confidentiel et raffiné au cœur de Paris 17e. Ambiance chaleureuse, design épuré et équipement haut de gamme pour une expérience inoubliable."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="img-frame relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/accueil.jpg"
              alt="Réception Emilya, lettres dorées et lumière douce"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="img-frame relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/cabine.jpg"
              alt="Cabine de soin aux bougies, table de massage brodée Emilya"
              fill
              className="object-cover object-[60%_80%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-2">
        <article className="card-lux relative p-8 sm:p-10">
          <OrnamentCorners />
          <p className="text-[10px] uppercase tracking-[0.38em] text-gold">Au salon</p>
          <h2 className="mt-3 font-display text-3xl text-ink">Mon salon vous accueille</h2>
          <p className="mt-5 text-sm leading-8 text-taupe">
            Situé à {site.area}, le studio Emilya est pensé comme une parenthèse. Lumières
            feutrées, matières naturelles, linge brodé et silence. Chaque détail est
            choisi pour que vous puissiez vous relâcher pleinement, en toute confiance.
          </p>
          <p className="mt-4 text-sm leading-8 text-taupe">
            {site.address}
            <br />
            {site.hours} · {site.hoursNote}
          </p>
        </article>
        <article className="card-lux relative p-8 sm:p-10">
          <OrnamentCorners />
          <p className="text-[10px] uppercase tracking-[0.38em] text-gold">Hors les murs</p>
          <h2 className="mt-3 font-display text-3xl text-ink">Déplacement à domicile</h2>
          <p className="mt-5 text-sm leading-8 text-taupe">
            Je me déplace chez vous : à domicile, à l&apos;hôtel, ou au lieu de votre choix.
            Table professionnelle, linge Emilya et rituel complet. Tarif ajusté selon la
            distance et le périmètre.
          </p>
          <div className="mt-8">
            <BookButton>Demander un déplacement</BookButton>
          </div>
        </article>
      </section>

      <FaqSection items={faqs.studio} />
    </>
  );
}
