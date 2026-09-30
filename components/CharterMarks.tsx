export const charterIcons = [
  {
    title: "Pas de body body",
    caption: "No body-to-body massage",
    icon: BodyIcon,
  },
  {
    title: "Pas de naturiste",
    caption: "No naturist massage",
    icon: NaturistIcon,
  },
  {
    title: "Pas de finition",
    caption: "No “happy ending”",
    icon: HandsIcon,
  },
  {
    title: "Pas de tantrique",
    caption: "No tantric massage",
    icon: LotusBanIcon,
  },
  {
    title: "Pas de prestations à caractère sexuel",
    caption: "18+ · No sexual services",
    icon: AgeIcon,
  },
] as const;

function Ban({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-bronze" fill="none" aria-hidden="true">
      {children}
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 14 50 50" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BodyIcon() {
  return (
    <Ban>
      <path
        d="M24 40c0-4 3-6 8-6s8 2 8 6M26 26a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </Ban>
  );
}

function NaturistIcon() {
  return (
    <Ban>
      <path
        d="M32 22c3 0 5 2.2 5 5s-2 5-5 5-5-2.2-5-5 2-5 5-5Zm-8 28c1.5-8 5-12 8-12s6.5 4 8 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </Ban>
  );
}

function HandsIcon() {
  return (
    <Ban>
      <path
        d="M24 38c2-6 4-10 8-10s6 4 8 10M28 30c0-4 8-4 8 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </Ban>
  );
}

function LotusBanIcon() {
  return (
    <Ban>
      <path
        d="M32 42c-4-4-9-9-9-14 0-4 4-7 9-7s9 3 9 7c0 5-5 10-9 14Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </Ban>
  );
}

function AgeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-bronze" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="1.4" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fill="currentColor"
        fontSize="13"
        fontFamily="serif"
      >
        18+
      </text>
    </svg>
  );
}

export function CharterMarks() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
      {charterIcons.map(({ title, icon: Icon }) => (
        <div key={title} className="flex flex-col items-center gap-3 text-center">
          <Icon />
          <p className="max-w-[9.5rem] text-[11px] uppercase leading-4 tracking-[0.14em] text-ink">
            {title === "Pas de finition" ? (
              <>
                Pas de <span className="line-through">finition</span>
              </>
            ) : (
              title
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
