// @ts-check
import { defineConfig } from 'astro/config';

// Vorerst unter der github.io-Adresse. Für die eigene Domain später:
// site: 'https://www.poels-massivbau.de', base entfernen, public/CNAME anlegen.
export default defineConfig({
  site: 'https://henrypoels-ux.github.io',
  base: '/poels-massivbau-website',
  trailingSlash: 'always',
});
