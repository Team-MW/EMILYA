import { site } from "@/lib/site";
import Image from "next/image";

type Props = {
  className?: string;
  variant?: "solid" | "outline" | "light";
};

export function PlanityButton({ className = "", variant = "solid" }: Props) {
  const styles =
    variant === "outline"
      ? "border border-ivory/80 text-ivory hover:bg-ivory hover:text-night"
      : variant === "light"
        ? "bg-ivory text-night hover:bg-cream"
        : "bg-night text-ivory hover:bg-ink";

  return (
    <a
      href={site.planity}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 ${styles} ${className}`}
    >
      <span>Réserver sur</span>
      <Image
        src="/planity_logo.jpg"
        alt="Planity"
        width={60}
        height={20}
        className="h-5 w-auto object-contain mix-blend-multiply"
      />
    </a>
  );
}
