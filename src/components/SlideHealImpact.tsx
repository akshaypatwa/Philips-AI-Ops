import { useState } from 'react';
import {
  TrendingDown,
  Clock,
  ThumbsUp,
  Zap,
  Calculator,
  ShieldCheck,
  Percent,
} from 'lucide-react';

export default function SlideHealImpact() {
  const [incidents, setIncidents] = useState(500);

  // Calculations
  const hoursSaved = Math.round(incidents * 0.45 * 1.8); // 45% of tickets resolved 1.8 hours faster
  const slaBreachesAvoided = Math.round(incidents * 0.08); // 8% of incidents avoid critical SLA breach
  const repetitiveHealed = Math.round(incidents * 0.30); // 30% of repetitive incidents resolved by autonomous heal

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-[#030c0a] flex flex-col transition-colors duration-500">
      {/* Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/12 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Main Container */}
      <div className="relative z-10 flex-1 px-10 sm:px-14 py-8 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-3 px-4.5 py-1.5 rounded-full bg-[#00c08b]/10 border border-[#00c08b]/30 shadow-sm animate-fade-in-up">
            <TrendingDown className="h-5 w-5 text-[#00c08b]" />
            <span className="font-mono text-[11px] sm:text-[12px] font-black tracking-[0.38em] text-[#009e72] dark:text-emerald-400 uppercase">
              Use Case 01 · Business Impact & ROI
            </span>
          </div>
          <h2
            className="text-[2.6rem] sm:text-[3.2rem] font-black tracking-tight leading-none text-slate-900 dark:text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA Self-Heal ·{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-500 italic">
              Proven Business Value
            </span>
          </h2>
          <p className="max-w-4xl text-[16px] sm:text-[18px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
            Autonomous self-healing compresses operational toil, minimizes MTTR, and delivers immediate cost efficiency native within ServiceNow.
          </p>
        </div>

        {/* Impact Dashboard Grid - Large elements to utilize dead space */}
        <div className="flex-1 grid grid-cols-12 gap-7 mt-6 items-stretch overflow-hidden min-h-[360px] max-h-[460px]">
          
          {/* Left Side: Three Main Metrics (col-span-5) */}
          <div className="col-span-5 flex flex-col justify-between gap-4.5">
            
            {/* Metric 1 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center text-white shadow-lg shadow-[#00c08b]/20 flex-shrink-0">
                <Clock className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">MEAN TIME TO RESOLVE</span>
                <span className="text-[25px] font-black leading-none text-[#00c08b] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  25% – 45% MTTR Reduction
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Proven resolutions are automatically reused to solve active incident tickets.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#34d399] to-[#84cc16] grid place-items-center text-white shadow-lg shadow-[#34d399]/20 flex-shrink-0">
                <ThumbsUp className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">CLARIFICATION EFFORT</span>
                <span className="text-[25px] font-black leading-none text-[#009e72] dark:text-emerald-400 block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  40% – 60% Reduction
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Conversational clarification engine gathers high-quality incident context at source.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00c08b] to-[#84cc16] grid place-items-center text-white shadow-lg shadow-[#00c08b]/20 flex-shrink-0">
                <Percent className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">CATEGORIZATION ACCURACY</span>
                <span className="text-[25px] font-black leading-none text-[#00c08b] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  50% – 70% Improvement
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  ServiceNow Predictive Intelligence enriches missing category, CI, and services.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive ROI Calculator (col-span-7) */}
          <div className="col-span-7 rounded-2xl border border-[#00c08b]/40 bg-slate-50/50 dark:bg-slate-950/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              <Calculator className="h-56 w-56 text-[#00c08b]" />
            </div>

            <div>
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
                <Calculator className="h-6 w-6 text-[#00c08b] animate-bounce" />
                <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-300">
                  Interactive ROI & Workload Savings Calculator
                </span>
              </div>

              {/* Slider Block */}
              <div className="space-y-3 mt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[15px] font-extrabold text-slate-800 dark:text-slate-200">Monthly Incident Volume</span>
                  <span className="text-[24px] font-mono font-black text-[#00c08b] bg-[#00c08b]/10 border border-[#00c08b]/30 px-3 py-0.5 rounded-lg">
                    {incidents.toLocaleString()} Tickets
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={incidents}
                  onChange={(e) => setIncidents(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200 dark:bg-white/10 accent-[#00c08b]"
                  style={{
                    background: `linear-gradient(90deg, #00c08b 0%, #00c08b ${((incidents - 100) / 900) * 100}%, rgba(148,163,184,0.12) ${((incidents - 100) / 900) * 100}%, rgba(148,163,184,0.12) 100%)`,
                  }}
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                  <span>100 tickets</span>
                  <span>1,000 tickets</span>
                </div>
              </div>

              {/* Savings Results Grid - Larger values, clean layout */}
              <div className="grid grid-cols-3 gap-4.5 mt-6">
                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">HOURS RECOVERED</span>
                  <span className="text-[28px] font-mono font-black text-[#00c08b] block mt-1.5 leading-none">{hoursSaved.toLocaleString()}h</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">In qualification & routing</span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">SLA BREACHES AVOIDED</span>
                  <span className="text-[28px] font-mono font-black text-[#84cc16] block mt-1.5 leading-none">{slaBreachesAvoided}</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">Critical SLA violations prevented</span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">AUTONOMOUS HEALS</span>
                  <span className="text-[28px] font-mono font-black text-[#34d399] block mt-1.5 leading-none">{repetitiveHealed.toLocaleString()}</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">30% autonomous resolution</span>
                </div>
              </div>
            </div>

            {/* Differentiator Bottom Stripe */}
            <div className="mt-5 p-4 rounded-xl border border-[#84cc16]/30 bg-[#84cc16]/5 dark:bg-[#84cc16]/10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#84cc16] to-[#65a30d] grid place-items-center text-white flex-shrink-0 shadow-md">
                <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.4} />
              </div>
              <div className="leading-snug min-w-0">
                <span className="text-[13px] font-black text-slate-800 dark:text-white block truncate">
                  Enterprise Differentiator: Confidence-Gated Rollout
                </span>
                <p className="text-[11.5px] font-bold text-slate-500 dark:text-slate-400 truncate">
                  Instead of generic GPT logic, AIRA integrates multi-model governance gates, ensuring zero risk to production infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between text-[12px] font-bold text-slate-500 dark:text-slate-400">
          <span>AIRA incident intelligence engine compresses MTTR automatically.</span>
          <span className="flex items-center gap-2 text-[#00c08b] font-extrabold">
            <Zap className="h-4.5 w-4.5 animate-pulse" /> 20-40% reduction in repetitive incidents handled manually.
          </span>
        </div>
      </div>
    </div>
  );
}
