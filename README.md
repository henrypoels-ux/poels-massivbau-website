# poels-massivbau-website

Firmen-Website der Poels Massivbau GmbH (Relaunch), gebaut mit [Astro](https://astro.build) als statische Seite für GitHub Pages.

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:4321/poels-massivbau-website/
npm run build    # statischer Build nach dist/
```

## Struktur

- `src/pages/` – eine Datei pro Seite (Start, Leistungen, Ablauf, Über uns, Kontakt, Impressum, Datenschutz, Danke, 404)
- `src/components/` – Header, Footer, Logo, Seitenkopf, Kontakt-Band
- `src/lib/site.ts` – Firmendaten (Adresse, Telefon, Mail) und Navigation an einer Stelle
- `src/styles/global.css` – Farben (Rot `#CC0404`, Anthrazit `#121D28`) und Grundstile
- Schrift Poppins wird lokal über `@fontsource/poppins` ausgeliefert (kein Google-Fonts-Abruf)

## Kontaktformular (Web3Forms)

Der Access Key wird **nicht** ins Repo geschrieben, sondern beim Build gesetzt:

1. Key auf <https://web3forms.com> für `kontakt@poels-massivbau.de` erzeugen.
2. GitHub → Repository → Settings → Secrets and variables → Actions → `PUBLIC_WEB3FORMS_KEY` anlegen (als Variable oder Secret – beides funktioniert). Fehlt der Key, bricht das Deployment mit einer Fehlermeldung ab.
3. Lokal optional `.env` nach Vorlage `.env.example` anlegen (ist in `.gitignore`).

Hinweis: Der Key steht im ausgelieferten HTML zwangsläufig sichtbar im Formular – das ist bei Web3Forms so vorgesehen.

## Deployment

Bei jedem Push auf `main` baut `.github/workflows/deploy.yml` die Seite und veröffentlicht sie auf
<https://henrypoels-ux.github.io/poels-massivbau-website/>.

Einmalig nötig: GitHub → Settings → Pages → Source: **GitHub Actions**.

### Später: eigene Domain

1. In `astro.config.mjs` `site` auf `https://www.poels-massivbau.de` setzen und `base` entfernen.
2. Datei `public/CNAME` mit `www.poels-massivbau.de` anlegen.
3. DNS beim Domain-Anbieter auf GitHub Pages umstellen, in Settings → Pages die Domain eintragen.

## Offene Punkte

- Logo-Datei einsetzen (`src/components/Logo.astro`, aktuell Platzhalter aus Schriftzug + Klinkerreihe)
- Fotos (Baustellen, Team, Referenzen) ergänzen
- Impressum und Datenschutzerklärung vor dem Livegang fachlich prüfen lassen
