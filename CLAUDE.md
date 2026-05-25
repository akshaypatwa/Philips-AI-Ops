# CLAUDE.md — Presentation Slider Projects

## What This Is

A full-screen interactive presentation slider. Every view is a "slide" — not a webpage. The **frame** (navigation arrows, pagination pills, dark mode toggle, bezel, watermark) is fixed and identical across all presentations in this style. Only the **slide content** changes per project.

The full boilerplate (App.tsx shell, all config files, slide shell, reference slide, snippet catalog) lives in the **presentation-slider** skill at **`.claude/skills/presentation-slider/SKILL.md`**. Read it before scaffolding.

---

## Stack — Non-Negotiable

- React 18 + TypeScript + Vite + Tailwind CSS 3
- `lucide-react` for all icons — no other icon library
- No Framer Motion, no GSAP, no React Router, no chart libraries
- All animations: pure CSS via Tailwind utilities + custom `@keyframes` in `index.css`
- Dark mode: Tailwind `darkMode: 'class'` — root div gets `dark` class
- Fonts via Google Fonts CDN in `index.html`: Plus Jakarta Sans (sans), JetBrains Mono (mono), Dancing Script (cursive accent)

---

## Project Conventions

**Files:**
- Slides live in `src/components/`, named `Slide<Name>.tsx`
- Sub-components (TiltCard, Particles, etc.) go at the top of the file that uses them — not in separate files unless shared across slides

**Components:**
- Slides are zero-prop (or `{ next }` only) functional components; all data is hardcoded or local state
- `App.tsx` owns only: `current` (slide index) + `isDark` (theme flag) + `transitioning`
- No `useContext`, no Redux, no prop drilling, no backend, no `localStorage`

**TypeScript:**
- Strict mode — no `any`, no `@ts-ignore`
- Timer refs: `useRef<ReturnType<typeof setTimeout> | null>(null)`

**Comments:** None unless the WHY is non-obvious.

---

## Customize Per Project

These are the only things that change between presentations. Everything else (bezel, glow, pagination, animations, colors) stays identical.

1. **`index.html`** — `<title>` tag
2. **`package.json`** — `name` field
3. **`vite.config.ts`** — dev server `port` (optional)
4. **`src/App.tsx`** — five edit points clearly marked with `CUSTOMIZE:` comments in SKILL.md:
   - Brand logo text (top-left header)
   - Brand tagline (under logo)
   - Center status pill text
   - Bottom watermark text
   - `SLIDES` array (slide names + components) and `SHORT_NAMES` array
5. **`src/components/Slide*.tsx`** — all slide content

Do **not** change: color palette, fonts, bezel structure, glow stack, pagination pill design, header/footer layout, animation keyframes.

---

## Build Order

1. Scaffold all config files from `SKILL.md` (package.json, vite.config.ts, tsconfig.json, tsconfig.node.json, postcss.config.js, tailwind.config.js, index.html, src/main.tsx, src/index.css)
2. `npm install` (one time)
3. Build `src/App.tsx` from the shell in `SKILL.md` — update the 5 customization points, register all slide names in `SLIDES` and `SHORT_NAMES` arrays
4. Create **stub components for every slide** so the project builds immediately (`export default function SlideX() { return <div className="h-full w-full grid place-items-center text-3xl">SlideX</div>; }`)
5. Run `npm run build` to confirm TypeScript passes with stubs
6. Build each slide one at a time, **stopping for review between each**
7. Run `npm run build` after every slide to verify TypeScript still passes

---

## Design Rules — Non-Negotiable

1. Every slide uses the **slide shell** from `SKILL.md` — background layer (gradient + grid + spotlights) + entrance animation + content area
2. All cards use glassmorphism: `bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 rounded-2xl` (or the project's themed variant from SKILL.md)
3. No flat solid-color card backgrounds — always opacity variants or gradients
4. Every clickable element has a hover micro-interaction: `hover:scale-105`, `hover:-translate-y-1`, or glow
5. Lists and grids use staggered entrance: `style={{ animationDelay: `${i * 100}ms` }}` + `animate-fade-in-up` or `animate-fade-in-scale`
6. Both light and dark mode must look polished — every color class needs its `dark:` variant
7. All slides must fit in the bezel without scrolling. The bezel is `max-w-[1440px]` × `max-h-[810px]`. Internal content uses flex/grid that fills the available space — never `min-h-screen`, always `h-full`.

---

## What NOT to Do

- Do not install chart libraries — use `div` bar sparklines or inline SVG for data viz
- Do not install animation libraries — use the keyframes already in `index.css`
- Do not add React Router — `useState` index navigation only
- Do not add backend, API calls, or `localStorage`
- Do not create `README.md` unless explicitly asked
- Do not add test files unless explicitly asked
- Do not use `console.log` in components
- Do not add comments explaining what code does — only add comments when the WHY is non-obvious
- Do not change the green color palette (`#00c08b`, `#84cc16`, `#80b6a1`, ink-900/950) — it is the locked visual identity of this presentation series
- Do not change the bezel, halo glow stack, pagination pill, or header/footer chrome

---

## Running the Project

```bash
npm install          # first time only
npm run dev          # Vite dev server (default port 5143)
npm run build        # TypeScript check + production build
npm run preview      # Preview built output
```

Always verify `npm run build` passes before reporting a slide done.

---

## Keyboard Shortcuts (built into App.tsx shell)

- `→` / `Space` — next slide
- `←` — previous slide
- `D` — toggle dark mode
