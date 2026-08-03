# Cure Connect — Official Organization Website

Premium organization website for **Cure Connect**, operated by **PHDC PRIVATE LIMITED**.

This is the company/marketing site (not the patient app, not the partner registration portal).

## Quick start

```bash
npm install
cp .env.example .env.local
# Edit NEXT_PUBLIC_PARTNER_REGISTRATION_URL in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Partner registration URL

All **Become a Partner** buttons use:

`NEXT_PUBLIC_PARTNER_REGISTRATION_URL`

Set this in `.env.local` before launch.

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
- `/our-story` Our Story
- `/contact` Contact Us
- `/privacy` `/terms` `/disclaimer`

## Brand assets

Official logo, app dashboard reference, and founder photo live in `public/images/`.
