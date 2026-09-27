# Cure Connect — Official Organization Website

Premium organization website for **Cure Connect**, operated by **PHDC PRIVATE LIMITED**.

This is the company/marketing site (not the patient app, not the partner registration portal).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Links and site settings

All links live in `src/lib/site.ts`: the site address (`siteUrl`), the **Become a Partner** link (`partnerRegistrationUrl`), the Play Store apps, WhatsApp, Instagram, and the contact email.

## Deploying to Cloudflare Pages

Cloudflare Pages hosts the static build:

```bash
npm run build:static
```

This writes the site to `out/`. In Cloudflare Pages, use `npm run build:static` as the build command and `out` as the output directory, or upload the `out/` folder directly. Next.js needs Node 20.9 or newer.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Pages

- `/` Home
- `/about` About Us
- `/services` Our Services
- `/partner` Partner With Us
- `/story` Our Story
- `/contact` Contact Us
- `/legal/privacy` `/legal/terms` `/legal/disclaimer`

## Brand assets

The logo, app dashboard screenshot, founder photo, and other images live in `public/images/`.
