import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { FaqSection } from "@/components/FaqSection";
import { OrnamentCorners } from "@/components/Ornaments";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réserver un soin Emilya à Paris 17e. 19 Rue Descombes, Porte de Champerret. Téléphone, WhatsApp et Planity.",
};

const details = [
  { label: "Adresse", value: site.address, href: "https://maps.google.com/?q=19+Rue+Descombes+75017+Paris" },
  { label: "Quartier", value: site.area },
  { label: "Téléphone", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { label: "Horaires", value: `${site.hours} · ${site.hoursNote}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Rendez-vous"
        title="Réserver votre moment"
        text="Par téléphone, WhatsApp ou Planity. Confirmation immédiate, sur rendez-vous uniquement."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="card-lux relative p-8 sm:p-10">
          <OrnamentCorners />
          <p className="text-[10px] uppercase tracking-[0.38em] text-gold">Le salon</p>
          <h2 className="mt-3 font-display text-4xl text-ink">Emilya Paris</h2>
          <ul className="mt-8 space-y-6">
            {details.map((item) => (
              <li key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-lg text-ink hover:text-bronze"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg text-ink">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookButton>WhatsApp</BookButton>
            <BookButton href={site.planity} className="!bg-transparent !text-ink ring-1 ring-ink/20">
              Réserver sur Planity
            </BookButton>
          </div>
        </div>

        <div className="img-frame relative min-h-[420px] overflow-hidden bg-cream">
          <Image
            src="/images/accueil.jpg"
            alt="Le studio Emilya, 19 Rue Descombes à Paris 17e"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/10 to-transparent" />
          <a
            href="https://maps.google.com/?q=19+Rue+Descombes+75017+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 z-10 rounded-full bg-ivory px-5 py-2 text-[10px] uppercase tracking-[0.22em] text-night"
          >
            Itinéraire
          </a>
        </div>
      </section>

      <FaqSection items={faqs.contact} />
    </>
  );
}
