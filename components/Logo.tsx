export function Lotus({
  className = "h-6 w-6",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 54c-7.5-6.2-18-16.4-18-27.2C14 18.2 21.2 12 32 12c10.8 0 18 6.2 18 14.8C50 37.6 39.5 47.8 32 54Z"
        stroke={stroke}
        strokeWidth="1.4"
      />
      <path
        d="M32 54c-4.8-10.8-6.6-22.4-4.2-33.6M32 54c4.8-10.8 6.6-22.4 4.2-33.6M14.5 28.5c6.8 1.4 14.2 1.4 17.5-6.2M49.5 28.5c-6.8 1.4-14.2 1.4-17.5-6.2"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 46c4.2-3.6 8.6-5.4 12-5.4s7.8 1.8 12 5.4"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  size = "md",
  withTagline = true,
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}) {
  const color = tone === "light" ? "text-ivory" : "text-ink";
  const title =
    size === "lg"
      ? "text-[42px] sm:text-6xl tracking-[0.28em]"
      : size === "sm"
        ? "text-[17px] tracking-[0.32em]"
        : "text-[20px] sm:text-[22px] tracking-[0.34em]";
  const paris =
    size === "lg"
      ? "text-[11px] tracking-[0.62em] mt-3"
      : "text-[9px] tracking-[0.55em] mt-1.5";

  return (
    <span className={`inline-flex flex-col items-center ${color}`}>
      <span className={`font-cinzel font-medium leading-none ${title}`}>
        EMILYA
      </span>
      <span className={`font-cinzel uppercase ${paris}`}>Paris</span>
      {withTagline ? (
        <span className="mt-2.5 flex items-center gap-3 text-[9px] uppercase tracking-[0.38em] text-gold">
          <span className="h-px w-7 bg-gold/70" />
          The Art of Wellness
          <span className="h-px w-7 bg-gold/70" />
        </span>
      ) : null}
    </span>
  );
}
