# Woody's Paper — Frontend

React 19 + TypeScript + Vite. Styling is **Tailwind CSS v4** (via `@tailwindcss/vite`);
plain CSS is used only where Tailwind has no primitive.

## Scripts

```bash
npm install
npm run dev      # http://0.0.0.0:5000
npm run build    # tsc -b && vite build
npm run lint
```

## Styling conventions

All design decisions live as tokens in the `@theme` block of `src/index.css`, and are
consumed as ordinary utilities in components.

| Token group   | Examples                                                             | Utilities produced                         |
| ------------- | -------------------------------------------------------------------- | ------------------------------------------ |
| Colour        | `--color-brand-green`, `--color-brand-deep`, `--color-ink`             | `bg-brand-green`, `text-ink`, `border-brand-deep` |
| Type          | `--font-display`, `--text-2xs` … `--text-5xs`, `--tracking-ultra`      | `font-display`, `text-3xs`, `tracking-ultra` |
| Chrome sizing | `--spacing-utility`, `--spacing-header`, `--spacing-chrome`            | `h-header`, `top-utility`, `pt-chrome`, `scroll-mt-chrome` |
| Radii         | `--radius-card`, `--radius-panel`, `--radius-slab`, `--radius-slab-lg` | `rounded-panel`, `rounded-slab-lg`          |
| Shadow        | `--shadow-glass`, `--shadow-cta`, `--shadow-panel`, `--shadow-ai-glow` | `shadow-cta`, `shadow-panel`                |
| Motion        | `--animate-float`, `--animate-wing`, `--animate-bob`, `--ease-brand`   | `animate-float`, `ease-brand`               |

**Rules of thumb**

1. Reach for an existing utility first.
2. Need a new colour, size, radius, shadow or animation? Add a token to `@theme` —
   don't write `bg-[#437a3d]` or `text-[11px]` in a component.
3. Repeating the same cluster of classes? Extract a component
   (`GlassCard`, `Reveal`, `WoodyMark`), not a CSS class.
4. Write raw CSS only for things utilities genuinely can't express. Today that is four
   `@utility` blocks in `src/index.css`:
   - `glass-glow` — cursor-tracking highlight (paints a pseudo-element from
     `--mouse-x` / `--mouse-y` set by `useGlassGlow`)
   - `scrollbar-brand` — `::-webkit-scrollbar` styling for the match list
   - `tilt-stage` / `tilt-target` — `perspective` + `transform-style: preserve-3d`
   - `woody-wing` — mascot wing animation, which needs a specific `transform-origin`

   …plus a small `@layer base` block for document-level defaults and a
   `prefers-reduced-motion` escape hatch.

Positional one-offs that are data rather than design (the drifting background boxes)
use inline `style`, not arbitrary classes.

## Structure

```
src/
  components/   UI, one file per section + shared primitives
  hooks/        useReveal, useTilt, useGlassGlow
  services/     advisor.ts, inquiries.ts  ← network boundary (currently stubbed)
  data/         inventory.ts (categories), catalog.ts (SKUs + search)
  index.css     Tailwind import, @theme tokens, base layer, @utility blocks
```

## Backend integration

`src/services/` is the only place that talks to the outside world. The advisor functions
are stubs that resolve locally, so the whole UI is exercisable without credentials; the
inquiry form hands off to the visitor's mail client and needs no backend at all:

- `askWoody(question)` → matches against `data/catalog.ts` and returns
  `{ summary, logistics, matches }`
- `refineInquiry(details)` → restructures a pasted product list
- `submitInquiry({ company, email, details })` → **opens the visitor's own email client**
  with a pre-filled message to `info@woodyspaper.com` and returns the `mailto:` URL.
  The site stores and transmits nothing; the visitor presses send.

To go live, replace the relevant body with a `fetch` to your own endpoint, keeping the
signature and return shape — no component changes required. Call any model provider
from that endpoint, never from the browser: a key shipped to the client is public.

To load the real catalog, replace the `catalog` array in `src/data/catalog.ts` (or fetch
it and pass the result to `findMatches`); the `CatalogItem` shape mirrors the production
export.
