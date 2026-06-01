import { useState } from 'react';
import {
  Compass,
  Bot,
  ShieldCheck,
  Workflow,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

type Phase = {
  n: string;
  title: string;
  kicker: string;
  desc: string;
  status: string;
  statusColor: string;
  statusGlow: string;
  Icon: LucideIcon;
  bulletList: string[];
};

const PHASES: Phase[] = [
  {
    n: 'PHASE 01',
    title: 'Intelligent Assistance',
    kicker: 'AI-Ops Core Foundation',
    desc: 'Empowers engineers with contextual copilot actions and enriches ticket classification data.',
    status: 'Active · Running',
    statusColor: '#00c08b',
    statusGlow: 'rgba(0,192,139,0.45)',
    Icon: Bot,
    bulletList: [
      'Conversational Incident Clarification',
      'Predictive Field Classification (PI)',
      'Embedded Incident Workspace Panel',
      'SDLC Document Assistant Suite',
    ],
  },
  {
    n: 'PHASE 02',
    title: 'Closed-Loop Automation',
    kicker: 'Autonomous Operations',
    desc: 'Bypasses manual L1/L2 investigation for repetitive, low-risk incident categories — safely.',
    status: 'Rolling Out',
    statusColor: '#84cc16',
    statusGlow: 'rgba(132,204,22,0.45)',
    Icon: Workflow,
    bulletList: [
      'Multi-Layer Confidence Governance',
      'IntegrationHub Autonomic Flows',
      'Proven Historical Fix Reuse',
      'Automated Resolution Verification',
    ],
  },
  {
    n: 'PHASE 03',
    title: 'AI-Ops Ecosystem',
    kicker: 'Proactive Prevention',
    desc: 'Evolves ServiceNow into a self-monitoring, self-repairing operational fabric at scale.',
    status: 'Long-Term Vision',
    statusColor: '#34d399',
    statusGlow: 'rgba(52,211,153,0.45)',
    Icon: Sparkles,
    bulletList: [
      'Self-Optimizing Workflow Generation',
      'Proactive Anomaly Triggers',
      'Zero-Toil Self-Healing at Source',
      'Multi-Model Cross-Platform Sync',
    ],
  },
];

export default function SlideVision() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900 flex flex-col transition-colors duration-500 text-slate-800 dark:text-white">
      {/* Brand spotlights */}
      <div className="absolute top-[-12%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/12 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-12%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/10 dark:bg-[#84cc16]/14 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
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

      <div className="relative z-10 flex-1 px-10 sm:px-14 py-7 flex flex-col justify-between overflow-hidden">

        {/* Header */}
        <div className="space-y-2 flex-shrink-0">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/55 backdrop-blur-md border border-[#00c08b]/25 shadow-sm animate-fade-in-up">
            <Compass className="h-3.5 w-3.5 text-[#00c08b] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              The Road Ahead · Vision & Roadmap
            </span>
          </div>
          <h2
            className="text-[2.3rem] sm:text-[2.8rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up font-sora"
            style={{ animationDelay: '80ms' }}
          >
            Evolving ServiceNow into an{' '}
            <span
              className="bg-clip-text text-transparent italic"
              style={{ backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)' }}
            >
              Autonomous Ecosystem
            </span>
          </h2>
          <p className="max-w-3xl text-[13px] sm:text-[14.5px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            From reactive ticketing to an AI-driven operational brain — compressing toil, sharpening data, hardening security.
          </p>
        </div>

        {/* Timeline + Cards */}
        <div className="flex-1 flex flex-col mt-6 overflow-hidden">

          {/* Roadmap timeline rail */}
          <div className="relative h-12 mx-6 mb-2 flex-shrink-0">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 rounded-full bg-slate-200 dark:bg-white/10" />
            <div
              className="absolute top-1/2 left-0 h-1.5 -translate-y-1/2 rounded-full"
              style={{
                width: '60%',
                background: 'linear-gradient(90deg, #00c08b 0%, #84cc16 65%, rgba(52,211,153,0.4) 100%)',
                boxShadow: '0 0 20px rgba(0,192,139,0.6)',
              }}
            />
            {PHASES.map((p, i) => {
              const pos = i === 0 ? '16.66%' : i === 1 ? '50%' : '83.33%';
              const isComplete = i === 0;
              const isActive = i === 1;
              return (
                <div
                  key={p.n}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                  style={{ left: pos }}
                >
                  <div
                    className="relative h-7 w-7 rounded-full grid place-items-center shadow-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${p.statusColor}, ${p.statusColor}cc)`,
                      boxShadow: `0 0 0 4px rgba(255,255,255,0.85), 0 0 0 5px ${p.statusColor}, 0 10px 24px -6px ${p.statusGlow}`,
                      transform: hoveredPhase === i ? 'scale(1.18)' : 'scale(1)',
                    }}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: p.statusColor, opacity: 0.45 }}
                      />
                    )}
                    {isComplete ? (
                      <CheckCircle2 className="relative h-4 w-4 text-white" strokeWidth={3} />
                    ) : (
                      <span className="relative font-mono text-[9px] font-black text-white">{i + 1}</span>
                    )}
                  </div>
                  <span
                    className="font-mono text-[8.5px] font-black uppercase tracking-[0.22em] mt-1 whitespace-nowrap"
                    style={{ color: p.statusColor }}
                  >
                    {i + 1 < 3 ? (i === 0 ? 'Today' : 'Q3 · 2026') : '2027+'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Phase cards */}
          <div className="flex-1 grid grid-cols-3 gap-5 items-stretch overflow-hidden min-h-[370px] max-h-[470px]">
            {PHASES.map((p, idx) => {
              const isHovered = hoveredPhase === idx;
              const isDimmed = hoveredPhase !== null && hoveredPhase !== idx;
              return (
                <div
                  key={p.n}
                  onMouseEnter={() => setHoveredPhase(idx)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  className="relative rounded-2xl border-2 transition-all duration-500 bg-white/95 dark:bg-[#040e0d]/85 backdrop-blur-md p-5 flex flex-col justify-between shadow-lg overflow-hidden animate-fade-in-up"
                  style={{
                    animationDelay: `${260 + idx * 100}ms`,
                    borderColor: isHovered ? p.statusColor : 'rgba(0,192,139,0.18)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? `0 28px 56px -16px rgba(0,0,0,0.18), 0 0 0 1px ${p.statusColor}, 0 0 38px -6px ${p.statusGlow}`
                      : undefined,
                    filter: isDimmed ? 'opacity(0.7) saturate(0.85)' : 'none',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: `linear-gradient(90deg, ${p.statusColor}, ${p.statusColor}99)` }}
                  />

                  {/* Glow halo */}
                  {isHovered && (
                    <div
                      className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                      style={{ background: p.statusColor }}
                    />
                  )}

                  {/* Watermark phase number */}
                  <span
                    aria-hidden
                    className="absolute right-2 -bottom-6 text-[7rem] font-black leading-none select-none pointer-events-none opacity-[0.06] dark:opacity-[0.10] font-sora animate-fade-in"
                    style={{
                      color: p.statusColor,
                      letterSpacing: '-0.08em',
                    }}
                  >
                    {idx + 1}
                  </span>

                  <div className="relative space-y-3.5">
                    <div className="flex items-start justify-between">
                      <div className="min-w-0">
                        <span className="font-mono text-[9px] font-black tracking-[0.26em] uppercase text-slate-400 dark:text-slate-500 block">
                          {p.n}
                        </span>
                        <h3
                          className="text-[20px] font-black text-[#0c1e1c] dark:text-white leading-tight mt-1 font-sora"
                        >
                          {p.title}
                        </h3>
                        <span
                          className="text-[10.5px] font-black uppercase tracking-[0.18em] block mt-1"
                          style={{ color: p.statusColor }}
                        >
                          {p.kicker}
                        </span>
                      </div>

                      <div
                        className="h-11 w-11 rounded-xl grid place-items-center flex-shrink-0 shadow-md relative ml-2"
                        style={{
                          background: `linear-gradient(135deg, ${p.statusColor}, ${p.statusColor}cc)`,
                          boxShadow: `0 10px 22px -6px ${p.statusGlow}`,
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl opacity-50" style={{ background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55) 0%, transparent 50%)' }} />
                        <p.Icon className="h-5.5 w-5.5 text-white relative" strokeWidth={2.4} />
                      </div>
                    </div>

                    <p className="text-[12.5px] font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 dark:border-white/5 pt-3">
                      {p.bulletList.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-start gap-2 text-[11.5px] font-bold text-[#0c1e1c] dark:text-slate-300"
                        >
                          <span
                            className="h-3.5 w-3.5 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                            style={{ background: `${p.statusColor}22`, border: `1.5px solid ${p.statusColor}` }}
                          >
                            <CheckCircle2 className="h-2.5 w-2.5" style={{ color: p.statusColor }} strokeWidth={3} />
                          </span>
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer status pill */}
                  <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-white/8 flex items-center justify-between relative">
                    <span className="text-[9px] font-mono font-black uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                      Status
                    </span>
                    <span
                      className="px-3 py-1 rounded-full font-mono text-[9.5px] font-black uppercase tracking-[0.18em] text-white shadow-md relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${p.statusColor}, ${p.statusColor}dd)`,
                        boxShadow: `0 6px 14px -4px ${p.statusGlow}`,
                      }}
                    >
                      {idx === 1 && (
                        <span className="absolute inset-0 shimmer-mask opacity-40 pointer-events-none" />
                      )}
                      <span className="relative">{p.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0 font-sans">
          <span>AIRA · an enterprise-safe operational AI fabric for ServiceNow.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <ShieldCheck className="h-4 w-4" /> Confidence-governed · 100% Native Orchestration
          </span>
        </div>
      </div>
    </div>
  );
}
