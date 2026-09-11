import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emilyaparis.fr"),
  title: {
    default: "Emilya Paris — The Art of Wellness",
    template: "%s — Emilya Paris",
  },
  description:
    "Institut de massage professionnel et de bien-être à Paris 17e, Porte de Champerret. Soins sur-mesure, rituels spa, Head Spa, drainage et expériences signature.",
  openGraph: {
    title: "Emilya Paris — The Art of Wellness",
    description:
      "Massage professionnel, rituels de bien-être et soins visage dans un écrin confidentiel au cœur de Paris.",
    locale: "fr_FR",
    type: "website",
    images: ["/images/accueil.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.fullName,
  description: metadata.description,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 Rue Descombes",
    addressLocality: "Paris",
    postalCode: "75017",
    addressCountry: "FR",
  },
  url: site.planity,
  image: "/images/accueil.jpg",
  openingHours: "Mo-Su 14:00-00:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${cinzel.variable} ${cormorant.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
