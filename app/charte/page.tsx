import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { CharterMarks } from "@/components/CharterMarks";
import { FaqSection } from "@/components/FaqSection";
import { OrnamentCorners } from "@/components/Ornaments";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Charte professionnelle",
  description:
    "Emilya Paris est exclusivement dédié au bien-être, à la détente et au soulagement des tensions musculaires. Cadre professionnel, respectueux et sécurisé.",
};

export default function ChartePage() {
  return (
    <>
      <PageHero
        kicker="Cadre & respect"
        title="Massage professionnel"
        text="Mes prestations sont exclusivement dédiées au bien-être, à la détente et au soulagement des tensions musculaires. Chaque soin est réalisé avec professionnalisme, respect et dans un cadre serein."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <p className="text-[11px] uppercase tracking-[0.32em] text-taupe">
          Bien-être · Relâchement · Équilibre
        </p>
        <div className="mt-14">
          <CharterMarks />
        </div>

        <div className="card-lux relative mx-auto mt-16 max-w-2xl space-y-6 px-8 py-10 text-sm leading-8 text-taupe">
          <OrnamentCorners />
          <p>
            Tout comportement inapproprié entraînera l&apos;arrêt immédiat de la séance,{" "}
            <span className="font-medium text-ink">sans remboursement</span>.
          </p>
          <p>
            Merci de respecter ces conditions afin que chacun puisse profiter d&apos;une
            expérience bien-être de qualité, dans un cadre professionnel et sécurisé.
          </p>
        </div>

        <p className="mt-12 text-[11px] uppercase tracking-[0.32em] text-taupe">
          Merci pour votre compréhension et votre respect
        </p>
        <p className="font-script mt-4 text-4xl text-ink">L&apos;équipe Emilya</p>
        <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-gold">
          Relax · Recharge · Reconnect
        </p>
        <div className="mt-10">
          <BookButton href="/soins">Découvrir les soins</BookButton>
        </div>
      </section>

      <FaqSection items={faqs.charte} />
    </>
  );
}
