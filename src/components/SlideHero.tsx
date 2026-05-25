import { useEffect, useState } from 'react';
import {
  Play,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Wrench,
  Bot,
  FileText,
  Cpu,
  Zap,
} from 'lucide-react';

function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => {
    const left = (i * 37) % 100;
    const top = (i * 53) % 100;
    const size = 2 + (i % 4);
    const dx = ((i * 17) % 220) - 110;
    const dy = -130 - ((i * 23) % 200);
    const delay = (i % 9) * 0.7;
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

type Step = { label: string; state: 'ok' | 'wait' };

function AiraTerminal() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % 5), 1500);
    return () => clearInterval(t);
  }, []);

  const steps: Step[] = [
    { label: 'aira.clarify(user_intent)', state: 'ok' },
    { label: 'aira.enrich(category, CI)', state: 'ok' },
    { label: 'aira.recall(similar_incidents)', state: 'ok' },
    { label: 'aira.recommend(resolution)', state: 'ok' },
    { label: 'aira.heal(autonomous_flow)', state: 'wait' },
  ];

  return (
    <div
      className="relative rounded-[20px] border border-slate-200/60 dark:border-[#80b6a1]/15 bg-white/90 dark:bg-[#030c0b]/85 backdrop-blur-2xl shadow-2xl overflow-hidden animate-fade-in-up"
      style={{ animationDelay: '900ms' }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/50 dark:border-white/5 bg-slate-50/60 dark:bg-white/[0.03]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400 dark:bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 dark:bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00c08b] dark:bg-[#00c08b]/80" />
        </div>
        <div className="flex-1 text-center font-mono text-[10px] tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 uppercase font-bold">
          aira.runtime · inc0034291
        </div>
        <span className="text-[8.5px] font-mono font-extrabold tracking-widest text-[#00c08b]">LIVE</span>
      </div>

      <div className="px-5 py-5 font-mono text-[11.5px] leading-[1.7] text-slate-700 dark:text-slate-300 space-y-2.5">
        <div className="font-semibold text-[#132c2a] dark:text-white">
          <span className="text-slate-400 font-bold">›</span>{' '}
          <span className="text-[#00c08b] font-bold">aira</span>.observe(
          <span className="text-[#84cc16] font-bold">"VPN_DOWN"</span>)
        </div>
        {steps.map((s, i) => {
          const done = i < tick;
          const active = i === tick;
          return (
            <div key={s.label} className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  done
                    ? 'bg-[#00c08b] shadow-[0_0_8px_rgba(0,192,139,0.55)]'
                    : active
                    ? 'bg-[#84cc16] animate-pulse shadow-[0_0_8px_rgba(132,204,22,0.6)]'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
              <span
                className={
                  done
                    ? 'text-slate-400 dark:text-slate-500 line-through'
                    : active
                    ? 'text-[#132c2a] dark:text-white font-bold'
                    : 'text-slate-400 dark:text-slate-500'
                }
              >
                {s.label}
              </span>
              {s.state === 'wait' && active && (
                <span className="ml-auto text-[9.5px] uppercase tracking-wider text-amber-500 font-bold animate-pulse">
                  governed
                </span>
              )}
              {done && (
                <span className="ml-auto text-[9.5px] uppercase tracking-wider text-[#00c08b] font-extrabold">
                  ok
                </span>
              )}
            </div>
          );
        })}
        <div className="pt-3 border-t border-slate-200/50 dark:border-white/5 mt-3 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#84cc16] animate-pulse" />
          <span className="text-slate-500 dark:text-[#80b6a1]/60 font-semibold">
            confidence: <span className="text-[#00c08b] font-extrabold">0.94</span> · status:{' '}
            <span className="text-[#00c08b] font-extrabold">healing</span>
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
      <div
        className="relative font-mono text-[20px] font-extrabold text-[#00c08b] leading-none animate-count-up"
        style={{ animationDelay: `${delay + 200}ms` }}
      >
        {value}
      </div>
      <div className="relative text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 mt-1">
        {label}
      </div>
    </div>
  );
}

