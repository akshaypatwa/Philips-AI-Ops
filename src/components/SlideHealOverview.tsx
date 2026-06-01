import { useEffect, useState, useRef } from 'react';
import {
  Sparkles,
  MessageCircleQuestion,
  Database,
  Lightbulb,
  ShieldCheck,
  Play,
  Pause,
  User,
  Workflow,
  Cpu,
  Terminal,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Activity,
  History,
  type LucideIcon,
} from 'lucide-react';

type Stage = {
  n: string;
  name: string;
  short: string;
  Icon: LucideIcon;
};

const STAGES: Stage[] = [
  { n: '01', name: 'Portal Raise', short: 'User logs ticket on Service Portal', Icon: MessageCircleQuestion },
  { n: '02', name: 'AIRA Clarify', short: 'AI asks 6 conversational questions', Icon: Sparkles },
  { n: '03', name: 'User Reply', short: 'Structured context returned in chat', Icon: User },
  { n: '04', name: 'Predictive IQ', short: 'Dual ML models + diagnostic scripts', Icon: Database },
  { n: '05', name: 'LLM Resolve', short: 'GenAI reasons, updates, closes', Icon: Lightbulb },
];

const STAGE_NARRATIVE = [
  'Akshay Patwa raises an incident on the Philips Service Portal. The description "Unable to access incident" is vague — AIRA takes over.',
  'AIRA intercepts in real time and posts six diagnostic questions directly on the portal to gather structured context.',
  'Akshay replies on the portal with exact parameters: scoped-app error, office network, blank screen, blocking sprint review.',
  'AIRA aggregates the chat, fires two Predictive Intelligence models and three diagnostic scripts to triangulate the cause.',
  'The GenAI LLM reasons over the workspace context, drafts resolution notes, updates the ticket, and closes the incident — autonomously.',
];

