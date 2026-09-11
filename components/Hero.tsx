import Image from "next/image";
import { Logo, Lotus } from "./Logo";
import { BookButton } from "./BookButton";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-end overflow-hidden bg-night text-ivory">
      <Image
        src="/images/cabine.jpg"
        alt="Cabine de massage Emilya, lumières de bougies et linge brodé"
        fill
        priority
        className="kenburns object-cover object-[58%_72%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/25 to-night/80" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-16 pt-32 text-center sm:px-6 sm:pb-20">
        <p className="rise text-[10px] uppercase tracking-[0.48em] text-ivory/70">
          Paris 17e · Porte de Champerret
        </p>
        <div className="rise mt-8" style={{ animationDelay: "180ms" }}>
          <Logo tone="light" size="lg" />
        </div>
        <Lotus className="rise mt-8 h-8 w-8 text-gold" />
        <h1
          className="rise mt-8 w-full min-w-0 max-w-xl font-display text-[1.75rem] font-light leading-[1.25] sm:max-w-2xl sm:text-5xl"
          style={{ animationDelay: "280ms" }}
        >
          L&apos;art du toucher,
          <br />
          une expérience unique,
          <br />
          conçue pour vous.
        </h1>
        <p
          className="rise mt-5 w-full min-w-0 max-w-md text-sm leading-7 text-ivory/80 sm:max-w-xl sm:text-base"
          style={{ animationDelay: "380ms" }}
        >
          Massage professionnel, rituels spa et soins visage.
          <br />
          Bien-être, relâchement, équilibre.
        </p>
        <div
          className="rise mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "480ms" }}
        >
          <BookButton variant="outline" href="/soins">
            Découvrir
          </BookButton>
          <BookButton variant="light">Réserver</BookButton>
        </div>
        <div className="mt-14 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ivory/60">
          <span>Scroll</span>
          <span className="scroll-line h-10 w-px bg-ivory" />
        </div>
      </div>
    </section>
  );
}
