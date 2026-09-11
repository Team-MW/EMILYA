import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 pt-24 text-center">
      <Logo size="md" />
      <h1 className="mt-10 font-display text-4xl text-ink">Page introuvable</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-taupe">
        Cette page n&apos;existe pas. Revenez à l&apos;accueil pour découvrir Emilya Paris.
      </p>
      <a
        href="/"
        className="mt-8 rounded-full bg-night px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-ivory"
      >
        Retour
      </a>
    </div>
  );
}
