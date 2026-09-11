import { site } from "@/lib/site";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
};

export function BookButton({
  href = site.whatsapp,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const styles =
    variant === "outline"
      ? "border border-ivory/80 text-ivory hover:bg-ivory hover:text-night"
      : variant === "light"
        ? "bg-ivory text-night hover:bg-cream"
        : "bg-night text-ivory hover:bg-ink";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
