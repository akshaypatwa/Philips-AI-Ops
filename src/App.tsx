import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, Sparkles } from 'lucide-react';

import SlideHero from './components/SlideHero';
import SlideSuite from './components/SlideSuite';
import SlideHealOverview from './components/SlideHealOverview';
import SlideHealImpact from './components/SlideHealImpact';
import SlideAssistantOverview from './components/SlideAssistantOverview';
import SlideAssistantImpact from './components/SlideAssistantImpact';
import SlideDocsOverview from './components/SlideDocsOverview';
import SlideDocsImpact from './components/SlideDocsImpact';
import SlideVision from './components/SlideVision';

type SlideDef = {
  name: string;
  kicker: string;
  Component: (props: { next: () => void }) => JSX.Element;
};

const SLIDES: SlideDef[] = [
  { name: 'Hero', kicker: 'Cold Open · AIRA', Component: SlideHero },
  { name: 'Suite', kicker: 'The Three AIs', Component: SlideSuite },
  { name: 'Heal · Build', kicker: 'Use Case 01 · Build', Component: SlideHealOverview },
  { name: 'Heal · Impact', kicker: 'Use Case 01 · Impact', Component: SlideHealImpact },
  { name: 'Assist · Build', kicker: 'Use Case 02 · Build', Component: SlideAssistantOverview },
  { name: 'Assist · Impact', kicker: 'Use Case 02 · Impact', Component: SlideAssistantImpact },
  { name: 'Docs · Build', kicker: 'Use Case 03 · Build', Component: SlideDocsOverview },
  { name: 'Docs · Impact', kicker: 'Use Case 03 · Impact', Component: SlideDocsImpact },
  { name: 'Vision', kicker: 'The Road Ahead', Component: SlideVision },
];

const SHORT_NAMES = ['HERO', 'SUITE', 'HEAL', 'HEAL+', 'ASSIST', 'ASSIST+', 'DOCS', 'DOCS+', 'VISION'];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(false);
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
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,192,139,0.18)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(rgba(0,192,139,0.1)_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />

        <header className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[#00c08b]/40 blur-md animate-pulse-glow" />
              <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-[#00c08b] to-[#84cc16] grid place-items-center shadow-lg shadow-[#00c08b]/30">
                <Sparkles className="h-5 w-5 text-white animate-pulse" strokeWidth={2.4} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-base sm:text-lg text-white">
                AI<span className="text-[#00c08b]">RA</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#80b6a1]/80 font-bold">
                Enterprise AI · ServiceNow Ops
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#031513]/85 backdrop-blur-md border border-[#80b6a1]/25 shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-ping" />
            <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#80b6a1]">
              AIRA · AI-OPS SHOWCASE
            </span>
          </div>

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

        <main className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-12 lg:px-16 pt-16 pb-16">
          <div className="relative w-full max-w-[1440px] h-[calc(100%-8px)] max-h-[810px] flex items-center justify-center">

            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#009e72] via-[#00c08b] to-[#84cc16] text-white text-[9.5px] font-black tracking-[0.25em] uppercase select-none shadow-[0_12px_24px_rgba(0,192,139,0.35),inset_0_1.5px_1.5px_rgba(255,255,255,0.45),0_2px_4px_rgba(0,0,0,0.15)] border border-[#00c08b]/40 backdrop-blur-md cursor-default transition-all duration-300 hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              SERVICENOW | AIRA
            </div>

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

            <div className="absolute -inset-[5px] rounded-[32px] opacity-100 blur-[10px] pointer-events-none -z-10" style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #00c08b 100%)', mixBlendMode: 'screen' }} />
            <div className="absolute -inset-[18px] rounded-[42px] opacity-70 blur-[30px] pointer-events-none -z-10" style={{ background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #00c08b 100%)', mixBlendMode: 'screen' }} />
            <div className="absolute -inset-[44px] rounded-[64px] opacity-45 blur-[70px] pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse at center, #10b981 0%, rgba(16,185,129,0.45) 60%, transparent 100%)', mixBlendMode: 'screen' }} />

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

        <footer className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#80b6a1]/85 font-bold select-none font-mono">
            AIRA // SERVICENOW AI-OPS · 3 USE CASES
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
