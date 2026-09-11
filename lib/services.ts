export type Service = {
  name: string;
  duration: string;
  price: string;
  note?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  footnote?: string;
};

export const categories: Category[] = [
  {
    id: "sur-mesure",
    title: "Les soins sur-mesure Emilya",
    subtitle: "Juste vous, ici et maintenant",
    description:
      "Un soin 100 % personnalisé, créé selon vos besoins du jour. Aucune technique figée. Après un échange préalable, le protocole s'adapte à votre corps, vos tensions et votre envie du moment.",
    services: [
      { name: "Soin sur-mesure", duration: "30 min", price: "80 €", note: "+ 10 min de prise en charge" },
      { name: "Soin sur-mesure", duration: "1h", price: "150 €", note: "+ 10 min de prise en charge" },
      { name: "Soin sur-mesure", duration: "1h15", price: "180 €", note: "+ 10 min de prise en charge" },
      { name: "Soin sur-mesure", duration: "1h30", price: "210 €", note: "+ 10 min de prise en charge" },
      { name: "Soin sur-mesure", duration: "2h", price: "270 €", note: "+ 10 min de prise en charge" },
    ],
  },
  {
    id: "rituels",
    title: "Rituels spa traditionnels",
    subtitle: "Massages du monde",
    description:
      "Massages inspirés des traditions ancestrales. Des rituels enveloppants pour lâcher prise et retrouver l'harmonie.",
    services: [
      { name: "Rituel Balinais", duration: "1h15", price: "180 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Hawaïen Lomi-Lomi", duration: "1h15", price: "180 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Relaxant Enveloppant", duration: "1h15", price: "180 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Suédois Sportif", duration: "1h15", price: "180 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel aux Pierres Chaudes", duration: "1h15", price: "190 €", note: "+ 10 min de prise en charge" },
    ],
    footnote: "Durées possibles entre 1h et 1h30 — tarifs de 150 € à 210 € selon le rituel choisi.",
  },
  {
    id: "recuperation",
    title: "Ventouses & techniques de récupération",
    subtitle: "Sport & relâchement profond",
    description:
      "Travail ciblé et profond associant massage manuel et techniques instrumentales pour détoxifier, libérer les tensions et accélérer la récupération.",
    services: [
      { name: "Massage aux Ventouses", duration: "1h", price: "160 €", note: "+ 10 min de prise en charge" },
      { name: "Massage Ventouses & Scraping", duration: "1h15", price: "185 €", note: "+ 10 min de prise en charge" },
      { name: "Récupération Intense Ventouses & Scraping", duration: "1h30", price: "220 €", note: "+ 10 min de prise en charge" },
    ],
    footnote: "Le scraping peut être intégré à chaque soin selon vos besoins.",
  },
  {
    id: "visage",
    title: "Soins visage éclat",
    subtitle: "Purifier, hydrater, révéler",
    description:
      "Des soins experts pour purifier, hydrater et révéler l'éclat naturel de votre peau.",
    services: [
      {
        name: "Coup d'éclat",
        duration: "30 min",
        price: "70 €",
        note: "Nettoyage, gommage doux, masque éclat et soin hydratant",
      },
      {
        name: "Hydrafacial",
        duration: "1h",
        price: "180 €",
        note: "+ 10 min de prise en charge",
      },
    ],
  },
  {
    id: "head-spa",
    title: "Head Spa Emilya",
    subtitle: "L'art du soin du cuir chevelu",
    description:
      "L'art du soin du cuir chevelu et des cheveux. Un rituel de détente profonde et régénérante, de la tête aux épaules.",
    services: [
      { name: "Head Spa Essentiel", duration: "30 min", price: "80 €", note: "+ 10 min de prise en charge" },
      { name: "Head Spa Essentiel", duration: "1h", price: "150 €", note: "+ 10 min de prise en charge" },
      { name: "Head Spa Essentiel", duration: "1h30", price: "210 €", note: "+ 10 min de prise en charge" },
      { name: "Head Spa Signature", duration: "1h30", price: "Sur demande", note: "Rituel complet & premium" },
    ],
  },
  {
    id: "drainage",
    title: "Drainage lymphatique & sculpt",
    subtitle: "Alléger, affiner, harmoniser",
    description:
      "Stimulez la circulation lymphatique, diminuez les toxines, affinez et sculptez votre silhouette.",
    services: [
      { name: "Drainage Lymphatique Corps ou Visage", duration: "45 min", price: "75 €", note: "+ 10 min de prise en charge" },
      { name: "Drainage Lymphatique Corps ou Visage", duration: "1h15", price: "110 €", note: "+ 10 min de prise en charge" },
      { name: "Drainage Lymphatique Corps ou Visage", duration: "1h45", price: "150 €", note: "+ 10 min de prise en charge" },
      { name: "Drain & Sculpt — Drainage + Remodelage", duration: "1h15", price: "120 €", note: "+ 10 min de prise en charge" },
      { name: "Drain & Sculpt — Drainage + Remodelage", duration: "1h45", price: "160 €", note: "+ 10 min de prise en charge" },
    ],
  },
  {
    id: "signature",
    title: "Expériences & rituels signature",
    subtitle: "Des lâcher-prise absolus",
    description:
      "Des expériences complètes pour un lâcher-prise absolu. Alliant massages, soins et rituels sensoriels, chaque rituel est une expérience unique, pensée pour vous.",
    services: [
      { name: "Rituel Signature Emilya — Soin sur-mesure + soin visage", duration: "1h45", price: "190 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Évasion — Massage + soin visage + Head Spa", duration: "2h15", price: "240 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Deep Serenity — Expérience complète corps & esprit", duration: "2h15", price: "240 €", note: "+ 10 min de prise en charge" },
    ],
  },
  {
    id: "duo",
    title: "Formules duo",
    subtitle: "Un moment à deux",
    description:
      "Partagez un moment de bien-être à deux, dans une ambiance intime et relaxante. Prix pour 2 personnes.",
    services: [
      { name: "Massage Duo — Même massage en cabine duo", duration: "1h15", price: "300 €", note: "+ 10 min de prise en charge" },
      { name: "Massage Duo", duration: "1h45", price: "400 €", note: "+ 10 min de prise en charge" },
      { name: "Rituel Duo Signature — Expérience personnalisée à deux", duration: "2h15", price: "500 €", note: "+ 10 min de prise en charge" },
    ],
    footnote: "Prix pour 2 personnes.",
  },
];

