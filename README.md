# Verso

Singapore credit card rewards optimizer: pick your cards and see which one earns the most for each spend.
A single-file Vue 3 PWA (`index.html`), fully offline after first visit, hosted on GitHub Pages and wrapped for Android with Capacitor.

## Update card data

1. Edit `cards.json`.
2. Bump `dataVersion` and `updated`.
3. Run `npm run build` (compiles CSS, syncs the data embedded in `index.html`, copies to `www/`, runs `cap copy android`).
4. Commit and push.

`npm run bundle-data -- --check` reports whether `index.html` is in sync with `cards.json`.

## Rebuild CSS

After adding or changing Tailwind classes in `index.html`, `privacy.html` or `terms.html`: `npm run css`.

## Layout

- `index.html` – the app
- `cards.json` – card data (source of truth)
- `sw.js`, `manifest.webmanifest` – offline cache and PWA manifest
- `privacy.html`, `terms.html` – legal pages
- `assets/` – compiled Tailwind CSS; `build/` and `tailwind.config.js` – its input
- `vendor/` – local Vue; `fonts/` – self-hosted Inter and Sora
- `icons/`, `favicon.png`, `apple-touch-icon.png`, `makers-mark.png` – images
- `scripts/bundle-data.js` – syncs `cards.json` into `index.html`
- `resources/`, `android/`, `capacitor.config.json` – Capacitor
- `www/` – generated build copy for Capacitor (do not edit)
