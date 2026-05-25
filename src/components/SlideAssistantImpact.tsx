import { useState } from 'react';
import {
  Bot,
  Percent,
  Zap,
  Gauge,
  Hourglass,
  Layers,
  Sparkles,
  Flame,
  Activity,
  Leaf,
  type LucideIcon,
} from 'lucide-react';

type Severity = 'high' | 'med' | 'low';

const TIMELINES: Record<Severity, { before: Record<string, number>; after: Record<string, number>; total: { before: number; after: number } }> = {
  high: {
    before: { Review: 12, Triage: 15, Update: 8, Close: 10 },
    after: { Review: 4, Triage: 5, Update: 3, Close: 3 },
    total: { before: 45, after: 15 },
  },
  med: {
    before: { Review: 8, Triage: 10, Update: 6, Close: 6 },
    after: { Review: 2.5, Triage: 3.5, Update: 2, Close: 2 },
    total: { before: 30, after: 10 },
  },
  low: {
    before: { Review: 5, Triage: 6, Update: 3, Close: 4 },
    after: { Review: 1.5, Triage: 2, Update: 1.2, Close: 1.3 },
    total: { before: 18, after: 6 },
  },
};

const SEVERITY_META: Record<Severity, { label: string; Icon: LucideIcon; color: string }> = {
  high: { label: 'High', Icon: Flame, color: '#ef4444' },
  med: { label: 'Medium', Icon: Activity, color: '#f59e0b' },
  low: { label: 'Low', Icon: Leaf, color: '#65a30d' },
};

