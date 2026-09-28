# Foodzy — Next.js + TypeScript + Tailwind

Pixel-matched build of the Foodzy homepage header + hero section from your Figma spec.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react (icons — swap for your own icon set any time)

## Get started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## What's built
- `components/Header.tsx` — top info bar (hamburger, nav, phone) + main header (logo, search bar, account/wishlist/cart). Fully responsive: nav collapses into a mobile drawer under `lg`, phone/account labels hide progressively on small screens.
- `components/Hero.tsx` — "Delicious ROAST TURKEY" hero with Order Now CTA, social row, and call-us block. Background is a CSS gradient placeholder standing in for the photographic background.

## Replacing placeholder images
- `public/images/hero-turkey-placeholder.svg` — swap this file (or change the `src` in `Hero.tsx`) for your real plated-turkey photo.
- The chef-hat logo mark in `Header.tsx` is a `lucide-react` icon in a circle — replace with your real Foodzy logo image whenever you have the asset (drop it in `public/images/` and swap the `<span>` markup for a `next/image`).
- Hero background: currently a CSS gradient (`bg-[radial-gradient(...)]` in `Hero.tsx`). Replace with a `next/image` using `fill` + `object-cover` once you have the real background photo.

## Notes
- Design tokens (brand green `#64B496`, dark chip `#2B2B2D`, fonts Poppins/Inter) live in `tailwind.config.ts` — adjust there if the palette shifts.
- Layout uses responsive Flexbox (not literal absolute-positioned Figma coordinates) so it holds up across breakpoints; key desktop measurements (600px search bar, 45px input height, 142px header stack height) are preserved via Tailwind arbitrary values.
- Send over the next section's CSS/image and it'll be added to `app/page.tsx` below `<Hero />`.
