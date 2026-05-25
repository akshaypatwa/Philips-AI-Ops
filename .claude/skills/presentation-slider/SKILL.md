---
name: presentation-slider
description: Source-of-truth boilerplate (configs, App shell, slide shell, snippet catalog) for scaffolding NowForge-style full-screen presentation slider projects in React 18 + Vite + TypeScript + Tailwind 3. Use whenever creating a new slide deck in this visual identity.
---

# SKILL.md — Presentation Slider Boilerplate

This file is the **single source of truth** for scaffolding a new presentation in the locked NowForge-style visual identity. Copy each file block to its absolute path. Do not improvise on config, animations, or the App shell — they are the visual identity.

---

## 0. Bootstrap Order

1. Create all config files (Section 1)
2. Create `src/main.tsx` and `src/index.css` (Section 2)
3. Create `src/App.tsx` (Section 3) — apply the 5 CUSTOMIZE points
4. Create one stub per slide listed in `SLIDES` so the project compiles
5. `npm install`
6. `npm run dev` to confirm the shell renders
7. Build slides one at a time using the slide shell pattern (Section 4) and reference slide (Section 5)

---

## 1. Config Files

### `package.json`

```json
{
  "name": "CUSTOMIZE-project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

### `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5143,
  },
});
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

### `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        forge: {
          50: '#f1f9f6',
          100: '#def2eb',
          200: '#c0e6db',
          300: '#98d5c4',
          400: '#6abfa8',
          500: '#00c08b',
          600: '#009e72',
          700: '#007c59',
          800: '#293c3e',
          900: '#1d2d2f',
        },
        ember: {
          50: '#f7fbf9',
          100: '#eef6f2',
          200: '#d4eae0',
          300: '#b3dcc8',
          400: '#80b6a1',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#1b2d2f',
        },
        ink: {
          950: '#030c0b',
          900: '#061211',
          800: '#0d211f',
          700: '#173633',
        },
      },
      animation: {
        'fade-in': 'fade-in 600ms ease-out both',
        'fade-in-up': 'fade-in-up 700ms cubic-bezier(0.16,1,0.3,1) both',
        'fade-in-scale': 'fade-in-scale 600ms cubic-bezier(0.16,1,0.3,1) both',
        'slide-in-right': 'slide-in-right 700ms cubic-bezier(0.16,1,0.3,1) both',
        'slide-in-left': 'slide-in-left 700ms cubic-bezier(0.16,1,0.3,1) both',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s ease-out infinite',
        'shimmer': 'shimmer 2.8s linear infinite',
        'gradient-shift': 'gradient-shift 14s ease infinite',
        'draw-line': 'draw-line 1.2s cubic-bezier(0.65,0,0.35,1) both',
        'check-pop': 'check-pop 500ms cubic-bezier(0.34,1.56,0.64,1) both',
        'breathe': 'breathe 4.5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'orbit': 'orbit 16s linear infinite',
        'tilt': 'tilt 7s ease-in-out infinite',
        'data-flow': 'data-flow 2.2s linear infinite',
        'beam': 'beam 3s ease-in-out infinite',
        'count-up': 'count-up 1.4s ease-out both',
      },
    },
  },
  plugins: [],
};
```

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Caveat:wght@700&family=Dancing+Script:wght@700&family=Great+Vibes&display=swap"
      rel="stylesheet"
    />
    <!-- CUSTOMIZE: page title -->
    <title>CUSTOMIZE · Presentation Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 2. Entry Files

### `src/main.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `src/index.css`

Includes all custom keyframes used throughout the presentation. Do not remove any — slides reference them by name.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light dark;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

/* Subtle texture overlay used inside the slide bezel */
.noise {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* SVG path "draw" effect helper — set --len at runtime if needed */
.path-draw {
  stroke-dasharray: var(--len, 600);
  stroke-dashoffset: var(--len, 600);
  animation: draw-line 1.3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.shimmer-mask {
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.55) 50%,
    rgba(255, 255, 255, 0) 70%
  );
  background-size: 220% 100%;
  animation: shimmer 2.8s linear infinite;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-scale {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(36px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-36px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.55),
                0 0 40px 0 rgba(16, 185, 129, 0.25);
  }
  50% {
    box-shadow: 0 0 0 18px rgba(16, 185, 129, 0),
                0 0 70px 6px rgba(16, 185, 129, 0.45);
  }
}

@keyframes pulse-ring {
  0% { transform: scale(0.85); opacity: 0.85; }
  100% { transform: scale(1.8); opacity: 0; }
}

@keyframes shimmer {
  0% { background-position: 220% 0; }
  100% { background-position: -120% 0; }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes draw-line {
  to { stroke-dashoffset: 0; }
}

@keyframes check-pop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.25); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.025); filter: brightness(1.08); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes orbit {
  from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
}

@keyframes tilt {
  0%, 100% { transform: rotate(-1.2deg); }
  50% { transform: rotate(1.2deg); }
}

@keyframes data-flow {
  0% { stroke-dashoffset: 40; }
  100% { stroke-dashoffset: 0; }
}