export default function SlideAssistantImpact() {
  const [ticketSeverity, setTicketSeverity] = useState<Severity>('high');
  const data = TIMELINES[ticketSeverity];
  const percentSaved = Math.round(((data.total.before - data.total.after) / data.total.before) * 100);

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
            <Gauge className="h-3.5 w-3.5 text-[#00c08b]" />
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Use Case 02 · Business Impact & Efficiency
            </span>
          </div>
          <h2
            className="text-[2.4rem] sm:text-[2.9rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up"
            style={{ animationDelay: '80ms', fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA Assistant ·{' '}
            <span
              className="bg-clip-text text-transparent italic"
              style={{ backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)' }}
            >
              Hyper-Productive Support
            </span>
          </h2>
          <p className="max-w-4xl text-[14.5px] sm:text-[16px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Support engineers focus on resolution logic while AIRA compresses the cognitive load of reading history, summarizing tickets, and drafting closure records.
          </p>
        </div>

        {/* Impact grid */}
        <div className="flex-1 grid grid-cols-12 gap-6 mt-5 items-stretch overflow-hidden min-h-[360px] max-h-[470px]">

          {/* Left: metric cards */}
          <div className="col-span-5 flex flex-col justify-between gap-3.5">
            {[
              {
                label: 'Manual Incident Review',
                value: '40 – 70%',
                desc: 'Instant work-note and timeline summaries.',
                Icon: Bot,
                from: '#10b981',
                to: '#34d399',
              },
              {
                label: 'Documentation Overhead',
                value: '30 – 50%',
                desc: 'Automated closure summaries and next-step actions.',
                Icon: Percent,
                from: '#34d399',
                to: '#84cc16',
              },
              {
                label: 'Conversational Memory',
                value: '7 Days',
                desc: 'Full context maintained across shifts and handovers.',
                Icon: Layers,
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

          {/* Right: timeline compressor */}
          <div className="col-span-7 rounded-2xl border-2 border-[#00c08b]/30 bg-gradient-to-br from-white via-white to-[#00c08b]/4 dark:from-[#040e0d] dark:via-[#061613] dark:to-[#00c08b]/8 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '320ms' }}>
            <div
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,192,139,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,192,139,0.6) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3.5 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center shadow-md shadow-[#00c08b]/20">
                    <Hourglass className="h-4.5 w-4.5 text-white animate-spin-slow" strokeWidth={2.5} />
                  </div>
                  <div className="leading-tight">
                    <span className="font-mono text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300 block">
                      Lifecycle Compressor
                    </span>
                    <span className="text-[10px] font-black text-[#009e72] dark:text-[#80b6a1] tracking-wider">
                      pick a severity — see the compression
                    </span>
                  </div>
                </div>

                <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/8">
                  {(Object.keys(SEVERITY_META) as Severity[]).map((sev) => {
                    const m = SEVERITY_META[sev];
                    const isActive = ticketSeverity === sev;
                    return (
                      <button
                        key={sev}
                        onClick={() => setTicketSeverity(sev)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.18em] flex items-center gap-1.5 transition-all duration-300 ${
                          isActive
                            ? 'bg-white dark:bg-white/[0.08] shadow-md text-[#0c1e1c] dark:text-white scale-[1.04]'
                            : 'text-slate-500 dark:text-slate-400 hover:scale-105'
                        }`}
                        style={isActive ? { color: m.color } : undefined}
                      >
                        <m.Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bars */}
              <div className="space-y-5">
                {/* Before */}
                <div>
                  <div className="flex justify-between items-center text-[12.5px] font-extrabold text-slate-700 dark:text-slate-200 mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      Traditional Lifecycle
                    </span>
                    <span className="font-mono font-black text-rose-500 text-[15px] tabular-nums">
                      {data.total.before}m
                    </span>
                  </div>
                  <div className="h-9 rounded-xl bg-slate-100 dark:bg-white/[0.04] overflow-hidden flex text-[10px] font-mono font-black text-white text-center shadow-inner border border-slate-200 dark:border-white/5">
                    {Object.entries(data.before).map(([step, val], i) => (
                      <div
                        key={step}
                        className="grid place-items-center truncate px-1 border-r border-black/10 last:border-r-0 relative"
                        style={{
                          width: `${(val / data.total.before) * 100}%`,
                          background: `linear-gradient(180deg, ${
                            ['#fb7185', '#f43f5e', '#e11d48', '#be123c'][i]
                          }, ${['#f43f5e', '#e11d48', '#be123c', '#9f1239'][i]})`,
                        }}
                      >
                        <span className="relative drop-shadow-sm">
                          {step} · {val}m
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="flex justify-between items-center text-[12.5px] font-extrabold text-[#009e72] dark:text-[#00c08b] mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 rounded-full bg-[#00c08b] animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00c08b]" />
                      </span>
                      AIRA Copilot Assisted
                    </span>
                    <span className="font-mono font-black text-[#00c08b] text-[15px] tabular-nums">
                      {data.total.after}m
                    </span>
                  </div>
                  <div className="h-9 rounded-xl bg-[#00c08b]/8 dark:bg-[#00c08b]/12 border border-[#00c08b]/30 overflow-hidden flex text-[10px] font-mono font-black text-white text-center shadow-lg shadow-[#00c08b]/20 relative">
                    <div className="absolute inset-0 shimmer-mask opacity-25 pointer-events-none" />
                    {Object.entries(data.after).map(([step, val], i) => (
                      <div
                        key={step}
                        className="grid place-items-center truncate px-1 border-r border-black/10 last:border-r-0 relative"
                        style={{
                          width: `${(val / data.total.after) * 100}%`,
                          background: `linear-gradient(180deg, ${
                            ['#34d399', '#10b981', '#059669', '#047857'][i]
                          }, ${['#10b981', '#059669', '#047857', '#065f46'][i]})`,
                        }}
                      >
                        <span className="relative drop-shadow-sm">
                          {step} · {val}m
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center justify-center gap-2 -mt-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00c08b]/40 to-transparent" />
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00c08b] to-[#34d399] text-white font-mono text-[10px] font-black tracking-[0.18em] uppercase shadow-md shadow-[#00c08b]/30 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    {data.total.before - data.total.after}m saved
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00c08b]/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Bottom callouts */}
            <div className="mt-4 grid grid-cols-2 gap-3.5 relative">
              {[
                { l: 'Lifecycle Compression', v: `${percentSaved}%`, sub: 'faster end-to-end', accent: '#00c08b' },
                { l: 'Daily Shift Time Saved', v: '1.5 – 2.5h', sub: 'per engineer / shift', accent: '#84cc16' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-3.5 rounded-2xl border border-[#00c08b]/30 bg-white/90 dark:bg-[#040e0d]/85 text-center shadow-lg hover:scale-[1.04] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  <div
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-25"
                    style={{ background: s.accent }}
                  />
                  <span className="block text-[9px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.22em] relative">
                    {s.l}
                  </span>
                  <span
                    className="text-[28px] font-mono font-black block mt-1 leading-none tabular-nums relative"
                    style={{ color: s.accent }}
                  >
                    {s.v}
                  </span>
                  <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 mt-1 block relative">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>AIRA Copilot operates natively inside the Incident Workspace form.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <Zap className="h-4 w-4 animate-pulse" /> 30 – 50% reduction in support documentation effort.
          </span>
        </div>
      </div>
    </div>
  );
}
