export const company = {
  name: 'Poels Massivbau GmbH',
  street: 'Hubertusstraße 26',
  zip: '47638',
  city: 'Straelen',
  phone: '02834 9428 033',
  phoneHref: 'tel:+4928349428033',
  email: 'kontakt@poels-massivbau.de',
  partnerSince: 2021,
  partnerUrl: 'https://www.favorit-haus.de/',
};

export const nav = [
  { href: 'leistungen/', label: 'Leistungen' },
  { href: 'ablauf/', label: 'Ablauf' },
  { href: 'ueber-uns/', label: 'Über uns' },
];

/** Baut einen Link relativ zur base (github.io-Unterpfad oder später Domain-Root). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
