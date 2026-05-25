import { useState } from 'react';
import {
  Compass,
  Bot,
  ShieldCheck,
  Workflow,
  Sparkles,
} from 'lucide-react';

type Phase = {
  n: string;
  title: string;
  kicker: string;
  desc: string;
  status: string;
  statusColor: string;
  Icon: React.ComponentType<any>;
  bulletList: string[];
};

const PHASES: Phase[] = [
  {
    n: 'PHASE 01',
    title: 'Intelligent Assistance',
    kicker: 'AI-Ops Core Foundation',
    desc: 'Empowers engineers with contextual copilot actions and enriches ticket classification data.',
    status: 'Active & Running',
    statusColor: '#00c08b',
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
    desc: 'Bypasses manual L1/L2 investigation for repetitive, low-risk incident categories safely.',
    status: 'Currently Rolling Out',
    statusColor: '#84cc16',
    Icon: Workflow,
    bulletList: [
      'Multi-Layer Confidence Governance',
      'IntegrationHub Autonomic Flows',
      'Proven Historical Fix Reuse',
      'Automated Ticket Resolution Verification',
    ],
  },
  {
    n: 'PHASE 03',
    title: 'AI-Ops Ecosystem',
    kicker: 'Proactive Prevention',
    desc: 'Evolves ServiceNow into a self-monitoring, self-repairing operational fabric at scale.',
    status: 'Long-Term Strategy',
    statusColor: '#34d399',
    Icon: Sparkles,
    bulletList: [
      'Self-Optimizing Workflow Generation',
      'Proactive Failure Anomaly Triggers',
      'Zero-Toil Self-Healing at Source',
      'Multi-Model Cross-Platform Sync',
    ],
  },
];

export default function SlideVision() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900 flex flex-col">
      {/* Background spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00c08b]/8 dark:bg-[#00c08b]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-breathe" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/6 dark:bg-[#84cc16]/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-8 sm:px-12 py-5 flex flex-col justify-between overflow-hidden">
        {/* Header Block */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#030c0b]/50 border border-slate-200 dark:border-[#80b6a1]/25 shadow-sm">
            <Compass className="h-4 w-4 text-[#00c08b]" />
            <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-[0.38em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Conclusion · Future Vision & Roadmap
            </span>
          </div>
          <h2
            className="text-[2.2rem] sm:text-[2.6rem] font-black tracking-tight leading-tight text-[#0c1e1c] dark:text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Evolving ServiceNow Into An{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c08b] via-[#34d399] to-[#84cc16] italic">
              Autonomous Ecosystem
            </span>
          </h2>
          <p className="max-w-2xl text-[13px] sm:text-[14px] font-medium text-slate-600 dark:text-slate-300 leading-snug">
             Evolve from reactive ticketing to an AI-driven operational brain. Compressing support toil, improving data precision, and driving absolute enterprise security.
          </p>
        </div>

        {/* Roadmap pipeline */}
        <div className="flex-1 grid grid-cols-3 gap-6 mt-6 items-stretch overflow-hidden min-h-[420px] max-h-[500px]">
          {PHASES.map((p, idx) => {
            const isHovered = hoveredPhase === idx;
            const isDimmed = hoveredPhase !== null && hoveredPhase !== idx;
            return (
              <div
                key={p.n}
                onMouseEnter={() => setHoveredPhase(idx)}
                onMouseLeave={() => setHoveredPhase(null)}
                className="relative rounded-2xl border transition-all duration-500 bg-white/95 dark:bg-[#030c0b]/70 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg overflow-hidden"
                style={{
                  borderColor: isHovered ? p.statusColor : 'rgba(148,163,184,0.15)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? `0 25px 50px -15px rgba(0,0,0,0.12), 0 0 0 1px ${p.statusColor}, 0 0 30px -5px ${p.statusColor}50`
                    : undefined,
                  filter: isDimmed ? 'opacity(0.7) saturate(0.7)' : 'none',
                }}
              >
                {/* Visual Connector trail inside the card */}
                {isHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      background: `radial-gradient(circle at center, ${p.statusColor} 0%, transparent 70%)`,
                    }}
                  />
                )}

                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[10.5px] font-black tracking-widest text-slate-400 block">{p.n}</span>
                      <h3
                        className="text-[22px] font-black text-[#132c2a] dark:text-white leading-tight mt-1"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                      <span className="text-[12px] font-black uppercase text-[#009e72] dark:text-[#80b6a1] tracking-wider block mt-1">{p.kicker}</span>
                    </div>

                    <div
                      className="h-12 w-12 rounded-xl grid place-items-center flex-shrink-0 shadow"
                      style={{
                        background: `linear-gradient(135deg, ${p.statusColor}, ${p.statusColor}dd)`,
                      }}
                    >
                      <p.Icon className="h-6 w-6 text-white" strokeWidth={2.4} />
                    </div>
                  </div>

                  <p className="text-[14px] font-semibold text-slate-600 dark:text-slate-350 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Bullet checklist */}
                  <div className="space-y-3.5 border-t border-slate-100 dark:border-white/5 pt-4">
                    {p.bulletList.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2.5 text-[13px] font-bold text-[#132c2a] dark:text-slate-300">
                        <span className="text-[12px] mt-0.5" style={{ color: p.statusColor }}>✓</span>
                        <span className="leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status pill */}
                <div className="mt-5 pt-4 border-t border-dashed border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">Roadmap Status</span>
                  <span
                    className="px-3.5 py-1.5 rounded-full font-mono text-[10px] font-black uppercase tracking-wider text-white shadow-sm"
                    style={{ backgroundColor: p.statusColor }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-slate-200 dark:border-white/5 pt-3.5 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-[#80b6a1]/70">
          <span>AIRA represents an enterprise-safe operational AI fabric for ServiceNow.</span>
          <span className="flex items-center gap-1.5 text-[#00c08b] font-black">
            <ShieldCheck className="h-4.5 w-4.5" /> CONFIDENCE-GOVERNED · 100% NATIVE ORCHESTRATION
          </span>
        </div>
      </div>
    </div>
  );
}
