import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo, Lotus } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo tone="light" size="md" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/70">
            Massage professionnel et rituels de bien-être dans un écrin confidentiel
            au cœur du 17<sup>e</sup> arrondissement. Relax. Recharge. Reconnect.
          </p>
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
            <li>{site.address}</li>
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-[11px] uppercase tracking-[0.22em] text-ivory/45 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Emilya Paris</p>
          <p className="flex items-center gap-2">
            <Lotus className="h-4 w-4 text-gold" />
            Bien-être · Relâchement · Équilibre
          </p>
        </div>
      </div>
    </footer>
  );
}
