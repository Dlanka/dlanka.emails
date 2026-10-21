# Email Sources — Darshaka Lanka Portfolio

This directory contains MJML source files for the marketing email samples.

## Files

| File | Description |
|------|-------------|
| `orbitflow-launch.mjml` | SaaS product launch email for fictional brand "OrbitFlow" |

## Compiling

Run from the project root:

```bash
yarn build:emails
```

This runs `scripts/build-emails.mjs` which invokes the MJML CLI to compile each source file to `dist/emails/`. It also copies the output into `public/dist/emails/` so Vite serves it as a static file.

### Manual compile (single file)

```bash
node node_modules/.bin/mjml src/emails/orbitflow-launch.mjml -o dist/emails/orbitflow-launch.html
```

## Validation

```bash
yarn validate:emails
```

This checks:
- Output files exist and are non-empty
- Required content strings are present
- No localhost or local file:// URLs remain in the HTML

## MJML Version

This project uses **MJML 5.x** installed as a local dev dependency.
See [mjml.io](https://mjml.io) for full documentation.

## Design Notes

- Maximum email width: **600px**
- Layout: **Single-column**, responsive on mobile
- Images: Uses `placehold.co` placeholder images. Replace with hosted assets.
- JavaScript: **None** — email-safe
- External CSS: **None** — all styles inlined by MJML

## Fictional Content

OrbitFlow is a fictional SaaS brand created for portfolio demonstration purposes only.
All company details, testimonials, and pricing are invented and not based on any real product.

## Email Client Testing Status

> **Testing status for OrbitFlow Marketing Email:** Browser preview only. Live inbox send tests are pending via Litmus, Email on Acid, or Putsmail.

| Client | Status | Notes |
|--------|--------|-------|
| Gmail (Chrome, desktop) | ⬜ Pending live send | Inlined styles & table structure designed for Gmail compatibility. |
| Gmail (iOS app) | ⬜ Pending live send | `mj-group` keeps feature icons alongside text on mobile. |
| Gmail (Android app) | ⬜ Pending live send | Single column responsive wrapper. |
| Outlook 2019 / 2021 (Windows) | ⬜ Pending live send | Word engine fallback: MSO table rules, solid background fallbacks. |
| Outlook on the web (OWA) | ⬜ Pending live send | Standard modern rendering. |
| Apple Mail (macOS & iOS) | ⬜ Pending live send | Full webfont and HTML5 support. |
| Yahoo Mail | ⬜ Pending live send | Standard desktop & mobile web rendering. |

To execute test sends, see the instructions in the root `README.md`.

