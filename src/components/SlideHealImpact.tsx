import { useEffect, useRef, useState } from 'react';
import {
  TrendingDown,
  Clock,
  ThumbsUp,
  Zap,
  ShieldCheck,
  Percent,
  Sparkles,
} from 'lucide-react';

function useAnimatedNumber(target: number, durationMs = 450) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    fromRef.current = value;
    startRef.current = performance.now();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const step = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = fromRef.current + (target - fromRef.current) * eased;
      setValue(v);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return Math.round(value);
}

export default function SlideHealImpact() {
  const [incidents, setIncidents] = useState(500);

  const targetHours = Math.round(incidents * 0.45 * 1.8);
  const targetSla = Math.round(incidents * 0.08);
  const targetHeals = Math.round(incidents * 0.30);

  const hoursSaved = useAnimatedNumber(targetHours);
  const slaBreachesAvoided = useAnimatedNumber(targetSla);
  const repetitiveHealed = useAnimatedNumber(targetHeals);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900 flex flex-col transition-colors duration-500">
      {/* Brand spotlights */}
      <div className="absolute top-[-12%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/15 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-12%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/12 dark:bg-[#84cc16]/14 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(128,182,161,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(128,182,161,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 flex-1 px-10 sm:px-14 py-8 flex flex-col justify-between overflow-hidden">

        {/* Header */}
        <div className="space-y-2 flex-shrink-0">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/55 backdrop-blur-md border border-[#00c08b]/25 shadow-sm animate-fade-in-up">
            <TrendingDown className="h-3.5 w-3.5 text-[#00c08b]" />
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Use Case 01 · Business Impact & ROI
            </span>
          </div>
          <h2
            className="text-[2.4rem] sm:text-[2.9rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up"
            style={{ animationDelay: '80ms', fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA Self-Heal ·{' '}
            <span
              className="bg-clip-text text-transparent italic"
              style={{ backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)' }}
            >
              Proven Business Value
            </span>
          </h2>
          <p className="max-w-4xl text-[14.5px] sm:text-[16px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Autonomous self-healing compresses operational toil, minimizes MTTR, and delivers immediate cost efficiency — native within ServiceNow.
          </p>
        </div>

        {/* Impact grid */}
        <div className="flex-1 grid grid-cols-12 gap-6 mt-5 items-stretch overflow-hidden min-h-[360px] max-h-[470px]">

          {/* Left: 3 Metric cards */}
          <div className="col-span-5 flex flex-col justify-between gap-3.5">
            {[
              {
                label: 'Mean Time To Resolve',
                value: '25 – 45%',
                desc: 'Proven resolutions auto-reused on active incidents.',
                Icon: Clock,
                from: '#00c08b',
                to: '#34d399',
              },
              {
                label: 'Clarification Effort',
                value: '40 – 60%',
                desc: 'Conversational clarifier gathers context at source.',
                Icon: ThumbsUp,
                from: '#10b981',
                to: '#84cc16',
              },
              {
                label: 'Categorization Accuracy',
                value: '50 – 70%',
                desc: 'Predictive Intelligence enriches Category, CI, Service.',
                Icon: Percent,
                from: '#00c08b',
                to: '#84cc16',
              },
            ].map((m, i) => (
              <div
                key={m.label}
                className="group relative flex-1 rounded-2xl border border-slate-200 dark:border-[#80b6a1]/15 bg-white/90 dark:bg-[#061613]/80 backdrop-blur-md p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-[#00c08b]/40 shadow-md animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${260 + i * 100}ms` }}
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-25 pointer-events-none group-hover:opacity-50 transition-opacity"
                  style={{ background: m.from }}
                />
                <div
                  className="h-14 w-14 rounded-2xl grid place-items-center text-white shadow-lg flex-shrink-0 relative"
                  style={{
                    background: `linear-gradient(135deg, ${m.from}, ${m.to})`,
                    boxShadow: `0 14px 28px -8px ${m.from}55`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-50" style={{ background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55) 0%, transparent 50%)' }} />
                  <m.Icon className="h-7 w-7 text-white relative" strokeWidth={2.4} />
                </div>
                <div className="min-w-0 relative">
                  <span className="block text-[9px] font-mono font-black uppercase tracking-[0.22em] text-[#009e72] dark:text-[#80b6a1]">
                    {m.label}
                  </span>
                  <span
                    className="text-[22px] font-black leading-tight block mt-0.5"
                    style={{
                      backgroundImage: `linear-gradient(110deg, ${m.from}, ${m.to})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {m.value}
                  </span>
                  <p className="text-[12px] font-bold text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: ROI Calculator */}
          <div className="col-span-7 rounded-2xl border-2 border-[#00c08b]/30 bg-gradient-to-br from-white via-white to-[#00c08b]/4 dark:from-[#040e0d] dark:via-[#061613] dark:to-[#00c08b]/8 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '320ms' }}>
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,192,139,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,192,139,0.6) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative">
              {/* Title */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center shadow-md shadow-[#00c08b]/20">
                    <Sparkles className="h-4.5 w-4.5 text-white animate-pulse" strokeWidth={2.5} />
                  </div>
                  <div className="leading-tight">
                    <span className="font-mono text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300 block">
                      Interactive ROI Calculator
                    </span>
                    <span className="text-[10px] font-black text-[#009e72] dark:text-[#80b6a1] tracking-wider">
                      drag the slider to model your environment
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[9px] px-2.5 py-1 rounded bg-[#00c08b]/10 border border-[#00c08b]/30 text-[#009e72] dark:text-[#00c08b] font-black uppercase tracking-[0.18em]">
                  live
                </span>
              </div>

              {/* Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-[13.5px] font-extrabold text-slate-800 dark:text-slate-200">
                    Monthly Incident Volume
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-[26px] font-mono font-black text-[#00c08b] bg-[#00c08b]/8 border border-[#00c08b]/30 px-3 py-0.5 rounded-lg leading-none"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {incidents.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-black uppercase text-[#009e72] dark:text-[#80b6a1] tracking-[0.18em]">
                      tickets
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min={100}
                  max={1000}
                  step={50}
                  value={incidents}
                  onChange={(e) => setIncidents(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer bg-slate-200 dark:bg-white/10 accent-[#00c08b]"
                  style={{
                    background: `linear-gradient(90deg, #00c08b 0%, #34d399 ${((incidents - 100) / 900) * 100}%, rgba(148,163,184,0.18) ${((incidents - 100) / 900) * 100}%, rgba(148,163,184,0.18) 100%)`,
                  }}
                />
                <div className="flex justify-between text-[9.5px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.22em] font-mono">
                  <span>100</span>
                  <span>250</span>
                  <span>500</span>
                  <span>750</span>
                  <span>1,000</span>
                </div>
              </div>

              {/* Result tiles */}
              <div className="grid grid-cols-3 gap-3.5 mt-5">
                {[
                  {
                    l: 'Hours Recovered',
                    v: `${hoursSaved.toLocaleString()}h`,
                    sub: 'qualification & routing',
                    accent: '#00c08b',
                  },
                  {
                    l: 'SLA Breaches Avoided',
                    v: slaBreachesAvoided.toLocaleString(),
                    sub: 'critical violations averted',
                    accent: '#84cc16',
                  },
                  {
                    l: 'Autonomous Heals',
                    v: repetitiveHealed.toLocaleString(),
                    sub: '30% auto-resolution rate',
                    accent: '#34d399',
                  },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="p-3.5 rounded-2xl border border-[#00c08b]/25 bg-white/90 dark:bg-[#040e0d]/85 text-center shadow-lg hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div
                      className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-25"
                      style={{ background: s.accent }}
                    />
                    <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.22em] relative">
                      {s.l}
                    </span>
                    <span
                      className="text-[28px] font-mono font-black block mt-1.5 leading-none tabular-nums relative"
                      style={{ color: s.accent, fontFeatureSettings: '"tnum"' }}
                    >
                      {s.v}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1.5 block relative leading-tight">
                      {s.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiator */}
            <div className="mt-4 p-3.5 rounded-2xl border border-[#84cc16]/30 bg-gradient-to-r from-[#84cc16]/8 to-[#00c08b]/5 dark:from-[#84cc16]/12 dark:to-[#00c08b]/10 flex items-center gap-3.5 relative overflow-hidden">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#84cc16] to-[#65a30d] grid place-items-center text-white flex-shrink-0 shadow-md shadow-[#84cc16]/25">
                <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.4} />
              </div>
              <div className="leading-snug min-w-0 flex-1">
                <span className="text-[12.5px] font-black text-[#0c1e1c] dark:text-white block">
                  Enterprise Differentiator · Confidence-Gated Rollout
                </span>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                  Multi-model governance gates ensure zero risk to production — not generic GPT logic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>Incident intelligence engine compresses MTTR automatically.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <Zap className="h-4 w-4 animate-pulse" /> 20 – 40% reduction in repetitive incidents handled manually.
          </span>
        </div>
      </div>
    </div>
  );
}
