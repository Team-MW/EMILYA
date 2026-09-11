export function SectionHeading({
  kicker,
  title,
  text,
  align = "center",
}: {
  kicker: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  const aligned = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${aligned}`}>
      <p className="text-[10px] uppercase tracking-[0.42em] text-gold">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-light text-ink sm:text-5xl">{title}</h2>
      <span className="gold-rule mt-5" />
      {text ? (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-taupe sm:text-base">{text}</p>
      ) : null}
    </div>
  );
}
