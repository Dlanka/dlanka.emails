# Madebywimu — Email Development Portfolio

A production-quality freelance email development portfolio built for Upwork clients and direct prospects. Demonstrates MJML marketing emails, HTML email signatures, and email-client-conscious implementation skills.

---

## Live Samples

| Sample | Format | Source | Compiled Output |
|--------|--------|--------|----------------|
| OrbitFlow Product Launch Email | MJML → HTML | `src/emails/orbitflow-launch.mjml` | `dist/emails/orbitflow-launch.html` |
| Northstar Studio Email Signature | HTML + Inline CSS | `src/signatures/northstar-signature.html` | `dist/signatures/northstar-signature.html` |

> **Disclaimer:** All brands (OrbitFlow, Northstar Studio) are entirely fictional and created for portfolio demonstration purposes only. No real company, product, or individual is represented.

---

## Technologies

| Layer | Technology |
|-------|-----------|
| Email authoring | [MJML 5.x](https://mjml.io) |
| Email signature | Semantic HTML, inline CSS, table layout |
| Portfolio UI | [React 19](https://react.dev) + [TypeScript 6](https://typescriptlang.org) |
| Build tool | [Vite 8](https://vitejs.dev) |
| CSS framework | [Tailwind CSS v4](https://tailwindcss.com) |
| Routing | [React Router v7](https://reactrouter.com) |
| Package manager | [Yarn 1.x (Classic)](https://classic.yarnpkg.com) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) (free tier) |

---

## Requirements

| Tool | Minimum Version |
|------|----------------|
| Node.js | 22.x or later (tested on v24.14.0) |
| Yarn | 1.22.x |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/madebywimu/portfolio.git
cd portfolio

# Install all dependencies
yarn install --ignore-engines
```

> The `--ignore-engines` flag is required because MJML 5.x declares strict Node version constraints that have not caught up with Node v24.

---

## Development Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Vite dev server at `http://localhost:5173` |
| `yarn build` | Full production build (emails → copy → TypeScript → Vite) |
| `yarn build:emails` | Compile MJML source → dist + copy to public/dist |
| `yarn validate:emails` | Check compiled output files for required content |
| `yarn preview` | Preview the Vite production build locally |

### Development workflow

```bash
# Start the dev server — live reload for UI changes
yarn dev

# After editing any .mjml file, rebuild the email:
yarn build:emails

# Validate all email output files:
yarn validate:emails
```

---

## Repository Structure

```
madebywimu-portfolio/
├── src/                         # React portfolio source
│   ├── config/
│   │   └── site.ts              # ← Update contact details and links here
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ProjectCard.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── OrbitFlowPreview.tsx
│   │   ├── NorthstarPreview.tsx
│   │   └── NotFound.tsx
│   ├── emails/
│   │   ├── orbitflow-launch.mjml   # MJML source — edit here
│   │   └── README.md
│   ├── signatures/
│   │   └── northstar-signature.html # Signature source — edit here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── dist/
│   ├── emails/
│   │   └── orbitflow-launch.html   # ← Generated — do not edit manually
│   └── signatures/
│       ├── northstar-signature.html
│       └── northstar-signature.txt
├── public/
│   ├── dist/                       # Copies of dist/ served by Vite
│   │   ├── emails/
│   │   └── signatures/
│   └── favicon.svg
├── scripts/
│   ├── build-emails.mjs            # MJML compile script
│   ├── copy-dist-to-public.mjs    # Copies dist/ to public/dist/
│   └── validate-emails.mjs         # Output validation script
├── build/                          # Vite output — not committed
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Editing the MJML Email

1. Open `src/emails/orbitflow-launch.mjml` in any editor.
2. Make your changes using [MJML components](https://documentation.mjml.io/).
3. Recompile:

```bash
yarn build:emails
```

4. Open `dist/emails/orbitflow-launch.html` in a browser to preview.
5. Run validation: `yarn validate:emails`

### Key MJML notes

- **Width:** `mj-body` is set to `600px` — the standard email content width.
- **Images:** All `src` attributes use `placehold.co` URLs. Replace with HTTPS-hosted images for production.
- **Fonts:** Google Fonts are loaded in `mj-head`. If a client doesn't support web fonts, the system font stack is used as fallback.
- **No JavaScript** or external CSS files are used.

---

## Editing the Email Signature

1. Open `src/signatures/northstar-signature.html`.
2. Update placeholder contact details (name, title, phone, email, URLs).
3. Replace all `placehold.co` image sources with HTTPS-hosted images.
4. Copy the updated file to dist:

```bash
Copy-Item src/signatures/northstar-signature.html dist/signatures/northstar-signature.html
node scripts/copy-dist-to-public.mjs
```

5. Also update `dist/signatures/northstar-signature.txt` with the plain-text fallback.

### Configuration — updating contact details

All portfolio contact links are in one file:

```typescript
// src/config/site.ts
export const siteConfig = {
  contact: {
    email: 'hello@madebywimu.com',       // ← Update this
    upwork: 'https://www.upwork.com/...',
    github: 'https://github.com/...',
    // ...
  },
  // ...
}
```

---

## Replacing Demo Images

Both samples use placeholder images from `placehold.co`. Before using in production:

1. Host your images on a CDN or static hosting (Cloudflare Images, AWS S3, Cloudinary, etc.)
2. Ensure images are served over **HTTPS** only.
3. Replace every `src="https://placehold.co/..."` in the source files with your hosted URL.
4. Rerun `yarn build:emails` (for MJML) or manually copy (for signature).

---

## Deployment — Cloudflare Pages

### 1. Create a GitHub repository

```bash
cd path/to/madebywimu-portfolio
git init
git add .
git commit -m "Initial commit — Madebywimu portfolio"
git remote add origin https://github.com/YOUR_USERNAME/madebywimu-portfolio.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages**.
2. Connect your GitHub account and select the repository.
3. Configure the build settings:

| Setting | Value |
|---------|-------|
| Build command | `yarn build` |
| Build output directory | `build` |
| Node.js version | `20` or later (set in environment variables as `NODE_VERSION=20`) |

> Add `YARN_ENABLE_HARDENED_MODE=0` as an environment variable if Cloudflare uses Yarn Berry.

4. Click **Save and Deploy**.

### 3. Verify deployment

- Check that the portfolio loads at the generated `*.pages.dev` URL.
- Navigate to `/preview/orbitflow` and `/preview/northstar`.
- Confirm that the iframe previews load the email HTML files.
- Check browser console for errors.

### 4. Custom domain (optional)

In Cloudflare Pages settings, add a custom domain pointing to your `pages.dev` deployment.

> **Deployment status:** This project has not yet been deployed. The above instructions are accurate for Cloudflare Pages as of October 2026 but must be verified when actually deploying.

---

## Email Client Testing Status

> **None of the email samples have been tested in any email client.** The browser previews shown in the portfolio are browser-only renders and **do not** represent how the emails will appear in Gmail, Outlook, Apple Mail, or any other client.

| Email Client | Status |
|-------------|--------|
| **Gmail** (Chrome, desktop web) | ⬜ Not tested |
| **Gmail** (iOS app) | ⬜ Not tested |
| **Gmail** (Android app) | ⬜ Not tested |
| **Outlook** 2019 (Windows) | ⬜ Not tested |
| **Outlook** 2021/365 (Windows) | ⬜ Not tested |
| **Outlook** on the web (OWA) | ⬜ Not tested |
| **Apple Mail** (macOS) | ⬜ Not tested |
| **Apple Mail** (iOS/iPadOS) | ⬜ Not tested |
| **Yahoo Mail** (web) | ⬜ Not tested |
| **Thunderbird** | ⬜ Not tested |

### How to test

Use a professional email testing service before sending to real recipients:

- [Litmus](https://litmus.com) — visual previews across 90+ clients
- [Email on Acid](https://www.emailonacid.com) — screenshot testing + deliverability
- [Mailtrap](https://mailtrap.io) — safe sandbox for test sends

### Known limitations

- **Outlook desktop** (Windows) uses the Word rendering engine and may not support CSS gradients, border-radius, or web fonts. The OrbitFlow email should be tested specifically in Outlook 2019/2021.
- **Gmail** strips `<style>` tags in some contexts; MJML inlines critical styles but you should verify.
- **Dark mode** rendering has not been considered or tested. Email clients may invert colors unexpectedly.

---

## Known Issues and Limitations

| Issue | Status |
|-------|--------|
| Email-client rendering not verified | Known — see testing checklist above |
| Dashboard mockup uses a placeholder image | By design — replace with real asset |
| Signature images use `placehold.co` | Must be replaced with HTTPS-hosted assets |
| Dark mode email support | Not implemented or tested |
| Email-client–specific CSS overrides (e.g., Outlook VML) | Not implemented |
| AMP for Email | Not implemented |

---

## License

This portfolio and its code are for personal portfolio use. The fictional brands (OrbitFlow, Northstar Studio) are invented for demonstration only. Do not represent these samples as work done for real clients.