@keyframes beam {
  0%, 100% { opacity: 0.35; transform: translateY(0) scaleY(1); }
  50% { opacity: 0.9; transform: translateY(-2px) scaleY(1.05); }
}

@keyframes count-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Particle drift used in hero background */
@keyframes drift {
  0% { transform: translate3d(0,0,0); opacity: 0; }
  10% { opacity: 0.9; }
  100% { transform: translate3d(var(--dx, 80px), var(--dy, -120px), 0); opacity: 0; }
}

/* Confetti for CTA */
@keyframes confetti {
  0% { transform: translate3d(0,0,0) rotate(0deg); opacity: 1; }
  100% { transform: translate3d(var(--cx,0), var(--cy,-300px), 0) rotate(var(--cr,720deg)); opacity: 0; }
}

/* Scrollbar hidden inside slide bodies */
.slide-scroll::-webkit-scrollbar { width: 0; height: 0; }
.slide-scroll { scrollbar-width: none; }
```

---

## 3. The App Shell — `src/App.tsx`

This is the **frame** of every presentation: dark green canvas, top header (logo + status pill + theme toggle), bezel with glow stack, floating arrow buttons, brand pill, pagination pill, footer. Do not modify the structure — only edit the 5 `CUSTOMIZE:` points marked below.

```tsx
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, Flame } from 'lucide-react';

// CUSTOMIZE 1: import your slide components
import SlideHero from './components/SlideHero';
// import SlideTwo from './components/SlideTwo';
// import SlideThree from './components/SlideThree';
// import SlideCTA from './components/SlideCTA';

type SlideDef = {
  name: string;
  kicker: string;
  Component: (props: { next: () => void }) => JSX.Element;
};

// CUSTOMIZE 2: register all slides in order. Length should equal SHORT_NAMES length.
const SLIDES: SlideDef[] = [
  { name: 'Hero', kicker: 'Episode 01 · Cold Open', Component: SlideHero },
  // { name: 'Two', kicker: '...', Component: SlideTwo },
  // { name: 'Three', kicker: '...', Component: SlideThree },
  // { name: 'CTA', kicker: 'Outro', Component: SlideCTA },
];

