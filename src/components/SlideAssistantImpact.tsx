import { useState } from 'react';
import {
  Bot,
  Percent,
  Zap,
  Gauge,
  Hourglass,
  Layers,
} from 'lucide-react';

export default function SlideAssistantImpact() {
  const [ticketSeverity, setTicketSeverity] = useState<'high' | 'med' | 'low'>('high');

  // Time metrics depending on severity (believable and realistic ~66% savings)
  const timelines = {
    high: {
      before: { review: 12, steps: 15, update: 8, notes: 10, total: 45 },
      after: { review: 4, steps: 5, update: 3, notes: 3, total: 15 },
    },
    med: {
      before: { review: 8, steps: 10, update: 6, notes: 6, total: 30 },
      after: { review: 2.5, steps: 3.5, update: 2, notes: 2, total: 10 },
    },
    low: {
      before: { review: 5, steps: 6, update: 3, notes: 4, total: 18 },
      after: { review: 1.5, steps: 2, update: 1.2, notes: 1.3, total: 6 },
    },
  };

  const activeData = timelines[ticketSeverity];
  const percentSaved = Math.round(((activeData.before.total - activeData.after.total) / activeData.before.total) * 100);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-[#030c0a] flex flex-col transition-colors duration-500">
      {/* Background spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-[#10b981]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/12 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Main Container */}
      <div className="relative z-10 flex-1 px-10 sm:px-14 py-8 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-3 px-4.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 shadow-sm animate-fade-in-up">
            <Gauge className="h-5 w-5 text-[#10b981]" />
            <span className="font-mono text-[11px] sm:text-[12px] font-black tracking-[0.38em] text-[#009e72] dark:text-emerald-400 uppercase">
              Use Case 02 · Business Impact & Efficiency
            </span>
          </div>
          <h2
            className="text-[2.6rem] sm:text-[3.2rem] font-black tracking-tight leading-none text-slate-900 dark:text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA Assistant ·{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-500 italic">
              Hyper-Productive Support
            </span>
          </h2>
          <p className="max-w-4xl text-[16px] sm:text-[18px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
            Support engineers focus on resolution logic while AIRA compresses the cognitive load of reading history, summarizing tickets, and drafting closure records.
          </p>
        </div>

        {/* Dashboard Grid - Expanded sizes to minimize dead space */}
        <div className="flex-1 grid grid-cols-12 gap-7 mt-6 items-stretch overflow-hidden min-h-[360px] max-h-[460px]">
          
          {/* Left Panel: Metrics cards (col-span-5) */}
          <div className="col-span-5 flex flex-col justify-between gap-4.5">
            
            {/* Metric 1 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#34d399] grid place-items-center text-white shadow-lg flex-shrink-0">
                <Bot className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">MANUAL INCIDENT REVIEW</span>
                <span className="text-[25px] font-black leading-none text-[#10b981] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  40% – 70% Effort Saved
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Instant, contextual work notes and ticket timeline summaries.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#34d399] to-[#84cc16] grid place-items-center text-white shadow-lg flex-shrink-0">
                <Percent className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">DOCUMENTATION OVERHEAD</span>
                <span className="text-[25px] font-black leading-none text-[#009e72] dark:text-emerald-400 block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  30% – 50% Effort Saved
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Automated generation of closure summaries and next-step actions.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#84cc16] grid place-items-center text-white shadow-lg flex-shrink-0">
                <Layers className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">CONVERSATIONAL MEMORY</span>
                <span className="text-[25px] font-black leading-none text-[#00c08b] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  7-Day Persistent Memory
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Maintains full context across shifts and handovers seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Support Timeline Compressor (col-span-7) */}
          <div className="col-span-7 rounded-2xl border border-[#00c08b]/40 bg-slate-50/50 dark:bg-slate-950/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Simulator Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <Hourglass className="h-6 w-6 text-[#10b981] animate-spin-slow" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-300">
                    SLA & Incident Lifecycle Timeline Compressor
                  </span>
                </div>

                {/* Severity Toggles */}
                <div className="flex gap-2">
                  {(['high', 'med', 'low'] as const).map((sev) => (
                    <button
                      key={sev}
                      onClick={() => setTicketSeverity(sev)}
                      className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-wider border transition-all ${
                        ticketSeverity === sev
                          ? 'bg-[#10b981] border-[#10b981] text-white shadow-md'
                          : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:scale-105'
                      }`}
                    >
                      {sev} Priority
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline comparison visualization - larger bar sizes for legibility */}
              <div className="mt-6 space-y-6">
                {/* Traditional Process */}
                <div>
                  <div className="flex justify-between text-[13.5px] font-extrabold text-slate-700 dark:text-slate-200">
                    <span>Traditional Incident Lifecycle Time</span>
                    <span className="font-mono font-black text-rose-500 text-base">{activeData.before.total} Minutes</span>
                  </div>
                  <div className="mt-2.5 h-10 rounded-xl bg-slate-200 dark:bg-white/10 overflow-hidden flex text-[10.5px] font-mono font-black text-white text-center shadow-inner border border-slate-300/30">
                    <div className="bg-gradient-to-r from-rose-500/90 to-rose-600/90 border-r border-slate-900/10 grid place-items-center truncate px-1" style={{ width: `${(activeData.before.review / activeData.before.total) * 100}%` }}>
                      Review ({activeData.before.review}m)
                    </div>
                    <div className="bg-gradient-to-r from-rose-600/90 to-rose-700/90 border-r border-slate-900/10 grid place-items-center truncate px-1" style={{ width: `${(activeData.before.steps / activeData.before.total) * 100}%` }}>
                      Triage ({activeData.before.steps}m)
                    </div>
                    <div className="bg-gradient-to-r from-rose-700/90 to-rose-800/90 border-r border-slate-900/10 grid place-items-center truncate px-1" style={{ width: `${(activeData.before.update / activeData.before.total) * 100}%` }}>
                      Update ({activeData.before.update}m)
                    </div>
                    <div className="bg-gradient-to-r from-rose-800/90 to-rose-900/90 grid place-items-center truncate px-1" style={{ width: `${(activeData.before.notes / activeData.before.total) * 100}%` }}>
                      Close ({activeData.before.notes}m)
                    </div>
                  </div>
                </div>

                {/* AIRA Assisted Process */}
                <div className="relative">
                  <div className="flex justify-between text-[13.5px] font-extrabold text-[#10b981]">
                    <span>AIRA Copilot Assisted Lifecycle</span>
                    <span className="font-mono font-black text-base">{activeData.after.total} Minutes</span>
                  </div>
                  <div className="mt-2.5 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 overflow-hidden flex text-[10.5px] font-mono font-black text-white text-center shadow-lg relative">
                    {/* Shimmer pulse effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_30%,rgba(52,211,153,0.15)_50%,transparent_70%)] [background-size:200%_100%] animate-pulse-glow pointer-events-none" />

                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 border-r border-slate-900/10 grid place-items-center truncate px-1 shadow-md" style={{ width: `${(activeData.after.review / activeData.after.total) * 100}%` }}>
                      Review ({activeData.after.review}m)
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 border-r border-slate-900/10 grid place-items-center truncate px-1 shadow-md" style={{ width: `${(activeData.after.steps / activeData.after.total) * 100}%` }}>
                      Triage ({activeData.after.steps}m)
                    </div>
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 border-r border-slate-900/10 grid place-items-center truncate px-1 shadow-md" style={{ width: `${(activeData.after.update / activeData.after.total) * 100}%` }}>
                      Upd ({activeData.after.update}m)
                    </div>
                    <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 grid place-items-center truncate px-1 shadow-md" style={{ width: `${(activeData.after.notes / activeData.after.total) * 100}%` }}>
                      Clo ({activeData.after.notes}m)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Callout Display */}
            <div className="mt-6 grid grid-cols-2 gap-4.5">
              <div className="p-4 rounded-2xl border border-[#00c08b]/40 bg-[#00c08b]/5 dark:bg-[#00c08b]/10 text-center flex flex-col justify-center shadow-lg hover:scale-105 transition-all">
                <span className="text-[10px] font-mono font-black text-slate-400 dark:text-[#80b6a1] uppercase">L1/L2 LIFECYCLE COMPRESSION</span>
                <span className="text-[28px] font-mono font-black text-[#00c08b] block mt-1 leading-none">
                  {percentSaved}% Faster
                </span>
              </div>

              <div className="p-4 rounded-2xl border border-[#84cc16]/40 bg-[#84cc16]/5 dark:bg-[#84cc16]/10 text-center flex flex-col justify-center shadow-lg hover:scale-105 transition-all">
                <span className="text-[10px] font-mono font-black text-slate-400 dark:text-[#80b6a1] uppercase">DAILY SHIFT TIME SAVED</span>
                <span className="text-[28px] font-mono font-black text-[#84cc16] block mt-1 leading-none">
                  1.5 - 2.5 Hours / Shift
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between text-[12px] font-bold text-slate-500 dark:text-slate-400">
          <span>AIRA embedded Copilot operates natively inside the Incident Workspace form.</span>
          <span className="flex items-center gap-2 text-[#10b981] font-extrabold">
            <Zap className="h-4.5 w-4.5 animate-pulse" /> 30-50% reduction in support documentation effort.
          </span>
        </div>
      </div>
    </div>
  );
}
