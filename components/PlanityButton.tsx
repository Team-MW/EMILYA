import { site } from "@/lib/site";
import Image from "next/image";

type Props = {
  className?: string;
  variant?: "solid" | "outline" | "light";
};

export function PlanityButton({ className = "", variant = "solid" }: Props) {
  // variant "outline" or "light" are used on dark backgrounds in this site
  const isDarkBg = variant === "outline" || variant === "light";

  return (
    <a
      href={site.planity}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center transition-transform hover:scale-105 hover:opacity-80 ${className}`}
    >
      <Image
        src="/planity_logo.jpg"
        alt="Réserver sur Planity"
        width={120}
        height={40}
        className={`h-7 sm:h-9 w-auto object-contain ${
          isDarkBg ? "invert mix-blend-screen" : "mix-blend-multiply"
        }`}
      />
    </a>
  );
}
