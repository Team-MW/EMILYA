import Image from "next/image";
import { Lotus } from "./Logo";

export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night pt-28 text-ivory sm:pt-32">
      <Image
        src="/images/cabine.jpg"
        alt=""
        fill
        className="object-cover object-[60%_70%] opacity-60"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/45 to-ivory" />
      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20">
        <p className="text-[10px] uppercase tracking-[0.42em] text-gold">{kicker}</p>
        <h1 className="mt-5 font-display text-4xl font-light sm:text-6xl text-balance">{title}</h1>
        <div className="mt-6 flex justify-center">
          <Lotus className="h-7 w-7 text-gold" />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ivory/85 sm:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}
