# Email Sources — Madebywimu Portfolio

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

> **None of the below clients have been tested.** Do not rely on browser preview as proof of
> rendering in any of these clients.

| Client | Status |
|--------|--------|
| Gmail (Chrome, desktop) | ⬜ Not tested |
| Gmail (iOS, mobile) | ⬜ Not tested |
| Gmail (Android, mobile) | ⬜ Not tested |
| Outlook 2019 (Windows) | ⬜ Not tested |
| Outlook 2021 (Windows) | ⬜ Not tested |
| Outlook on the web | ⬜ Not tested |
| Apple Mail (macOS) | ⬜ Not tested |
| Apple Mail (iOS) | ⬜ Not tested |
| Yahoo Mail | ⬜ Not tested |

To test, use a service such as [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com).
