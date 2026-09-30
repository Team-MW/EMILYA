import Link from "next/link";
import { nav, site } from "@/lib/site";
import { PlanityButton } from "./PlanityButton";
import { Logo, Lotus } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-night text-ivory">
      <div className="absolute inset-x-0 -top-px flex justify-center">
        <span className="flex h-6 w-6 rotate-45 items-center justify-center border border-gold/40 bg-night">
          <span className="h-1.5 w-1.5 bg-gold" />
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo tone="light" size="md" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/70">
            Massage professionnel et rituels de bien-être dans un écrin confidentiel
            au cœur du 17<sup>e</sup> arrondissement. Relax. Recharge. Reconnect.
          </p>
          <div className="mt-8">
            <PlanityButton variant="light" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">Explorer</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">Le salon</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-ivory/75">
            <li>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ivory"
              >
                {site.address}
              </a>
            </li>
            <li>{site.area}</li>
            <li>{site.hours}</li>
            <li>{site.hoursNote}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-ivory">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-6 text-[10px] uppercase tracking-[0.22em] text-ivory/45 sm:flex-row sm:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <p>© {new Date().getFullYear()} Emilya Paris</p>
            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="transition-colors hover:text-ivory">Mentions légales</Link>
              <span className="text-ivory/20">|</span>
              <Link href="/confidentialite" className="transition-colors hover:text-ivory">Confidentialité</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <p className="flex items-center gap-2">
              <Lotus className="h-4 w-4 text-gold" />
              Bien-être · Relâchement · Équilibre
            </p>
            <span className="hidden text-ivory/20 sm:inline">|</span>
            <p>
              Réalisé par{" "}
              <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-gold transition-colors">
                Microdidact
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