// CUSTOMIZE 3: short labels shown under each pagination dot (one per slide).
const SHORT_NAMES = ['Intro' /*, 'Two', 'Three', 'Watch' */];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= SLIDES.length || idx === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 180);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'd' || e.key === 'D') setIsDark((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const Active = SLIDES[current].Component;

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        className="relative h-screen w-screen overflow-hidden text-slate-100 transition-colors duration-500 select-none bg-[#000605]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 90% at 0% 50%, #10b981 0%, rgba(16,185,129,0.35) 25%, rgba(16,185,129,0.08) 50%, transparent 70%), radial-gradient(ellipse 55% 90% at 100% 50%, #10b981 0%, rgba(16,185,129,0.35) 25%, rgba(16,185,129,0.08) 50%, transparent 70%), radial-gradient(ellipse 60% 70% at 50% 50%, #02110d 0%, #000605 80%)',
        }}
      >
        {/* Crisp dot grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,192,139,0.18)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(0,192,139,0.1)_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />

        {/* Top header bar */}
        <header className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[#00c08b]/40 blur-md animate-pulse-glow" />
              <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-[#00c08b] to-[#84cc16] grid place-items-center shadow-lg shadow-[#00c08b]/30">
                <Flame className="h-5 w-5 text-white animate-pulse" strokeWidth={2.4} />
              </div>
            </div>
            <div className="leading-tight">
              {/* CUSTOMIZE 4a: brand logo text */}
              <div className="font-extrabold tracking-tight text-base sm:text-lg text-white">
                Now<span className="text-[#00c08b]">Forge</span>
              </div>
              {/* CUSTOMIZE 4b: brand tagline */}
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#80b6a1]/80 font-bold">
                Ship real ServiceNow AI
              </div>
            </div>
          </div>

          {/* Central presentation pill */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#031513]/85 backdrop-blur-md border border-[#80b6a1]/25 shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-ping" />
            {/* CUSTOMIZE 4c: center status pill text */}
            <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#80b6a1]">
              NOWFORGE PRESENTATION
            </span>
          </div>

          {/* Right: status chip + theme toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#031513]/80 backdrop-blur-md border border-[#00c08b]/30 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-pulse" />
              <span className="font-mono text-[8px] font-extrabold uppercase tracking-widest text-[#80b6a1]">
                INSTANCE: ONLINE
              </span>
            </div>

            <button
              onClick={() => setIsDark((v) => !v)}
              className="group relative h-9 w-9 rounded-lg bg-[#031513]/90 backdrop-blur-md border border-[#80b6a1]/25 grid place-items-center hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-md"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-400 animate-pulse" />
              ) : (
                <Moon className="h-4 w-4 text-[#00c08b]" />
              )}
            </button>
          </div>
        </header>

        {/* Slide stage / bezel */}
        <main className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-12 lg:px-16 pt-16 pb-16">
          <div className="relative w-full max-w-[1440px] h-[calc(100%-8px)] max-h-[810px] flex items-center justify-center">

            {/* 3D metallic brand pill (top of bezel) */}
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#009e72] via-[#00c08b] to-[#84cc16] text-white text-[9.5px] font-black tracking-[0.25em] uppercase select-none shadow-[0_12px_24px_rgba(0,192,139,0.35),inset_0_1.5px_1.5px_rgba(255,255,255,0.45),0_2px_4px_rgba(0,0,0,0.15)] border border-[#00c08b]/40 backdrop-blur-md cursor-default transition-all duration-300 hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              {/* CUSTOMIZE 4d: top brand pill text */}
              SERVICENOW | NOWFORGE
            </div>

            {/* Floating arrows */}
            <button
              onClick={prev}
              disabled={current === 0}
              className="group hidden sm:flex absolute -left-14 lg:-left-24 top-1/2 -translate-y-1/2 z-40 h-[68px] w-[68px] rounded-full items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Previous slide"
            >
              <span className="absolute inset-0 rounded-full border-2 border-[#00c08b] bg-white/95 dark:bg-[#040e0d]/95 shadow-xl shadow-[#00c08b]/10 dark:shadow-[#00c08b]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00c08b] group-active:scale-95" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00c08b]/20 blur-xl -z-10" />
              <ChevronLeft className="relative z-10 h-6 w-6 text-[#00c08b] group-hover:text-white transition-all duration-300 group-hover:-translate-x-1" strokeWidth={3} />
            </button>

            <button
              onClick={next}
              disabled={current === SLIDES.length - 1}
              className="group hidden sm:flex absolute -right-14 lg:-right-24 top-1/2 -translate-y-1/2 z-40 h-[68px] w-[68px] rounded-full items-center justify-center transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Next slide"
            >
              <span className="absolute inset-0 rounded-full border-2 border-[#00c08b] bg-white/95 dark:bg-[#040e0d]/95 shadow-xl shadow-[#00c08b]/10 dark:shadow-[#00c08b]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00c08b] group-active:scale-95" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00c08b]/20 blur-xl -z-10" />
              <ChevronRight className="relative z-10 h-6 w-6 text-[#00c08b] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" strokeWidth={3} />
            </button>

            {/* Halo glow stack behind the bezel */}
            <div className="absolute -inset-[5px] rounded-[32px] opacity-100 blur-[10px] pointer-events-none -z-10" style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #00c08b 100%)', mixBlendMode: 'screen' }} />
            <div className="absolute -inset-[18px] rounded-[42px] opacity-70 blur-[30px] pointer-events-none -z-10" style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #00c08b 100%)', mixBlendMode: 'screen' }} />
            <div className="absolute -inset-[44px] rounded-[64px] opacity-45 blur-[70px] pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse at center, #10b981 0%, rgba(16,185,129,0.45) 60%, transparent 100%)', mixBlendMode: 'screen' }} />

            {/* The bezel: green gradient border + intense glow + slide canvas */}
            <div
              className="relative h-full w-full rounded-[26px] p-[5px] transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #5eead4 0%, #10b981 35%, #059669 70%, #34d399 100%)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 0 25px rgba(16,185,129,0.75), 0 0 55px rgba(16,185,129,0.55), 0 0 110px rgba(16,185,129,0.35), 0 40px 90px rgba(0,0,0,0.65), 0 18px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.35)',
              }}
            >
              <div className="relative h-full w-full rounded-[24px] overflow-hidden bg-white dark:bg-ink-900 transition-colors duration-500">
                <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/40 dark:ring-[#80b6a1]/10" />
                <div className="absolute inset-0 noise opacity-40 dark:opacity-25 pointer-events-none" />
                <div
                  key={current}
                  className={`absolute inset-0 ${transitioning ? 'opacity-0 scale-[0.985]' : 'opacity-100 scale-100'} transition-all duration-300 ease-out`}
                >
                  <Active next={next} />
                </div>
              </div>
            </div>

            {/* Pagination pill (bottom of bezel) */}
            <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[850px] px-4">
              <div className="flex items-center justify-between gap-2 px-9 py-3 rounded-full bg-[#031513]/95 border border-[#00c08b]/40 shadow-[0_20px_45px_rgba(0,192,139,0.35),inset_0_1.5px_1.5px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300">
                {SLIDES.map((s, i) => {
                  const active = i === current;
                  return (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="group flex flex-col items-center justify-center flex-1 py-0.5 transition-all duration-300 hover:scale-105"
                      aria-label={`Go to slide ${s.name}`}
                    >
                      <div className="relative flex items-center justify-center w-full">
                        {active ? (
                          <div className="h-2 w-20 rounded-full bg-gradient-to-r from-[#00c08b] to-[#84cc16] shadow-[0_0_15px_rgba(0,192,139,0.95)] transition-all duration-300" />
                        ) : (
                          <div className="h-2.5 w-2.5 rounded-full bg-[#00c08b]/50 border border-[#00c08b]/35 shadow-[0_0_8px_rgba(0,192,139,0.25)] group-hover:bg-[#00c08b] group-hover:scale-125 transition-all duration-300" />
                        )}
                      </div>
                      {active ? (
                        <span className="text-[9.5px] tracking-[0.16em] uppercase mt-1.5 transition-all duration-300 font-extrabold text-[#00c08b] animate-fade-in-scale">
                          {SHORT_NAMES[i]}
                        </span>
                      ) : (
                        <span className="text-[9.5px] tracking-[0.16em] uppercase mt-1.5 transition-all duration-300 font-extrabold text-transparent select-none">
                          {SHORT_NAMES[i]}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        {/* Bottom footer */}
        <footer className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5">
          {/* CUSTOMIZE 5: bottom watermark text */}
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#80b6a1]/85 font-bold select-none font-mono">
            NowForge // EP01 · Change Risk Analyzer
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#80b6a1]/85 font-bold">
            <span className="hidden md:inline text-[#80b6a1]/40">←/→ navigate</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-[#80b6a1]/30" />
            <span className="text-[#00c08b] font-extrabold">
              {String(current + 1).padStart(2, '0')}
            </span>
            <span>/ {String(SLIDES.length).padStart(2, '0')}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
```

---

## 4. The Slide Shell Pattern

Every slide is a zero-prop (or `{ next }`-only) component that fills `h-full w-full` inside the bezel. Use this skeleton as the starting point for every new slide.

```tsx
import { Sparkles } from 'lucide-react'; // example icons

export default function SlideExample(/* { next }: { next: () => void } */) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900">
      {/* === BACKGROUND LAYER === */}
      {/* Spotlights */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-[#00c08b]/15 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#84cc16]/10 dark:bg-[#84cc16]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Animated brand gradient wash */}
      <div
        className="absolute inset-0 opacity-80 dark:opacity-100"
        style={{
          background: 'linear-gradient(120deg, rgba(0,192,139,0.08), rgba(128,182,161,0.06), rgba(41,62,64,0.04), rgba(0,192,139,0.08))',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 14s ease infinite',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,12,11,0.6)_100%)] z-0" />

      {/* Grid pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(128,182,161,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(128,182,161,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
        }}
      />

      {/* === CONTENT LAYER === */}
      <div className="relative z-10 h-full w-full px-10 sm:px-16 py-8 flex flex-col">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-[#030c0b]/40 backdrop-blur-md border border-slate-200 dark:border-[#80b6a1]/25 shadow-sm animate-fade-in-up self-start">
          <Sparkles className="h-3.5 w-3.5 text-[#00c08b] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-[#009e72] dark:text-[#80b6a1] uppercase">
            Kicker text
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#132c2a] dark:text-white animate-fade-in-up mt-4" style={{ animationDelay: '80ms' }}>
          Slide Title.
        </h2>

        {/* Body */}
        <p className="max-w-2xl text-base sm:text-lg text-[#2b4c48] dark:text-slate-300 leading-relaxed font-semibold animate-fade-in-up mt-3" style={{ animationDelay: '180ms' }}>
          Slide body copy goes here.
        </p>

        {/* ... your slide-specific content ... */}
      </div>
    </div>
  );
}
```

### Layout rules

- **No scrolling.** The slide must fit `h-full` of the bezel (~810px tall, 1440px wide max). If content overflows, scale font sizes down or split into two slides.
- **Padding:** Use `px-10 sm:px-16` horizontally and `py-6` to `py-10` vertically. Adjust if the slide has a header/footer bar.
- **Grid:** For two-column slides use `grid grid-cols-12 gap-6` and split as `col-span-7 / col-span-5` or `col-span-8 / col-span-4`.
- **Stagger:** Stack entrance animations with `animationDelay: ${i * 80 + 100}ms`.
- **Light + dark:** Every color class must have a `dark:` variant. Test both before reporting done.

---

## 5. Reference Slide — `src/components/SlideHero.tsx`

The Hero is the most pattern-dense slide. Use it as the model for: animated kinetic titles, kicker badges, mock code panels with sequenced states, stat pills, floating chips, particle background.

```tsx
import { useEffect, useState } from 'react';
import { Play, ArrowRight, Sparkles, Zap, ShieldCheck, Cpu, Bell } from 'lucide-react';

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => {
    const left = (i * 37) % 100;
    const top = (i * 53) % 100;
    const size = 2 + (i % 4);
    const dx = ((i * 17) % 200) - 100;
    const dy = -120 - ((i * 23) % 180);
    const delay = (i % 9) * 0.8;
    const duration = 12 + (i % 7);
    return { left, top, size, dx, dy, delay, duration, i };
  });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.i}
          className="absolute rounded-full bg-forge-400/50 dark:bg-ember-400/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            // @ts-expect-error css vars
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            animation: `drift ${p.duration}s ease-in ${p.delay}s infinite`,
            boxShadow: '0 0 16px rgba(0, 192, 139, 0.5)',
          }}
        />
      ))}
    </div>
  );
}

function CodePreview() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % 4), 1600);
    return () => clearInterval(t);
  }, []);
  const steps = [
    { label: 'step_one', state: 'ok' },
    { label: 'step_two', state: 'ok' },
    { label: 'step_three', state: 'ok' },
    { label: 'step_four (Supervised)', state: 'wait' },
  ];
  return (
    <div className="relative rounded-[20px] border border-slate-200/60 dark:border-[#80b6a1]/15 bg-white/90 dark:bg-[#030c0b]/80 backdrop-blur-2xl shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '900ms' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/50 dark:border-white/5 bg-slate-55/60 dark:bg-white/[0.03]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400 dark:bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00c08b] dark:bg-[#00c08b]/80" />
        </div>
        <div className="flex-1 text-center font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 uppercase font-bold">
          terminal.title
        </div>
      </div>
      <div className="px-5 py-5 font-mono text-xs leading-[1.8] text-slate-700 dark:text-slate-300 space-y-2.5">
        <div className="font-semibold text-[#132c2a] dark:text-white">
          <span className="text-slate-400 font-bold">›</span>{' '}
          <span className="text-[#00c08b] font-bold">obj</span>.invoke(<span className="text-[#84cc16] font-bold">"INPUT"</span>)
        </div>
        {steps.map((s, i) => {
          const done = i < tick;
          const active = i === tick;
          return (
            <div key={s.label} className="flex items-center gap-3">
              <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-[#00c08b] shadow-[0_0_8px_rgba(0,192,139,0.5)]' : active ? 'bg-[#84cc16] animate-pulse shadow-[0_0_8px_rgba(132,204,22,0.6)]' : 'bg-slate-300 dark:bg-slate-700'}`} />
              <span className={done ? 'text-slate-400 dark:text-slate-500 line-through' : active ? 'text-[#132c2a] dark:text-white font-bold' : 'text-slate-400 dark:text-slate-500'}>
                {s.label}
              </span>
              {s.state === 'wait' && active && (
                <span className="ml-auto text-[10px] uppercase tracking-wider text-amber-500 font-bold animate-pulse">
                  awaiting
                </span>
              )}
            </div>
          );
        })}
        <div className="pt-3 border-t border-slate-200/50 dark:border-white/5 mt-3 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#84cc16] animate-pulse" />
          <span className="text-slate-500 dark:text-[#80b6a1]/60 font-semibold">
            status: <span className="text-[#00c08b] font-extrabold">ready</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function StatPill({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <div
      className="group relative overflow-hidden px-4 py-2 rounded-[14px] bg-gradient-to-br from-white/95 to-slate-50/80 dark:from-white/[0.04] dark:to-transparent border border-slate-200/70 dark:border-[#80b6a1]/15 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/[0.05] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative font-mono text-[20px] font-extrabold text-[#00c08b] leading-none animate-count-up" style={{ animationDelay: `${delay + 200}ms` }}>
        {value}
      </div>
      <div className="relative text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 mt-1">
        {label}
      </div>
    </div>
  );
}

export default function SlideHero() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900">
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-[#00c08b]/15 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#84cc16]/10 dark:bg-[#84cc16]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      <div
        className="absolute inset-0 opacity-80 dark:opacity-100"
        style={{
          background: 'linear-gradient(120deg, rgba(0,192,139,0.08), rgba(128,182,161,0.06), rgba(41,62,64,0.04), rgba(0,192,139,0.08))',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 14s ease infinite',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,12,11,0.6)_100%)] z-0" />
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] z-0" style={{ backgroundImage: 'linear-gradient(rgba(128,182,161,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(128,182,161,0.8) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)' }} />

      <Particles />

      {/* Top-right project badge */}
      <div className="absolute top-6 right-6 sm:top-7 sm:right-8 z-30 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 dark:bg-[#030c0b]/80 border border-slate-200/90 dark:border-emerald-500/20 text-[13px] font-extrabold tracking-tight backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 max-w-max select-none group">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-[#00c08b] opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-[#00c08b] shadow-[0_0_10px_rgba(0,192,139,0.7)]" />
        </span>
        <span className="text-slate-400 dark:text-[#80b6a1]/60 font-black uppercase text-[8.5px] tracking-[0.2em]">Project:</span>
        <span className="font-extrabold text-[#009e72] dark:text-emerald-400 tracking-tight text-[12.5px]">Project Name Here</span>
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-800 mx-0.5" />
        <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em] text-[#009e72]/80 dark:text-[#80b6a1]/70">
          live build
        </span>
      </div>

      <div className="relative z-10 h-full w-full px-12 sm:px-18 lg:px-24 py-4 sm:py-5 grid grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="col-span-12 lg:col-span-7 space-y-3.5">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-[#030c0b]/40 backdrop-blur-md border border-slate-200 dark:border-[#80b6a1]/25 shadow-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#00c08b] animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00c08b]" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Episode 01 · Live Presentation
            </span>
          </div>

          {/* Kinetic title with cursive accent — see Dancing Script font on line 3 */}
          <h1 className="font-black tracking-tighter leading-[1.05] text-5xl sm:text-6xl lg:text-[4.3rem] xl:text-[4.9rem] flex flex-col gap-1.5">
            <div className="overflow-hidden pb-0.5">
              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <span className="text-[#132c2a] dark:text-white">Headline line 1</span>
              </div>
            </div>
            <div className="overflow-hidden pb-0.5">
              <div className="animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                <span className="text-[#132c2a] dark:text-white">Headline line 2</span>
              </div>
            </div>
            {/* Cursive accent line — keep Dancing Script and rotate */}
            <div className="overflow-visible select-none py-1 relative z-20 leading-none">
              <div className="animate-fade-in-up -mt-2 -mb-2" style={{ animationDelay: '360ms' }}>
                <span
                  className="relative z-30 text-[#84cc16] dark:text-[#a3e635] text-[5rem] sm:text-[6.2rem] lg:text-[7.5rem] xl:text-[8.5rem] tracking-wide font-bold rotate-[-2.5deg] inline-block drop-shadow-[0_8px_16px_rgba(132,204,22,0.35)] dark:drop-shadow-[0_12px_24px_rgba(163,230,53,0.55)] cursor-default transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Accent
                </span>
              </div>
            </div>
            <div className="overflow-hidden pb-0.5">
              <div className="flex items-baseline gap-3.5 animate-fade-in-up" style={{ animationDelay: '480ms' }}>
                <span className="text-[#132c2a] dark:text-white">in</span>
                <span className="font-sans text-[#00c08b] dark:text-[#00c08b] tracking-tighter drop-shadow-[0_2px_8px_rgba(0,192,139,0.2)] font-black text-[4.3rem] lg:text-[4.9rem] leading-none">20</span>
                <span className="text-[#132c2a] dark:text-white">minutes.</span>
              </div>
            </div>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg lg:text-[1.1rem] text-[#2b4c48] dark:text-slate-300 leading-relaxed animate-fade-in-up font-semibold" style={{ animationDelay: '700ms' }}>
            Subhead body copy. Keep it 1-2 sentences. Use{' '}
            <span className="font-mono text-[#009e72] font-black bg-[#009e72]/10 dark:bg-white/[0.04] border dark:border-white/[0.03] px-2 py-0.5 rounded">code spans</span>{' '}
            sparingly for emphasis.
          </p>

          {/* Split CTA button */}
          <div className="flex flex-wrap items-center gap-6 pt-3 animate-fade-in-up" style={{ animationDelay: '820ms' }}>
            <div className="flex items-stretch rounded-2xl overflow-hidden shadow-[0_15px_35px_-4px_rgba(0,192,139,0.4)] hover:scale-[1.03] transition-all duration-300 border border-[#00c08b]/40">
              <div className="relative bg-[#009e72] text-white px-6 py-4 flex items-center gap-4 cursor-pointer select-none">
                <span className="h-8.5 w-8.5 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Play className="h-4 w-4 fill-[#009e72] text-[#009e72] ml-0.5" />
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#a8ffd4]">PRIMARY</div>
                  <div className="text-sm sm:text-[15px] font-black tracking-tight text-white flex items-center gap-1.5">
                    Primary action <span className="animate-pulse text-[#84cc16]">⚡</span>
                  </div>
                </div>
              </div>
              <div className="w-[1.5px] bg-[#009e72]/40" />
              <a href="#" target="_blank" rel="noreferrer" className="bg-[#84cc16] hover:bg-[#77b810] text-[#031513] px-6 py-4 flex items-center gap-2.5 transition-colors font-black text-sm sm:text-[15px] tracking-tight cursor-pointer">
                <Bell className="h-5 w-5 text-[#031513] animate-bounce" strokeWidth={2.8} />
                Secondary
              </a>
            </div>

            <button className="group rounded-2xl px-6 py-4.5 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 font-black text-[#132c2a] dark:text-slate-200 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 shadow-md text-sm">
              Tertiary
              <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1.5 transition-transform text-[#009e72]" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Right column — code preview + stats + floating chips */}
        <div className="col-span-12 lg:col-span-5 relative hidden lg:block perspective-[1000px] pl-6">
          <div className="relative transform-gpu transition-transform duration-700">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#00c08b]/15 to-[#80b6a1]/10 rounded-[40px] blur-3xl animate-breathe pointer-events-none" />
            <CodePreview />

            <div className="grid grid-cols-3 gap-4 mt-6 max-w-[480px]">
              <StatPill value="20" label="Min build" delay={950} />
              <StatPill value="4" label="Tools" delay={1050} />
              <StatPill value="1" label="Supervised" delay={1150} />
            </div>

            <div className="absolute -top-4 -left-8 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float">
              <div className="h-7 w-7 rounded-lg bg-[#00c08b]/10 grid place-items-center">
                <Cpu className="h-4 w-4 text-[#00c08b]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">Chip one</span>
            </div>
            <div className="absolute -bottom-6 -right-6 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float-slow">
              <div className="h-7 w-7 rounded-lg bg-[#84cc16]/10 grid place-items-center">
                <ShieldCheck className="h-4 w-4 text-[#84cc16]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">Chip two</span>
            </div>
            <div className="absolute top-1/3 -right-10 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200/80 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="h-7 w-7 rounded-lg bg-[#80b6a1]/10 grid place-items-center">
                <Zap className="h-4 w-4 text-[#80b6a1]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">Chip three</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 6. Snippet Catalog

Compact, copy-pasteable patterns to assemble new slides quickly. All snippets respect light + dark mode.

### Kicker badge (slide section label)

```tsx
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00c08b]/10 dark:bg-[#00c08b]/15 border border-[#00c08b]/20 animate-fade-in-up">
  <Zap className="h-3.5 w-3.5 text-[#00c08b] animate-pulse" />
  <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#00c08b] font-black">
    Section label
  </span>
</div>
```

### Glassmorphic card

```tsx
<div className="rounded-[22px] border border-slate-200/80 dark:border-[#80b6a1]/15 bg-gradient-to-br from-white/95 to-slate-50/50 dark:from-[#030c0b]/80 dark:to-ink-950/20 backdrop-blur-md p-6 shadow-sm">
  {/* content */}
</div>
```

### Stat pill (animated metric)

```tsx
<div className="px-4 py-2 rounded-[14px] bg-gradient-to-br from-white/95 to-slate-50/80 dark:from-white/[0.04] dark:to-transparent border border-slate-200/70 dark:border-[#80b6a1]/15 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
  <div className="font-mono text-[20px] font-extrabold text-[#00c08b] leading-none animate-count-up">42</div>
  <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 mt-1">label</div>
</div>
```

### Floating chip (label with icon — absolute positioned over a hero panel)

```tsx
<div className="absolute -top-4 -left-8 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float">
  <div className="h-7 w-7 rounded-lg bg-[#00c08b]/10 grid place-items-center">
    <Cpu className="h-4 w-4 text-[#00c08b]" strokeWidth={2.5} />
  </div>
  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">Chip label</span>
</div>
```

### Animated step indicator (sequenced ticks)

```tsx
const steps = ['step_one', 'step_two', 'step_three'];
const [tick, setTick] = useState(0);
useEffect(() => {
  const t = setInterval(() => setTick(v => (v + 1) % (steps.length + 1)), 1600);
  return () => clearInterval(t);
}, []);

return (
  <div className="space-y-2 font-mono text-xs">
    {steps.map((s, i) => {
      const done = i < tick;
      const active = i === tick;
      return (
        <div key={s} className="flex items-center gap-3">
          <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-[#00c08b] shadow-[0_0_8px_rgba(0,192,139,0.5)]' : active ? 'bg-[#84cc16] animate-pulse' : 'bg-slate-300 dark:bg-slate-700'}`} />
          <span className={done ? 'text-slate-400 line-through' : active ? 'text-[#132c2a] dark:text-white font-bold' : 'text-slate-400'}>{s}</span>
        </div>
      );
    })}
  </div>
);
```

### Terminal / code panel (with traffic lights)

```tsx
<div className="rounded-[20px] border border-slate-200/60 dark:border-[#80b6a1]/15 bg-white/90 dark:bg-[#030c0b]/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/50 dark:border-white/5">
    <div className="flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#00c08b]" />
    </div>
    <div className="flex-1 text-center font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 uppercase font-bold">
      terminal.title
    </div>
  </div>
  <div className="px-5 py-5 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2.5">
    {/* lines */}
  </div>
</div>
```

### Animated checklist item (Prereqs-style)

```tsx
const [checked, setChecked] = useState(false);

<div
  onClick={() => setChecked(!checked)}
  className={`p-5 rounded-[22px] border cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg ${
    checked
      ? 'border-[#00c08b] bg-white/95 dark:bg-[#031d17]/85 shadow-[0_12px_28px_rgba(0,192,139,0.08)] ring-2 ring-[#00c08b]/10'
      : 'border-slate-200/80 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]'
  }`}
>
  <div className="flex items-start justify-between">
    <span className="font-black text-sm text-[#132c2a] dark:text-white">Item title</span>
    <div className={`h-6 w-6 rounded-lg border-2 grid place-items-center transition-all ${checked ? 'bg-[#00c08b] border-[#00c08b] shadow-[0_0_8px_rgba(0,192,139,0.5)]' : 'bg-white dark:bg-[#061211] border-slate-300 dark:border-white/15'}`}>
      {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={4.5} style={{ animation: 'check-pop 500ms cubic-bezier(0.34,1.56,0.64,1) both' }} />}
    </div>
  </div>
</div>
```

### Confetti burst (CTA-style celebration)

```tsx
// state
const [confetti, setConfetti] = useState<Array<{id:number;cx:number;cy:number;cr:number;color:string;size:number;delay:number;duration:number;shape:'square'|'rect'}>>([]);
const idRef = useRef(0);

const fire = () => {
  const palette = ['#00c08b', '#80b6a1', '#84cc16', '#ffffff', '#1b2d2f'];
  const pieces = Array.from({ length: 48 }, () => {
    idRef.current += 1;
    const angle = Math.random() * Math.PI * 2;
    const force = 220 + Math.random() * 260;
    return {
      id: idRef.current,
      cx: Math.cos(angle) * force,
      cy: Math.sin(angle) * force - 100,
      cr: (Math.random() - 0.5) * 1200,
      color: palette[Math.floor(Math.random() * palette.length)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.15,
      duration: 1.4 + Math.random() * 1.0,
      shape: Math.random() > 0.5 ? 'square' : 'rect' as const,
    };
  });
  setConfetti(pieces);
};

// render
<div className="pointer-events-none absolute inset-0 overflow-visible z-30">
  {confetti.map((p) => (
    <span
      key={p.id}
      className="absolute top-1/2 left-1/2"
      style={{
        width: p.shape === 'rect' ? p.size * 0.6 : p.size,
        height: p.size,
        backgroundColor: p.color,
        borderRadius: 2,
        // @ts-expect-error css vars
        '--cx': `${p.cx}px`, '--cy': `${p.cy}px`, '--cr': `${p.cr}deg`,
        animation: `confetti ${p.duration}s cubic-bezier(0.2,0.8,0.2,1) ${p.delay}s forwards`,
      }}
    />
  ))}
</div>
```

### Radial readiness gauge (SVG)

```tsx
const checkedCount = 3;
const total = 4;
const radius = 35;
const strokeWidth = 5;
const circumference = 2 * Math.PI * radius;
const dashOffset = circumference - (circumference * checkedCount) / total;

<svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="readyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00c08b" />
      <stop offset="100%" stopColor="#10b981" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r={radius} strokeWidth={strokeWidth} className="fill-none stroke-slate-200 dark:stroke-white/[0.04]" />
  <circle cx="50" cy="50" r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={dashOffset} strokeLinecap="round" className="fill-none stroke-[url(#readyGrad)] transition-all duration-700 ease-out" />
</svg>
```

### Process flow chevrons (Next-Experience-style)

```tsx
const stages = ['New', 'Assess', 'Authorize', 'Scheduled', 'Implement', 'Review', 'Closed'];
const currentStage = 'New';

<div className="flex items-center w-full gap-1.5 text-[8.5px] font-black uppercase tracking-wider">
  {stages.map((s) => {
    const isCurrent = s === currentStage;
    return (
      <div
        key={s}
        className={`relative flex items-center justify-center px-4 py-1.5 flex-1 min-w-[72px] ${
          isCurrent
            ? 'bg-[#00c08b] text-white font-extrabold shadow-sm'
            : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 font-bold'
        }`}
        style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)' }}
      >
        {s}
      </div>
    );
  })}
</div>
```

---

## 7. Visual Reference Cheat Sheet

### Color tokens (use these exact hex values everywhere)

| Purpose | Hex | Use |
|---|---|---|
| Primary brand emerald | `#00c08b` | Buttons, active states, highlights, glows |
| Deep brand | `#009e72` | Hover state of `#00c08b`, secondary headings |
| Lime accent | `#84cc16` | Secondary buttons, accent highlights |
| Muted brand | `#80b6a1` | Secondary text, mono-uppercase labels |
| Dark green text | `#132c2a` | Headlines in light mode |
| Body text dark | `#2b4c48` | Body copy in light mode |
| Canvas dark | `bg-ink-900` (#061211) | Slide background, dark mode |
| Canvas deepest | `bg-ink-950` (#030c0b) | Page background |

### Typography scale

| Element | Class | Notes |
|---|---|---|
| Hero headline | `text-5xl sm:text-6xl lg:text-[4.3rem] xl:text-[4.9rem] font-black tracking-tighter leading-[1.05]` | |
| Slide H2 | `text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight` | |
| Slide H3 | `text-xl font-black` | Card titles |
| Body | `text-base sm:text-lg leading-relaxed font-semibold` | |
| Caption | `text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold font-mono` | Watermarks, kickers |
| Tiny label | `text-[8.5px] font-bold uppercase tracking-wider` | Form labels, micro-copy |
| Cursive accent | `font-bold` + `style={{ fontFamily: "'Dancing Script', cursive" }}` + `rotate-[-2.5deg]` | One-line creative title accent |

### Animation utility quick-pick

| Animation | Use when |
|---|---|
| `animate-fade-in` | Generic fade |
| `animate-fade-in-up` | Hero copy, paragraphs, badges entering |
| `animate-fade-in-scale` | Cards, badges popping in |
| `animate-pulse-glow` | Logo / hero spotlight |
| `animate-pulse-ring` | Ping rings on status dots |
| `animate-breathe` | Background spotlights, hero panels |
| `animate-float` / `animate-float-slow` | Floating chips/badges |
| `animate-shimmer` (via `.shimmer-mask`) | Button shine, "live" states |
| `animate-count-up` | Numeric stats appearing |
| `animate-check-pop` (`style={{ animation }}`) | Checkbox tick reveal |
| `animate-spin-slow` | Orbital decorations |

### Stagger pattern

```tsx
items.map((item, i) => (
  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${100 + i * 80}ms` }}>
    {/* ... */}
  </div>
))
```

### Common spacing

- Outer slide padding: `px-10 sm:px-16 py-6` to `py-10`
- Card padding: `p-5` to `p-7`
- Section gaps: `gap-4` to `gap-8`
- Title to body: `mt-2` to `mt-4`