export const extras = [
  { name: "Prise en charge prolongée", detail: "+ 10 min supplémentaires", price: "15 €" },
  { name: "Gommage du corps", detail: "Prépare la peau et affine le toucher", price: "30 €" },
  { name: "Enveloppement", detail: "Rituel sensoriel complémentaire", price: "40 €" },
  { name: "Soin du cuir chevelu", detail: "À ajouter à votre massage", price: "20 €" },
];

export const boxes = [
  {
    name: "Sanctuary Box Découverte",
    detail: "Massage 1h",
    description: "L'essentiel Emilya, pour s'offrir une première parenthèse.",
  },
  {
    name: "Sanctuary Box Évasion",
    detail: "Massage 1h30 + soin visage",
    description: "Un rituel corps et visage pour un lâcher-prise complet.",
  },
  {
    name: "Sanctuary Box Prestige",
    detail: "Rituel complet 2h",
    description: "L'expérience signature, dans les moindres détails.",
  },
];

export const pillars = [
  {
    title: "Expertise",
    text: "Techniques précises et adaptées, au service du relâchement musculaire et de l'équilibre.",
  },
  {
    title: "Produits premium",
    text: "Des produits soigneusement sélectionnés, de qualité premium, pour votre confort et votre peau.",
  },
  {
    title: "Expérience sur-mesure",
    text: "Chaque détail est pensé pour vous. Aucune technique figée, uniquement l'écoute du corps.",
  },
  {
    title: "Bien-être global",
    text: "Corps, esprit et peau. Un espace confidentiel pour se relâcher, se recharger, se reconnecter.",
  },
];

export const charter = [
  { title: "Pas de body body", label: "No body-to-body massage" },
  { title: "Pas de naturiste", label: "No naturist massage" },
  { title: "Pas de finition", label: "No “happy ending”" },
  { title: "Pas de tantrique", label: "No tantric massage" },
  { title: "18+ · Pas de prestations à caractère sexuel", label: "No sexual services" },
];
