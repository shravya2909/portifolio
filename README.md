# Shravya Gadupuri | Portfolio

A single-page portfolio site, built as static HTML/CSS/JS (no build step, no dependencies).

## Structure

```
index.html          All page content and section markup
css/style.css        Design tokens, layout, motion (scroll reveals, parallax, hero load-in)
js/script.js          Nav toggle, project modal, scroll reveals/parallax, icon injection
img/portrait-cutout.png  Hero portrait (background-removed cutout)
img/projects/          Project screenshots shown in the case-study modal
resume2026.pdf        Résumé, linked from the header and footer download buttons
```

## Running locally

Any static file server works, e.g.:

```
python -m http.server 8934
```

Then open `http://localhost:8934/`.

## Design system

- **Palette:** deep charcoal (`#1C1815`) and oxblood maroon (`#4A1016`) as the dominant tones, cream (`#F2EADB`) used sparingly for panels and text, near-black for grounding. Tokens are defined as CSS custom properties at the top of `css/style.css`.
- **Type:** Fraunces (serif, display/headings), Inter (sans, body), Parisienne (script, reserved for the closing sign-off signature only).
- **Layout:** distinct bounded panels (`.panel--cream`, `.panel--dark`, `.panel--maroon`) stacked in sequence rather than one continuous background.
- **Motion:** IntersectionObserver-driven scroll reveals (`reveal-up`, `reveal-left`, `reveal-scale` classes), a scroll-linked parallax watermark in the hero, and a staggered hero load-in animation. All motion respects `prefers-reduced-motion`.
- **Icons:** small inline-SVG line-art marks, defined in `js/script.js` (`iconSvg` for project cards, `sectionIconSvg` for section headings) and injected at runtime rather than hardcoded per element. This keeps the icon set centralized and easy to extend.

## Updating content

- **Projects:** each card/tile in `index.html` carries a `data-project="key"` attribute; the case-study content (summary, what I built, impact, stack, repo link, screenshot) lives in the `projects` object in `js/script.js`. Keep both in sync when adding or editing a project. To add a screenshot, drop a 16:10 image in `img/projects/` and set its `image` and `imageAlt` fields; projects without one show their icon instead.
- **Hero photo:** swap `img/portrait-cutout.png` for a new cutout with a transparent background (head-and-shoulders-to-waist crop works best). If its pixel dimensions differ from 651×1024, update the `aspect-ratio` on `.hero-photo-frame` in `css/style.css`.
- **Résumé:** replace `resume2026.pdf` with the same filename, or update the `href` on both `.btn-solid`/footer download links if the filename changes.
- **Tagline:** the hero positioning line is a single `<p class="hero-tagline">` in `index.html` and is safe to swap without touching layout.

## Browser support

Targets evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `aspect-ratio`, CSS custom properties, and `IntersectionObserver`, with no polyfills included.
