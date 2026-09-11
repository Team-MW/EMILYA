import { BookButton } from "./BookButton";
import type { Category } from "@/lib/services";

export function ServiceList({ category }: { category: Category }) {
  return (
    <article id={category.id} className="scroll-mt-28">
      <p className="text-[10px] uppercase tracking-[0.38em] text-gold">{category.subtitle}</p>
      <h3 className="mt-2 font-display text-3xl text-ink">{category.title}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-taupe">{category.description}</p>
      <ul className="mt-8 divide-y divide-gold/20 border-y border-gold/20">
        {category.services.map((service) => (
          <li
            key={`${service.name}-${service.duration}`}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-xl text-ink">{service.name}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-taupe">
                {service.duration}
                {service.note ? ` · ${service.note}` : ""}
              </p>
            </div>
            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <p className="font-display text-2xl text-bronze">{service.price}</p>
              <BookButton className="!px-5 !py-2">Choisir</BookButton>
            </div>
          </li>
        ))}
      </ul>
      {category.footnote ? (
        <p className="mt-4 text-xs leading-6 text-taupe">{category.footnote}</p>
      ) : null}
    </article>
  );
}