export default function SlideHero({ next }: { next: () => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900">
      {/* Background spotlights */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-[#00c08b]/15 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#84cc16]/10 dark:bg-[#84cc16]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      <div
        className="absolute inset-0 opacity-80 dark:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, rgba(0,192,139,0.08), rgba(128,182,161,0.06), rgba(41,62,64,0.04), rgba(0,192,139,0.08))',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 14s ease infinite',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,12,11,0.6)_100%)] z-0" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(128,182,161,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(128,182,161,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
        }}
      />

      <Particles />

      {/* Top-right project badge */}
      <div className="absolute top-6 right-6 sm:top-7 sm:right-8 z-30 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 dark:bg-[#030c0b]/80 border border-slate-200/90 dark:border-emerald-500/20 text-[13px] font-extrabold tracking-tight backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 max-w-max select-none group">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-[#00c08b] opacity-75 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-[#00c08b] shadow-[0_0_10px_rgba(0,192,139,0.7)]" />
        </span>
        <span className="text-slate-400 dark:text-[#80b6a1]/60 font-black uppercase text-[8.5px] tracking-[0.2em]">
          Project:
        </span>
        <span className="font-extrabold text-[#009e72] dark:text-emerald-400 tracking-tight text-[12.5px]">
          AIRA · ServiceNow AI-Ops
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-800 mx-0.5" />
        <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em] text-[#009e72]/80 dark:text-[#80b6a1]/70">
          live showcase
        </span>
      </div>

      <div className="relative z-10 h-full w-full px-12 sm:px-18 lg:px-24 py-4 sm:py-5 grid grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left column */}
        <div className="col-span-12 lg:col-span-7 space-y-3.5">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-[#030c0b]/40 backdrop-blur-md border border-slate-200 dark:border-[#80b6a1]/25 shadow-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[#00c08b] animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00c08b]" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              AI-Ops · 3 Use Cases · Live Showcase
            </span>
          </div>

          {/* Kinetic title */}
          <h1 className="font-black tracking-tighter leading-[1.05] text-5xl sm:text-6xl lg:text-[4.3rem] xl:text-[4.9rem] flex flex-col gap-1.5">
            <div className="overflow-hidden pb-0.5">
              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <span className="text-[#132c2a] dark:text-white">Three AIs.</span>
              </div>
            </div>
            <div className="overflow-hidden pb-0.5">
              <div className="animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                <span className="text-[#132c2a] dark:text-white">One ServiceNow.</span>
              </div>
            </div>
            {/* AIRA wordmark — italic black sans, gradient fill, brand mark */}
            <div className="overflow-visible select-none py-2 relative z-20 leading-none">
              <div className="animate-fade-in-up -mt-1 -mb-1 relative inline-block" style={{ animationDelay: '360ms' }}>
                <span
                  aria-hidden
                  className="absolute inset-0 blur-2xl opacity-60 dark:opacity-80 bg-clip-text text-transparent text-[5.2rem] sm:text-[6.8rem] lg:text-[8.2rem] xl:text-[9.3rem] font-black italic leading-[0.9] tracking-[-0.07em]"
                  style={{
                    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                    backgroundImage: 'linear-gradient(110deg, #00c08b 0%, #34d399 45%, #84cc16 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  AIRA.
                </span>
                <span
                  className="relative z-30 bg-clip-text text-transparent text-[5.2rem] sm:text-[6.8rem] lg:text-[8.2rem] xl:text-[9.3rem] font-black italic leading-[0.9] tracking-[-0.07em] cursor-default transition-all duration-300 hover:scale-[1.04] inline-block"
                  style={{
                    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                    backgroundImage: 'linear-gradient(110deg, #00c08b 0%, #34d399 45%, #84cc16 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 6px 18px rgba(0,192,139,0.35))',
                  }}
                >
                  AIRA.
                </span>
                <span
                  aria-hidden
                  className="absolute left-[2px] right-[14%] -bottom-1 h-[6px] rounded-full opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #00c08b 0%, #84cc16 100%)',
                    boxShadow: '0 4px 18px rgba(0,192,139,0.55)',
                  }}
                />
              </div>
            </div>
            <div className="overflow-hidden pb-0.5">
              <div className="flex items-baseline gap-3.5 animate-fade-in-up" style={{ animationDelay: '480ms' }}>
                <span className="text-[#132c2a] dark:text-white">Zero</span>
                <span className="font-sans text-[#00c08b] dark:text-[#00c08b] tracking-tighter drop-shadow-[0_2px_8px_rgba(0,192,139,0.2)] font-black text-[4.3rem] lg:text-[4.9rem] leading-none">
                  ticket
                </span>
                <span className="text-[#132c2a] dark:text-white">toil.</span>
              </div>
            </div>
          </h1>

          <p
            className="max-w-2xl text-base sm:text-lg lg:text-[1.1rem] text-[#2b4c48] dark:text-slate-300 leading-relaxed animate-fade-in-up font-semibold"
            style={{ animationDelay: '700ms' }}
          >
            One AI assistant.{' '}
            <span className="font-mono text-[#009e72] font-black bg-[#009e72]/10 dark:bg-white/[0.04] border dark:border-white/[0.03] px-2 py-0.5 rounded">
              Heal · Assist · Author
            </span>{' '}
            — incident self-healing, agent copiloting and SDLC documentation, fully native to
            ServiceNow and governed by confidence.
          </p>

          {/* CTA */}
          <div
            className="flex flex-wrap items-center gap-6 pt-3 animate-fade-in-up"
            style={{ animationDelay: '820ms' }}
          >
            <button
              onClick={next}
              className="flex items-stretch rounded-2xl overflow-hidden shadow-[0_15px_35px_-4px_rgba(0,192,139,0.4)] hover:scale-[1.03] transition-all duration-300 border border-[#00c08b]/40"
            >
              <div className="relative bg-[#009e72] text-white px-6 py-4 flex items-center gap-4 cursor-pointer select-none">
                <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Play className="h-4 w-4 fill-[#009e72] text-[#009e72] ml-0.5" />
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#a8ffd4]">
                    BEGIN TOUR
                  </div>
                  <div className="text-sm sm:text-[15px] font-black tracking-tight text-white flex items-center gap-1.5">
                    Meet the three AIs{' '}
                    <span className="animate-pulse text-[#84cc16]">⚡</span>
                  </div>
                </div>
              </div>
              <div className="w-[1.5px] bg-[#009e72]/40" />
              <div className="bg-[#84cc16] hover:bg-[#77b810] text-[#031513] px-6 py-4 flex items-center gap-2.5 transition-colors font-black text-sm sm:text-[15px] tracking-tight cursor-pointer">
                <Zap className="h-5 w-5 text-[#031513] animate-pulse" strokeWidth={2.8} />
                Live demo
              </div>
            </button>

            <div className="group rounded-2xl px-6 py-4 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-white/10 font-black text-[#132c2a] dark:text-slate-200 flex items-center gap-2.5 shadow-md text-sm select-none">
              <ShieldCheck className="h-4 w-4 text-[#00c08b]" strokeWidth={2.8} />
              Enterprise-safe AI
              <ArrowRight
                className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#009e72]"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>

        {/* Right column — terminal + stats + chips */}
        <div className="col-span-12 lg:col-span-5 relative hidden lg:block perspective-[1000px] pl-6">
          <div className="relative transform-gpu transition-transform duration-700">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#00c08b]/15 to-[#80b6a1]/10 rounded-[40px] blur-3xl animate-breathe pointer-events-none" />
            <AiraTerminal />

            <div className="grid grid-cols-3 gap-4 mt-6 max-w-[480px]">
              <StatPill value="03" label="Use cases" delay={950} />
              <StatPill value="100%" label="Native SN" delay={1050} />
              <StatPill value="∞" label="Reuse memory" delay={1150} />
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -left-8 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float">
              <div className="h-7 w-7 rounded-lg bg-[#00c08b]/10 grid place-items-center">
                <Wrench className="h-4 w-4 text-[#00c08b]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">
                Heal · Incident IQ
              </span>
            </div>
            <div className="absolute -bottom-6 -right-6 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float-slow">
              <div className="h-7 w-7 rounded-lg bg-[#84cc16]/10 grid place-items-center">
                <FileText className="h-4 w-4 text-[#84cc16]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">
                Author · SDLC Docs
              </span>
            </div>
            <div
              className="absolute top-1/3 -right-10 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#030c0b]/95 backdrop-blur-xl border border-slate-200/80 dark:border-[#80b6a1]/25 shadow-xl flex items-center gap-2.5 animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="h-7 w-7 rounded-lg bg-[#80b6a1]/10 grid place-items-center">
                <Bot className="h-4 w-4 text-[#80b6a1]" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#132c2a] dark:text-white">
                Assist · Agent AI
              </span>
            </div>
            <div
              className="absolute -top-2 right-2 px-3 py-2 rounded-xl bg-gradient-to-br from-[#00c08b] to-[#009e72] shadow-xl flex items-center gap-2 animate-float"
              style={{ animationDelay: '0.6s' }}
            >
              <Cpu className="h-3.5 w-3.5 text-white" strokeWidth={2.8} />
              <span className="text-[9px] font-extrabold tracking-[0.18em] uppercase text-white">
                GenAI · PI · Orchestration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
