# Hira Bazaar Curtain King

> Premium curtains, elegant wallpapers, and custom window treatments in Mysuru, Karnataka. Led by Mohammed Ismail.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Features

- **Editorial Showcase**: Curated portfolio of bespoke curtain, blind, and wallpaper installations.
- **WhatsApp Direct Connect**: Immediate customer inquiries with pre-filled space details.
- **Interactive Window Treatments**: Showcases Arabian curtains, PVC weather blinds, motorized tracks, and designer wallpapers.
- **Optimized for Performance & SEO**:
  - Full static generation (SSG) across all routes for instant page loads.
  - Core Web Vitals optimized (preloaded hero LCP, AVIF/WebP image formats).
  - OpenGraph, Twitter Cards, Sitemap, Robots.txt, and JSON-LD LocalBusiness schema.
  - Configured for Vercel deployment with Mumbai (`bom1`) low-latency region pinning.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/) (Mumbai `bom1` region)

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Production build
```bash
npm run build
npm run start
```

---

## Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects the Next.js framework, build command (`npm run build`), and Mumbai region (`bom1`) from `vercel.json`.
4. (Optional) Set `NEXT_PUBLIC_SITE_URL` to your production domain in the Vercel project environment variables.
