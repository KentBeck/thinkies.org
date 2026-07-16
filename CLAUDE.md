# CLAUDE.md

Guidance for working in this repo (thinkies.org / `twc-website`). Keep it lean — add
only durable, non-obvious facts that save re-discovery.

## Stack (so you don't have to re-derive it)

- **SvelteKit 2** + **Svelte 5** (runes-capable), built with **Vite 5**.
- **`@sveltejs/adapter-static`** → static site output in `./dist`.
- **Tailwind CSS 3** + **DaisyUI 5** (`tailwind.config.js` → `plugins: [require('daisyui')]`).
- Dev: `npm run dev` (Vite on http://localhost:5173). Build: `npm run build`. Preview: `npm run preview`.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml` on push to `main` (builds `./dist`).
- Remotes: `origin` = KentBeck/thinkies.org (production), `staging` = mariomelo/twc_website.
- Some pages are data-driven — e.g. `/exploring-stuckness` reads from
  `src/lib/data/exploring-stuckness.js` (single source of truth for the event).

## ⚠️ DaisyUI global class-name collisions (learned the hard way)

DaisyUI 5 ships **unscoped global component classes** with very generic names:
`.steps`, `.step`, `.label`, `.card`, `.badge`, `.value`, `.menu`, `.tab`, etc.

If a Svelte component uses one of these as a **custom class**, DaisyUI's global rule
still matches it. Svelte's scoped rule (`.foo.svelte-hash …`) only overrides the
properties it *explicitly sets* — any property DaisyUI sets that yours doesn't
**leaks through**. This produces layout bugs that look like broken media queries but
aren't.

Real cases we hit on `/exploring-stuckness`:
- `.steps` (card container) inherited DaisyUI's `grid-auto-flow: column` → cards forced
  side-by-side at every width, ignoring the `1fr` / `repeat(3,1fr)` breakpoint.
- `.label` (meta-box titles) inherited DaisyUI's `white-space: nowrap` → long titles
  overflowed their box instead of wrapping.

**Fix / rule of thumb:** don't name custom classes after DaisyUI components. Prefix
page-specific classes (this file already uses `es-*`, `meta-*`, `event-*`). If you see a
CSS bug where a scoped rule seems ignored, check the computed style for a leaked
property and grep the built global CSS for a bare `.<classname>` DaisyUI rule.

## Verifying CSS/layout changes cheaply

- **Don't guess "it's a cache issue."** The dev server recompiles instantly; check the
  actual computed layout instead of theorizing.
- Playwright isn't a dependency and only Safari is installed on this machine. To measure
  real layout, temporarily `npm i -D playwright && npx playwright install chromium`,
  script a measurement against `localhost:5173`, then **revert `package.json` /
  `package-lock.json`** (`git checkout -- package.json package-lock.json && npm install`)
  so the tooling doesn't land in the repo.
- Production is CDN-cached (`cache-control: max-age=600`); a fresh deploy needs a hard
  refresh before changes are visible.

## Token-saving conventions

- Scoped Svelte `<style>` lives inside each `.svelte` file; there's no shared component
  CSS file to hunt for. Global styles: `src/app.css`.
- Prefer the data files in `src/lib/data/` over editing markup when changing event
  details, people, or card contents.
