import { useState } from 'react';
import {
  Wrench,
  Bot,
  FileText,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
  Database,
  Workflow,
  MessageSquare,
  Layers,
  FileCheck2,
  GitBranch,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

type Card = {
  n: string;
  name: string;
  kicker: string;
  tag: string;
  Icon: LucideIcon;
  chips: { label: string; Icon: LucideIcon }[];
  metric: { value: string; label: string };
  accentFrom: string;
  accentTo: string;
  glow: string;
  ring: string;
};

const CARDS: Card[] = [
  {
    n: '01',
    name: 'AIRA Self-Heal',
    kicker: 'Incident Intelligence',
    tag: 'AI clarifies, enriches, recalls and heals incidents — end to end with confidence governance.',
    Icon: Wrench,
    chips: [
      { label: 'Conversational clarify', Icon: MessageSquare },
      { label: 'PI enrichment', Icon: Brain },
      { label: 'Historical recall', Icon: Database },
      { label: 'Self-heal flows', Icon: Workflow },
    ],
    metric: { value: '25–45%', label: 'MTTR reduction' },
    accentFrom: '#00c08b',
    accentTo: '#34d399',
    glow: 'rgba(0,192,139,0.55)',
    ring: 'rgba(0,192,139,0.25)',
  },
  {
    n: '02',
    name: 'AIRA AI Assistant',
    kicker: 'Contextual Ops Copilot',
    tag: 'A real-time AI assistant embedded inside the Incident workspace for every support engineer.',
    Icon: Bot,
    chips: [
      { label: 'Summarize incident', Icon: Sparkles },
      { label: 'Generate resolution', Icon: FileCheck2 },
      { label: 'Draft customer update', Icon: MessageSquare },
      { label: '7-day memory', Icon: Layers },
    ],
    metric: { value: '40–70%', label: 'Review effort ↓' },
    accentFrom: '#10b981',
    accentTo: '#84cc16',
    glow: 'rgba(132,204,22,0.55)',
    ring: 'rgba(132,204,22,0.25)',
  },
  {
    n: '03',
    name: 'AIRA Document Assistant',
    kicker: 'SDLC Docs Automation',
    tag: 'One click on a closed Update Set generates Design, Runbook, LLD, Test Cases, KT and CAB docs.',
    Icon: FileText,
    chips: [
      { label: 'Update Set intelligence', Icon: GitBranch },
      { label: 'Schema-driven AI', Icon: ShieldCheck },
      { label: 'Parallel generation', Icon: Boxes },
      { label: 'Native ServiceNow', Icon: Workflow },
    ],
    metric: { value: '8–10×', label: 'Faster docs' },
    accentFrom: '#34d399',
    accentTo: '#80b6a1',
    glow: 'rgba(128,182,161,0.55)',
    ring: 'rgba(128,182,161,0.25)',
  },
];

function SuiteCard({ card, idx, hovered, setHovered }: {
  card: Card;
  idx: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const isHovered = hovered === idx;
  const isDimmed = hovered !== null && hovered !== idx;
  const baseRotate = idx === 0 ? 5 : idx === 2 ? -5 : 0;
  const baseLift = idx === 1 ? -12 : 0;

  const transform = isHovered
    ? 'perspective(1800px) rotateY(0deg) rotateX(4deg) translateY(-24px) translateZ(60px) scale(1.05)'
    : `perspective(1800px) rotateY(${baseRotate}deg) rotateX(4deg) translateY(${baseLift}px) translateZ(0)`;

  return (
    <div
      onMouseEnter={() => setHovered(idx)}
      onMouseLeave={() => setHovered(null)}
      className="relative animate-fade-in-up flex"
      style={{
        animationDelay: `${200 + idx * 140}ms`,
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1), filter 400ms ease',
        filter: isDimmed ? 'saturate(0.5) brightness(0.92)' : 'none',
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-[36px] blur-3xl pointer-events-none transition-opacity duration-600"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${card.glow}, transparent 70%)`,
          opacity: isHovered ? 0.95 : 0.38,
        }}
      />

      {/* Card body */}
      <div
        className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-white to-slate-50/90 dark:from-[#061613] dark:to-[#030c0b] border shadow-[0_30px_70px_-20px_rgba(0,0,0,0.18),0_18px_40px_-18px_rgba(0,192,139,0.18)] dark:shadow-[0_30px_75px_-20px_rgba(0,0,0,0.65),0_18px_40px_-18px_rgba(0,192,139,0.32)] transition-colors duration-300 w-full flex flex-col justify-between"
        style={{
          borderColor: isHovered ? card.accentFrom : 'rgba(0,192,139,0.18)',
          boxShadow: isHovered
            ? `0 40px 90px -15px rgba(0,0,0,0.35), 0 0 0 2px ${card.accentFrom}, 0 10px 50px -10px ${card.glow}`
            : undefined,
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-2 w-full"
          style={{ background: `linear-gradient(90deg, ${card.accentFrom}, ${card.accentTo})` }}
        />

        {/* Giant background number watermark */}
        <span
          aria-hidden
          className="absolute right-0 -top-4 text-[12.5rem] font-black leading-none select-none pointer-events-none"
          style={{
            color: `${card.accentFrom}2b`, // elegant semi-transparent green fill
            WebkitTextStroke: `1.5px ${card.accentFrom}44`, // semi-transparent green stroke
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-0.08em',
          }}
        >
          {card.n}
        </span>

        {/* Diagonal shimmer overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `linear-gradient(120deg, transparent 30%, ${card.accentFrom}18 50%, transparent 70%)`,
            backgroundSize: '200% 200%',
            animation: isHovered ? 'gradient-shift 3s ease infinite' : 'none',
          }}
        />

        <div className="relative z-10 p-8 flex flex-col h-full min-h-[520px] justify-between">
          {/* Header: number badge + icon */}
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-white/[0.04] border border-slate-200 dark:border-[#80b6a1]/20 shadow-sm">
              <span className="h-2 w-2 rounded-full" style={{ background: card.accentFrom }} />
              <span className="font-mono text-[10.5px] font-black tracking-[0.3em] uppercase text-[#009e72] dark:text-[#80b6a1]">
                USE CASE · {card.n}
              </span>
            </div>

            <div
              className="relative h-15 w-15 rounded-2xl grid place-items-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${card.accentFrom}, ${card.accentTo})`,
                boxShadow: `0 12px 28px -6px ${card.glow}`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-50"
                style={{
                  background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6) 0%, transparent 50%)`,
                }}
              />
              <card.Icon className="relative h-8 w-8 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div>
            {/* Kicker */}
            <div className="mt-7 text-[12px] font-black tracking-[0.3em] uppercase text-[#009e72] dark:text-[#84cc16]">
              {card.kicker}
            </div>

            {/* Name */}
            <h3
              className="mt-2.5 text-[32px] leading-[1.05] font-black tracking-tight text-[#0c1e1c] dark:text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {card.name}
            </h3>

            {/* Tagline */}
            <p className="mt-4 text-[16px] leading-[1.55] font-semibold text-[#2b4c48] dark:text-slate-300/90">
              {card.tag}
            </p>

            {/* Capability chips */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {card.chips.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50/80 dark:bg-white/[0.025] border border-slate-200/70 dark:border-white/5 shadow-sm"
                >
                  <c.Icon className="h-4 w-4 flex-shrink-0" style={{ color: card.accentFrom }} strokeWidth={2.5} />
                  <span className="text-[11.5px] font-extrabold tracking-tight text-[#132c2a] dark:text-slate-200 truncate">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer: metric + CTA */}
          <div className="mt-8 pt-5 border-t border-dashed border-slate-200 dark:border-white/8 flex items-end justify-between">
            <div>
              <div
                className="font-mono text-[36px] font-black leading-none"
                style={{ color: card.accentFrom }}
              >
                {card.metric.value}
              </div>
              <div className="mt-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-[#80b6a1]/80">
                {card.metric.label}
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer"
              style={{
                background: isHovered ? card.accentFrom : 'transparent',
                color: isHovered ? '#ffffff' : card.accentFrom,
                border: `1.5px solid ${card.accentFrom}`,
              }}
            >
              Explore
              <ArrowRight
                className={`h-3.5 w-3.5 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`}
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SlideSuite() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900">
      {/* Background */}
      <div className="absolute top-[-10%] left-[-15%] w-[55%] h-[55%] bg-[#00c08b]/12 dark:bg-[#00c08b]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-[#84cc16]/10 dark:bg-[#84cc16]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      <div
        className="absolute inset-0 opacity-70 dark:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, rgba(0,192,139,0.06), rgba(128,182,161,0.05), rgba(41,62,64,0.03), rgba(0,192,139,0.06))',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 14s ease infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07] z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(128,182,161,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(128,182,161,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, transparent 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full px-12 sm:px-16 py-10 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-[#030c0b]/40 backdrop-blur-md border border-slate-200 dark:border-[#80b6a1]/25 shadow-sm animate-fade-in-up">
              <Sparkles className="h-3.5 w-3.5 text-[#00c08b] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.38em] text-[#009e72] dark:text-[#80b6a1] uppercase">
                The Suite · Three AIs · One Platform
              </span>
            </div>
            <h2
              className="text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-black tracking-tight leading-[1.02] text-[#0c1e1c] dark:text-white animate-fade-in-up"
              style={{ animationDelay: '80ms', fontFamily: "'Outfit', sans-serif" }}
            >
              Meet{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{
                  backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                AIRA's
              </span>{' '}
              three operational AIs.
            </h2>
            <p
              className="max-w-2xl text-[15px] sm:text-[16px] font-semibold text-[#2b4c48] dark:text-slate-300/90 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '180ms' }}
            >
              Each one solves a different pain point of ServiceNow operations — together they form an
              enterprise-safe, confidence-governed AI-Ops fabric.
            </p>
          </div>

          {/* Right-side mini status */}
          <div
            className="hidden lg:flex flex-col items-end gap-3 animate-fade-in-up"
            style={{ animationDelay: '120ms' }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/60 border border-slate-200 dark:border-[#80b6a1]/20 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-pulse" />
              <span className="font-mono text-[9px] font-black tracking-[0.3em] uppercase text-[#009e72] dark:text-[#80b6a1]">
                Live across 3 modules
              </span>
            </div>
            <div className="font-mono text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-slate-500 dark:text-[#80b6a1]/70 text-right">
              hover a card to focus →
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-9 mt-8 lg:mt-10 items-stretch">
          {CARDS.map((card, idx) => (
            <SuiteCard key={card.n} card={card} idx={idx} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>

        {/* Bottom strip — common foundation */}
        <div
          className="mt-7 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00c08b]/8 via-[#84cc16]/8 to-[#80b6a1]/8 dark:from-[#00c08b]/12 dark:via-[#84cc16]/10 dark:to-[#80b6a1]/12 border border-[#00c08b]/15 dark:border-[#80b6a1]/15 flex flex-wrap items-center justify-between gap-4 animate-fade-in-up"
          style={{ animationDelay: '700ms' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#00c08b] to-[#84cc16] grid place-items-center shadow-md">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-[12.5px] font-black text-[#0c1e1c] dark:text-white">
                Built on a shared, governed AI foundation
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#009e72] dark:text-[#80b6a1] mt-0.5">
                GenAI · Predictive Intelligence · Confidence Gates · Native ServiceNow
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { v: '100%', l: 'Native' },
              { v: '3', l: 'Modules' },
              { v: '0', l: 'External infra' },
            ].map((s) => (
              <div key={s.l} className="text-right">
                <div className="font-mono text-[18px] font-extrabold leading-none text-[#00c08b]">
                  {s.v}
                </div>
                <div className="text-[8.5px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-[#80b6a1]/80 mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