export default function SlideHealOverview() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActive((v) => (v + 1) % STAGES.length);
      }, 5500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const selectStage = (idx: number) => {
    setIsPlaying(false);
    setActive(idx);
  };
  const togglePlay = () => setIsPlaying((v) => !v);
  const nextStage = () => { setIsPlaying(false); setActive((v) => (v + 1) % STAGES.length); };
  const prevStage = () => { setIsPlaying(false); setActive((v) => (v - 1 + STAGES.length) % STAGES.length); };

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900 flex flex-col text-slate-800 dark:text-white transition-colors duration-500">
      {/* Brand spotlights */}
      <div className="absolute top-[-12%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/15 dark:bg-[#00c08b]/22 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-12%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/10 dark:bg-[#84cc16]/14 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40%] h-[40%] bg-[#34d399]/5 dark:bg-[#34d399]/8 rounded-full blur-[120px] pointer-events-none z-0" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,192,139,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,192,139,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, transparent 80%)',
        }}
      />

      <div className="relative z-10 flex-1 px-10 sm:px-14 py-6 flex flex-col justify-between overflow-hidden">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-shrink-0">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/70 backdrop-blur-md border border-slate-200 dark:border-[#00c08b]/30 shadow-md animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#00c08b] animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00c08b]" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#84cc16] uppercase">
                Use Case 01 · Self-Healing Flow
              </span>
            </div>
            <h2
              className="text-[2.3rem] sm:text-[2.7rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up"
              style={{ animationDelay: '80ms', fontFamily: "'Sora', sans-serif" }}
            >
              AIRA{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: 'linear-gradient(110deg, #34d399, #84cc16 55%, #00c08b)' }}
              >
                Self-Heals
              </span>{' '}
              an incident — live.
            </h2>
          </div>

          {/* Player controls */}
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-2xl bg-white/90 dark:bg-[#030c0b]/75 border border-slate-200 dark:border-[#00c08b]/25 shadow-xl backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <button
              onClick={prevStage}
              className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 grid place-items-center hover:bg-[#00c08b]/15 hover:border-[#00c08b]/40 transition-all"
              aria-label="Previous stage"
            >
              <ChevronLeft className="h-4 w-4 text-[#00c08b]" strokeWidth={3} />
            </button>
            <button
              onClick={togglePlay}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00c08b] to-[#34d399] text-white font-black text-[10px] tracking-[0.18em] uppercase flex items-center gap-2 hover:opacity-95 shadow-md shadow-[#00c08b]/40"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 fill-white text-white" />
                  PAUSE
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                  PLAY
                </>
              )}
            </button>
            <button
              onClick={nextStage}
              className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 grid place-items-center hover:bg-[#00c08b]/15 hover:border-[#00c08b]/40 transition-all"
              aria-label="Next stage"
            >
              <ChevronRight className="h-4 w-4 text-[#00c08b]" strokeWidth={3} />
            </button>
            <div className="ml-1 px-2.5 py-1 rounded-md bg-[#00c08b]/15 border border-[#00c08b]/35">
              <span className="font-mono text-[9px] font-black tracking-[0.22em] uppercase text-[#009e72] dark:text-[#84cc16]">
                {active + 1} / {STAGES.length}
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="flex-1 grid grid-cols-12 gap-6 mt-5 items-stretch overflow-hidden min-h-[420px] max-h-[510px]">

          {/* LEFT: Stage stepper */}
          <div className="col-span-4 flex flex-col gap-3">
            <div className="space-y-1.5 flex-1">
              {STAGES.map((s, i) => {
                const isSelected = i === active;
                const isCompleted = i < active;
                return (
                  <button
                    key={s.n}
                    onClick={() => selectStage(i)}
                    className="group w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 relative overflow-hidden bg-white dark:bg-[#030c0b]/60"
                    style={{
                      borderColor: isSelected
                        ? '#00c08b'
                        : isCompleted
                        ? 'rgba(0,192,139,0.35)'
                        : 'rgba(148,163,184,0.25)',
                      boxShadow: isSelected ? '0 12px 28px -10px rgba(0,192,139,0.5)' : '0 4px 12px -5px rgba(0,0,0,0.05)',
                    }}
                  >
                    {isSelected && (
                      <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#00c08b] to-[#84cc16]" />
                    )}
                    <div
                      className="h-9 w-9 rounded-xl grid place-items-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background:
                          isSelected || isCompleted
                            ? 'linear-gradient(135deg, #00c08b, #34d399)'
                            : 'rgba(148,163,184,0.12)',
                        boxShadow: isSelected ? '0 8px 18px -6px rgba(0,192,139,0.65)' : undefined,
                      }}
                    >
                      <s.Icon
                        className="h-4.5 w-4.5 transition-colors"
                        style={{ color: isSelected || isCompleted ? '#ffffff' : '#009e72' }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[8.5px] font-black uppercase tracking-[0.18em] ${isSelected || isCompleted ? 'text-[#009e72] dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`}>
                          STAGE {s.n}
                        </span>
                        {isCompleted && (
                          <CheckCircle2 className="h-3 w-3 text-[#00c08b]" strokeWidth={3} />
                        )}
                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-pulse" />
                        )}
                      </div>
                      <div
                        className={`text-[13.5px] font-black tracking-tight leading-tight truncate ${
                          isSelected ? 'text-[#0c1e1c] dark:text-white' : isCompleted ? 'text-slate-800 dark:text-slate-200' : 'text-slate-550 dark:text-slate-400'
                        }`}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {s.name}
                      </div>
                      <div className={`text-[10px] font-bold truncate mt-0.5 ${
                        isSelected ? 'text-slate-500 dark:text-slate-350' : isCompleted ? 'text-slate-550 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        {s.short}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Narrative card */}
            <div className="p-3.5 rounded-2xl border border-[#00c08b]/30 bg-gradient-to-br from-[#00c08b]/14 to-[#84cc16]/8 shadow-lg shadow-[#00c08b]/10 relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 shimmer-mask opacity-[0.10] pointer-events-none" />
              <div className="flex items-center gap-1.5 font-mono text-[8.5px] font-black uppercase text-[#009e72] dark:text-[#84cc16] tracking-[0.2em] mb-1.5">
                <Sparkles className="h-3 w-3 animate-pulse" /> Flow State · Live Simulator
              </div>
              <div key={active} className="text-[11.5px] font-bold text-slate-800 dark:text-slate-100 leading-snug animate-fade-in">
                {STAGE_NARRATIVE[active]}
              </div>
            </div>
          </div>

          {/* RIGHT: Live workspace screen */}
          <div className="col-span-8 flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(0,192,139,0.12)]">
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00c08b]" />
                </div>
                <div className="h-5 w-px bg-slate-800 mx-1" />
                <span className="font-mono text-[9.5px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {active < 3 ? 'philipsqa.service-now.com · service portal' : 'philipsqa.service-now.com · workspace · AIRA brain'}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] font-black">
                <span className="text-[#00c08b] px-2 py-0.5 rounded bg-[#00c08b]/15 border border-[#00c08b]/35">
                  INC4881324
                </span>
                <span className="text-slate-400 uppercase tracking-[0.15em]">
                  STATE:{' '}
                  <span className={active === 4 ? 'text-[#00c08b]' : 'text-slate-350'}>
                    {active === 4 ? 'RESOLVED' : 'NEW'}
                  </span>
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-hidden relative bg-[#f8fafc] text-slate-800">

              {/* STAGES 1–3: Service Portal chat */}
              {active <= 2 && (
                <div key={`chat-${active}`} className="grid grid-cols-12 gap-4 h-full animate-fade-in">
                  <div className="col-span-8 flex flex-col bg-white rounded-2xl border border-slate-200 p-3.5 shadow-sm overflow-hidden">
                    <div className="flex-1 overflow-auto space-y-3 pr-1 slide-scroll text-[12px]">
                      <div className="px-3 py-2 bg-[#00c08b]/8 border border-[#00c08b]/20 rounded-xl text-[11.5px] font-bold text-[#009e72] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <Activity className="h-3.5 w-3.5 text-[#00c08b] flex-shrink-0" />
                          <span className="truncate">Incident: <span className="font-extrabold text-slate-900">Unable to access incident</span></span>
                        </div>
                        <span className="font-mono text-[8.5px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-[#00c08b]/10 border border-[#00c08b]/20 text-[#009e72] flex-shrink-0">
                          P3 · NEW
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-slate-200 border border-slate-300 grid place-items-center text-slate-600 font-mono text-[10px] font-black flex-shrink-0">
                          AP
                        </div>
                        <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-tl-none p-3 font-semibold text-slate-800 leading-snug max-w-[88%]">
                          <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider mb-0.5">
                            Akshay Patwa · just now
                          </span>
                          "Unable to access incident"
                        </div>
                      </div>

                      {active >= 1 && (
                        <div className="flex items-start gap-2.5 animate-fade-in-up">
                          <div className="relative h-7 w-7 rounded-full bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center text-white font-mono text-[10px] font-black shadow-md flex-shrink-0">
                            <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.6} />
                            <span className="absolute inset-0 rounded-full ring-2 ring-[#00c08b]/30 animate-pulse-ring" />
                          </div>
                          <div className="bg-[#00c08b]/5 text-slate-800 rounded-2xl rounded-tl-none p-3.5 font-bold leading-relaxed border border-[#00c08b]/25 shadow-sm max-w-[88%] relative overflow-hidden">
                            <span className="block text-[8.5px] font-black text-[#009e72] uppercase tracking-[0.18em] mb-1.5 flex items-center gap-1.5">
                              <Sparkles className="h-3 w-3" /> AIRA · Support Assistant
                            </span>
                            <span className="text-[11.5px] text-slate-900">Hi Akshay — to accelerate resolution, please answer:</span>
                            <ol className="list-decimal list-inside mt-1.5 space-y-1 text-slate-700 font-semibold text-[10.5px]">
                              <li>Which ServiceNow module are you trying to access?</li>
                              <li>What exactly happens — error, blank screen, slow load?</li>
                              <li>Is this only for you, or your whole team?</li>
                              <li>Office network, VPN, or other environment?</li>
                              <li>Any troubleshooting already attempted?</li>
                              <li>Is it blocking business operations / deadlines?</li>
                            </ol>
                          </div>
                        </div>
                      )}

                      {active >= 2 && (
                        <div className="flex items-start gap-2.5 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                          <div className="h-7 w-7 rounded-full bg-slate-200 border border-slate-300 grid place-items-center text-slate-600 font-mono text-[10px] font-black flex-shrink-0">
                            AP
                          </div>
                          <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-tl-none p-3 font-bold text-slate-800 leading-snug max-w-[88%]">
                            <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider mb-1">
                              Akshay Patwa · just now
                            </span>
                            <div className="space-y-0.5 text-[10.5px] text-slate-700">
                              <div>1. Incident workspace list view.</div>
                              <div>2. Blank screen + scoped-app permission error.</div>
                              <div>3. Only me — teammates fine.</div>
                              <div>4. Office intranet, New York.</div>
                              <div>5. Chrome + Safari + cleared cache. No change.</div>
                              <div>6. Yes — blocking sprint ticket review.</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 border-t border-slate-250 pt-2.5 mt-2">
                      <input
                        type="text"
                        readOnly
                        placeholder={active === 2 ? 'Reply sent.' : 'Type your reply…'}
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-[11.5px] font-semibold outline-none text-slate-800 placeholder-slate-400"
                      />
                      <button className="h-8 px-4 rounded-xl bg-gradient-to-r from-[#00c08b] to-[#34d399] text-white font-black text-[10px] uppercase tracking-[0.15em] flex items-center justify-center shadow-md shadow-[#00c08b]/25">
                        Send
                      </button>
                    </div>
                  </div>

                  <div className="col-span-4 bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between text-[11.5px] shadow-sm">
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[8.5px] font-black text-slate-500 uppercase border-b border-slate-200 pb-2 mb-2 tracking-[0.18em]">
                        Ticket Details
                      </h4>
                      {[
                        { l: 'Number', v: 'INC4881324', mono: true },
                        { l: 'State', v: 'New', pill: 'amber' },
                        { l: 'Short description', v: 'Unable to access incident' },
                        { l: 'Service', v: 'SERVICENOW', mono: true },
                        { l: 'Affected User', v: 'Akshay Patwa' },
                      ].map((row) => (
                        <div key={row.l}>
                          <span className="block text-[8px] font-black text-slate-500 uppercase tracking-wider">
                            {row.l}
                          </span>
                          {row.pill === 'amber' ? (
                            <span className="inline-block mt-0.5 font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10.5px] border border-amber-250">
                              {row.v}
                            </span>
                          ) : (
                            <span className={`block ${row.mono ? 'font-mono' : ''} font-bold text-slate-800 truncate`}>
                              {row.v}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 bg-[#00c08b]/5 border border-[#00c08b]/20 rounded-xl text-[10px] leading-relaxed text-slate-650 font-semibold mt-3">
                      <span className="font-black text-[#009e72] block mb-1 font-mono text-[8.5px] uppercase tracking-[0.18em]">
                        AIRA Active
                      </span>
                      Conversational clarification running on portal.
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 4: Predictive AI */}
              {active === 3 && (
                <div className="grid grid-cols-12 gap-4 h-full animate-fade-in text-slate-800">
                  <div className="col-span-12 flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-[12.5px] font-black text-slate-800 uppercase tracking-[0.16em] flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-[#009e72]" /> Model Execution & Diagnostic Scripts
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#00c08b]/10 border border-[#00c08b]/30 text-[#009e72] animate-pulse font-black tracking-[0.18em] uppercase">
                      Harvesting…
                    </span>
                  </div>

                  <div className="col-span-6 p-3.5 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-md shadow-slate-100/50 flex flex-col">
                    <div className="flex justify-between items-center border-b border-slate-150 pb-1.5">
                      <span className="text-[11px] font-black text-[#009e72] flex items-center gap-1.5 font-mono tracking-[0.14em] uppercase">
                        <History className="h-4 w-4" /> Model 1 · Similar Incidents
                      </span>
                      <span className="text-[8.5px] font-mono font-black text-slate-500 uppercase tracking-[0.18em]">Top 3</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] flex-1">
                      {[
                        { id: 'INC0038421', t: 'ACL checks failure · user role sync', m: 94, tone: 'high' },
                        { id: 'INC0028162', t: 'Scoped app user access denial', m: 86, tone: 'mid' },
                        { id: 'INC0019281', t: 'Stale cache record · user session', m: 81, tone: 'low' },
                      ].map((r) => (
                        <div
                          key={r.id}
                          className="px-2.5 py-2 rounded-lg bg-slate-50/80 border border-slate-200 flex justify-between items-center font-bold text-slate-700 gap-3 relative overflow-hidden"
                        >
                          <span
                            className="absolute inset-y-0 left-0"
                            style={{
                              width: `${r.m}%`,
                              background: r.tone === 'high' ? 'rgba(0,192,139,0.08)' : r.tone === 'mid' ? 'rgba(132,204,22,0.06)' : 'rgba(128,182,161,0.04)',
                            }}
                          />
                          <span className="relative truncate">
                            <span className="font-mono font-black text-[#009e72]">{r.id}</span> — {r.t}
                          </span>
                          <span
                            className="relative text-[9.5px] font-mono font-black flex-shrink-0"
                            style={{ color: r.tone === 'high' ? '#009e72' : r.tone === 'mid' ? '#84cc16' : '#80b6a1' }}
                          >
                            {r.m}% MATCH
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-6 p-3.5 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-md shadow-slate-100/50 flex flex-col">
                    <div className="flex justify-between items-center border-b border-slate-150 pb-1.5">
                      <span className="text-[11px] font-black text-[#009e72] flex items-center gap-1.5 font-mono tracking-[0.14em] uppercase">
                        <Database className="h-4 w-4" /> Model 2 · Field Classifier
                      </span>
                      <span className="text-[8.5px] font-mono font-black text-slate-500 uppercase tracking-[0.18em]">Predictions</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] flex-1">
                      {[
                        { l: 'Category', v: 'Application', c: 95 },
                        { l: 'Subcategory', v: 'ServiceNow', c: 91 },
                        { l: 'Configuration Item', v: 'Incident Management', c: 96 },
                      ].map((r) => (
                        <div key={r.l} className="px-2.5 py-2 rounded-lg bg-slate-50/80 border border-slate-200 flex justify-between items-center gap-3">
                          <span className="text-slate-500 font-bold flex-shrink-0">{r.l}</span>
                          <span className="font-black text-slate-800 truncate">
                            {r.v}{' '}
                            <span className="text-[9px] font-mono text-[#009e72] font-black">({r.c}%)</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 p-3.5 bg-white border border-slate-200 rounded-2xl shadow-md shadow-slate-100/50">
                    <div className="flex justify-between items-center border-b border-slate-150 pb-1.5 mb-2.5">
                      <span className="text-[11px] font-black text-[#009e72] flex items-center gap-1.5 font-mono tracking-[0.14em] uppercase">
                        <Terminal className="h-4 w-4" /> Diagnostic Scripts · Back-end
                      </span>
                      <span className="text-[8.5px] font-mono font-black text-slate-500 uppercase tracking-[0.18em]">3 executed</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 text-[10.5px] font-bold">
                      {[
                        { l: 'Active User Check', s: 'ACTIVE · OK', tone: 'ok' },
                        { l: 'Support Group Member', s: 'WT Apps · YES', tone: 'ok' },
                        { l: 'itil_admin role sync', s: 'MISSING · FAIL', tone: 'fail' },
                      ].map((row) => (
                        <div
                          key={row.l}
                          className="px-2.5 py-2 rounded-lg flex items-center justify-between border"
                          style={{
                            borderColor: row.tone === 'fail' ? '#fca5a5' : '#a7f3d0',
                            background: row.tone === 'fail' ? '#fff5f5' : '#f0fdf4',
                          }}
                        >
                          <span className="text-slate-500 truncate">{row.l}</span>
                          <span
                            className={`font-mono font-black text-[10px] ${row.tone === 'fail' ? 'text-rose-600 animate-pulse' : 'text-[#009e72]'}`}
                          >
                            {row.s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 px-3.5 py-2.5 bg-gradient-to-r from-[#00c08b] via-[#34d399] to-[#84cc16] rounded-xl flex items-center justify-between font-black text-[12px] text-white shadow-lg shadow-[#00c08b]/25">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 animate-pulse" />
                      Aggregated context handed off to LLM Engine
                    </span>
                    <span className="font-mono text-[9.5px] bg-black/15 px-2 py-0.5 rounded tracking-[0.16em] uppercase">
                      conf 0.94
                    </span>
                  </div>
                </div>
              )}

              {/* STAGE 5: LLM resolution */}
              {active === 4 && (
                <div className="grid grid-cols-12 gap-3.5 h-full animate-fade-in text-slate-800">
                  <div className="col-span-12 flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-[12.5px] font-black text-slate-800 uppercase tracking-[0.16em] flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#009e72]" /> LLM Reasoner & ServiceNow Update
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#00c08b]/10 border border-[#00c08b]/30 text-[#009e72] font-black tracking-[0.18em] uppercase animate-pulse">
                      Resolved
                    </span>
                  </div>

                  <div className="col-span-12 p-4 bg-white border border-slate-200 rounded-2xl space-y-3 text-[12.5px] shadow-md shadow-slate-100/50">
                    <div>
                      <span className="block text-[8.5px] font-mono font-black uppercase text-[#009e72] tracking-[0.18em] mb-1">
                        Cause Determination
                      </span>
                      <p className="font-bold text-slate-700 leading-snug">
                        User criteria sync failure blocked{' '}
                        <span className="font-mono text-[#009e72] font-black">Akshay Patwa</span> from incident tables. Missing{' '}
                        <span className="font-mono text-rose-600 font-bold">itil_admin</span> role on WT Apps Servicedesk group.
                      </p>
                    </div>

                    <div className="border-t border-slate-150 pt-3">
                      <span className="block text-[8.5px] font-mono font-black uppercase text-[#009e72] tracking-[0.18em] mb-1">
                        Resolution Notes (Applied)
                      </span>
                      <p className="font-bold text-slate-800 leading-relaxed bg-[#00c08b]/5 p-3 rounded-xl border border-[#00c08b]/20 text-[11.5px]">
                        Mapped <span className="font-mono font-bold">itil_admin</span> permission to Akshay Patwa. Flushed
                        user-criteria cache. Verified access — workspace loads under 800ms.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-12 grid grid-cols-4 gap-3 text-[11px] font-semibold">
                    {[
                      { l: 'Category', v: 'Application' },
                      { l: 'Subcategory', v: 'ServiceNow' },
                      { l: 'Assignment', v: 'WT Apps Servicedesk' },
                      { l: 'State', v: 'Resolved · Auto', highlight: true },
                    ].map((c) => (
                      <div
                        key={c.l}
                        className={`px-2.5 py-2 rounded-xl text-center shadow-sm border ${
                          c.highlight
                            ? 'bg-gradient-to-br from-[#00c08b]/8 to-[#84cc16]/4 border-[#00c08b]/30 shadow-md shadow-[#00c08b]/5'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="block text-[8px] text-slate-400 font-black uppercase tracking-[0.18em]">
                          {c.l}
                        </span>
                        <span className={`block mt-0.5 ${c.highlight ? 'text-[#009e72] font-black' : 'text-slate-800'}`}>
                          {c.v}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-12 px-3.5 py-2.5 bg-gradient-to-r from-[#00c08b] to-[#84cc16] rounded-xl flex items-center justify-between text-white font-black text-[12px] shadow-lg shadow-[#00c08b]/25">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span>INC4881324 auto-resolved in 32s · confidence-governed</span>
                    </div>
                    <span className="font-mono text-[9.5px] bg-black/15 px-2 py-0.5 rounded tracking-[0.16em] uppercase">
                      100% governed
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>Zero ticket toil for repetitive Philips incidents — fully native to ServiceNow.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <Workflow className="h-4 w-4 animate-pulse" />
            Reactive ticketing → autonomous operations.
          </span>
        </div>
      </div>
    </div>
  );
}
