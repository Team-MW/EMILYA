import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { OrnamentCorners } from "@/components/Ornaments";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceList";
import { faqs } from "@/lib/faq";
import { categories, extras } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soins & rituels",
  description:
    "Carte des soins Emilya Paris : massages sur-mesure, rituels spa, ventouses, soins visage, Head Spa, drainage, formules duo et expériences signature.",
};

export default function SoinsPage() {
  return (
    <>
      <PageHero
        kicker="La carte"
        title="Soins & rituels"
        text="Des protocoles professionnels pour relâcher les tensions, retrouver l'équilibre et se reconnecter à soi. Chaque soin inclut 10 minutes de prise en charge."
      />

      <div className="sticky top-[68px] z-30 border-b border-gold/20 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-taupe sm:px-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="whitespace-nowrap transition hover:text-ink"
            >
              {category.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-24 px-6 py-20 sm:py-28">
        {categories.map((category) => (
          <ServiceList key={category.id} category={category} />
        ))}

        <section>
          <p className="text-[10px] uppercase tracking-[0.38em] text-gold">Personnaliser</p>
          <h3 className="mt-2 font-display text-3xl text-ink">
            Options & rituels complémentaires
          </h3>
          <ul className="mt-8 divide-y divide-gold/20 border-y border-gold/20">
            {extras.map((extra) => (
              <li
                key={extra.name}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-xl text-ink">{extra.name}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-taupe">
                    {extra.detail}
                  </p>
                </div>
                <p className="font-display text-2xl text-bronze">{extra.price}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="card-lux relative px-8 py-12 text-center">
          <OrnamentCorners />
          <p className="font-display text-3xl text-ink">Réservez votre moment</p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-taupe">
            Par téléphone, WhatsApp ou Planity. Confirmation immédiate, sur rendez-vous
            uniquement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <BookButton>WhatsApp</BookButton>
            <BookButton href={site.planity} className="!bg-transparent !text-ink ring-1 ring-ink/20">
              Planity
            </BookButton>
          </div>
        </div>
      </div>

      <FaqSection items={faqs.soins} />
    </>
  );
}
