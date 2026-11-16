export const company = {
  name: 'Poels Massivbau GmbH',
  street: 'Hubertusstraße 26',
  zip: '47638',
  city: 'Straelen',
  phone: '02834 9428 033',
  phoneHref: 'tel:+4928349428033',
  email: 'kontakt@poels-massivbau.de',
};

export const nav = [
  { href: 'leistungen/', label: 'Leistungen' },
  { href: 'referenzen/', label: 'Referenzen' },
  { href: 'ueber-uns/', label: 'Über uns' },
  { href: 'karriere/', label: 'Karriere' },
];

export const services = [
  { id: 'einfamilienhaus', icon: 'house', title: 'Einfamilienhaus', short: 'Ihr Grundstück, Ihr Grundriss. Individuell geplant und massiv gebaut – vom Keller bis zum Dach.' },
  { id: 'mehrfamilienhaus', icon: 'building', title: 'Mehrfamilienhaus', short: 'Wohneinheiten für die eigene Familie, zur Vermietung oder als Kapitalanlage – kalkulierbar geplant und gebaut.' },
  { id: 'bauleitung', icon: 'helmet', title: 'Bauleitung', short: 'Sie haben Planung und Handwerker – wir übernehmen Vergabe, Termine, Überwachung und Abnahmen.' },
  { id: 'projektentwicklung', icon: 'compass', title: 'Projektentwicklung', short: 'Vom Grundstück bis zum fertigen Objekt: Konzept, Planung, Kalkulation und Umsetzung aus einer Hand.' },
] as const;

/** Baut einen Link relativ zur base (github.io-Unterpfad oder später Domain-Root). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
