# Plantified 🌿

Landing page for **Plantified** — low maintenance desk plants for busy minds.
Built with **React 19 + TypeScript + Vite**, matched to the
[Plantified Figma design](https://www.figma.com/design/xe8aQ1qg6i1abDFQV8PbsQ/Plantified?node-id=101-3580).

## Getting started

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Lighthouse scores (production build, mobile emulation)

| Category       | Score |
| -------------- | ----- |
| Performance    | 94    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

## Design fidelity

- Original image assets extracted from the Figma file (hero monstera, Spike the
  cactus, 5 picker plants, 3 personality-card photos), served as WebP.
- Typography confirmed from the Figma file's own font requests: Tomorrow Bold
  (display headings), Ubuntu Bold (logo), Poppins 400/500/600 (body) —
  self-hosted subsetted woff2 with preloads.
- Header icons are the designer-provided vectors (ic_notification, ic_heart,
  ic_cart, ic_arrow_right) inlined with currentColor for tinting.
- Interactive plant picker: clicking a thumbnail swaps the featured plant with a
  fade transition (Spike's copy is verbatim from the design; the other five
  plants follow the same voice).
- Animation notes from the design implemented: staggered on-scroll reveals for
  every section (IntersectionObserver) and the swaying hanging-plant vector in
  the seasonal care card. All motion is disabled under `prefers-reduced-motion`.

## SEO

Semantic landmarks, single `h1`, meta description + canonical, Open Graph and
Twitter cards, JSON-LD `Organization` schema, `robots.txt`, `sitemap.xml`,
`llms.txt`, and a web manifest.

## Structure

```
src/
  App.tsx                    page composition
  index.css                  design tokens + all styles
  assets/                    WebP photos from the Figma design
  components/
    Reveal.tsx               reveal-on-scroll wrapper
    Header.tsx  Hero.tsx     fixed nav, hero with circle + photo
    PlantPicker.tsx          interactive "Cactus: Spike" section
    Products.tsx             personality cards (Ivy / mint / Spike)
    CareSteps.tsx            "Small Care, Big Rewards"
    SeasonalCare.tsx         "Care at the Right Time" + swaying plant
    Newsletter.tsx  Footer.tsx
    icons.tsx  decor.tsx     stroke icons and line-art vectors
public/
  hero-monstera.webp         LCP image (preloaded)
  fonts/                     self-hosted woff2
```
