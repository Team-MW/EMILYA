import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { PlanityButton } from "@/components/PlanityButton";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { Lotus } from "@/components/Logo";
import { OrnamentCorners } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CharterMarks } from "@/components/CharterMarks";
import { faqs } from "@/lib/faq";
import { categories, pillars } from "@/lib/services";
import { site } from "@/lib/site";

const featured = categories.filter((c) =>
  ["sur-mesure", "rituels", "visage", "signature"].includes(c.id),
);

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="overflow-hidden border-y border-gold/20 bg-cream/60 py-4">
        <div className="marquee-track flex w-max gap-10 text-[11px] uppercase tracking-[0.38em] text-taupe">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              Wellness <Lotus className="h-4 w-4 text-gold" /> Relaxation{" "}
              <Lotus className="h-4 w-4 text-gold" /> Balance
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold">
            Prendre soin de vous en toute confiance
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-snug text-ink sm:text-5xl">
            Mes prestations sont exclusivement dédiées au bien-être, à la détente
            et au soulagement des tensions musculaires.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-taupe sm:text-base">
            Chaque soin est réalisé avec professionnalisme, respect et dans un cadre
            serein. Un échange préalable permet de créer le protocole adapté à vos
            besoins du jour — aucune technique figée, juste vous, ici et maintenant.
          </p>
          <div className="mt-10 flex justify-center">
            <span className="font-script text-4xl text-gold/80">The Art of Wellness</span>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream/50 px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <article className="card-lux relative px-7 py-10 text-center">
                <OrnamentCorners />
                <Lotus className="mx-auto h-8 w-8 text-gold" />
                <h3 className="mt-5 font-display text-2xl text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-taupe">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          kicker="La carte"
          title="Des rituels pensés pour vous"
          text="Massages sur-mesure, rituels du monde, Head Spa, drainage et expériences signature. Chaque séance commence par 10 minutes de prise en charge."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((category, i) => (
            <Reveal key={category.id} delay={i * 80}>
              <Link
                href={`/soins#${category.id}`}
                className="card-lux group relative flex h-full flex-col p-8 hover:bg-cream/30"
              >
                <OrnamentCorners />
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  {category.subtitle}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink group-hover:text-bronze">
                  {category.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-taupe">
                  {category.description}
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-ink">
                  À partir de {category.services[0]?.price} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <BookButton href="/soins">Voir toute la carte</BookButton>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] img-frame">
          <Image
            src="/images/accueil.jpg"
            alt="Accueil du studio Emilya, comptoir cannelé et lettres dorées"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-night px-8 py-16 text-ivory sm:px-14">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.42em] text-gold">Le studio</p>
            <h2 className="mt-4 font-display text-4xl font-light sm:text-5xl">
              Un écrin confidentiel à Porte de Champerret
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-ivory/75">
              Un espace confidentiel et raffiné au cœur de Paris 17e. Ambiance
              feutrée, design épuré et équipement haut de gamme pour une expérience
              inoubliable. Je me déplace aussi à domicile, à l&apos;hôtel, ou où vous
              le souhaitez.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookButton href="/studio" variant="outline">
                Découvrir le lieu
              </BookButton>
              <BookButton href="/contact" variant="light">
                Venir au salon
              </BookButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold">
            Cadre professionnel
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-ink sm:text-5xl">
            Massage professionnel
          </h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-taupe">
            Bien-être · Relâchement · Équilibre
          </p>
          <div className="mt-12">
            <CharterMarks />
          </div>
          <p className="mx-auto mt-10 max-w-2xl rounded-sm border border-gold/20 bg-cream px-6 py-5 text-sm leading-7 text-taupe">
            Tout comportement inapproprié entraînera l&apos;arrêt immédiat de la séance,
            sans remboursement.
          </p>
          <div className="mt-8">
            <Link
              href="/charte"
              className="text-[11px] uppercase tracking-[0.28em] text-bronze underline decoration-gold/40 underline-offset-8"
            >
              Lire la charte complète
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-24 text-center text-ivory sm:py-32">
        <Image
          src="/images/cabine.jpg"
          alt=""
          fill
          className="object-cover object-[70%_80%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/70" />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <Lotus className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-6 font-display text-4xl font-light sm:text-5xl">
              Offrez un moment Emilya
            </h2>
            <p className="mt-5 text-sm leading-8 text-ivory/80">
              Sanctuary Box, cartes cadeaux et événements sur-mesure. Le cadeau
              idéal, valable 6 mois, pour toutes les occasions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <BookButton href="/offrir" variant="outline">
                Offrir
              </BookButton>
              <PlanityButton variant="light" />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={faqs.home} />
    </div>
  );
}
