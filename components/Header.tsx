"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { PlanityButton } from "./PlanityButton";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;
  const tone = solid ? "dark" : "light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-ivory/92 shadow-[0_1px_0_rgba(176,141,87,0.18)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" aria-label="Emilya Paris, accueil" className="shrink-0">
            <Logo tone={tone} size="sm" withTagline={false} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] uppercase tracking-[0.26em] transition-colors ${
                  pathname === item.href
                    ? "text-gold"
                    : solid
                      ? "text-ink/75 hover:text-ink"
                      : "text-ivory/85 hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <PlanityButton
              className="hidden sm:inline-flex"
              variant={solid ? "solid" : "outline"}
            />
            <button
              type="button"
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border lg:hidden ${
                solid ? "border-ink/20 text-ink" : "border-ivory/70 text-ivory"
              }`}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-[16px] flex-col gap-[5px]">
                <span
                  className={`h-[1.5px] w-full bg-current transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ivory transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-4xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          <PlanityButton className="mt-4" />
        </nav>
      </div>
    </>
  );
}
