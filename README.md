# AI Compose Assistant — Landing Page

Marketing landing page for AI Compose Assistant, built from the brief in
[`LANDING_PAGE_SPEC.md`](./LANDING_PAGE_SPEC.md). Next.js (App Router) + Tailwind CSS,
static single page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Structure

- `app/` — root layout, the single page (`page.tsx`), global styles, favicon (`icon.svg`),
  and a generated OG image (`opengraph-image.tsx`).
- `components/sections/` — one component per page section, composed in `app/page.tsx`.
- `components/ui/` — small shared primitives (`Button`, `Container`, `AccordionItem`).
- `components/illustrations/` — hand-built inline SVG art (no raster assets). The spec
  called for AI-generated illustration PNGs; these were built as SVG/JSX instead since no
  image-generation tool was available.
- `lib/content.ts` — all copy as typed arrays, so content edits don't touch JSX.

## Before launch

Carried over from the spec's open items — see `PRODUCT.md` for the full record:

- Swap the GitHub CTA (currently `https://github.com/hansand/re-write-landing`, a
  confirmed placeholder) for the real destination once a Chrome Web Store listing or the
  extension's actual public repo exists.
- Resolve the license and update the "Is this open source?" FAQ answer
  (`lib/content.ts`) — it currently ships as an explicit TBD.
- Set a real domain and add `metadataBase` in `app/layout.tsx` once one is chosen (build
  currently warns and falls back to `localhost`).
