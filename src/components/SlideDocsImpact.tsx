import { useState } from 'react';
import {
  Clock,
  Zap,
  CheckCircle,
  Percent,
  Calculator,
  GitBranch,
  Building,
} from 'lucide-react';

export default function SlideDocsImpact() {
  const [developers, setDevelopers] = useState(10);
  const [sprintWeeks, setSprintWeeks] = useState(2);

  // Calculations based on team size and sprint length
  const docHoursSaved = Math.round(developers * 3.5 * (sprintWeeks / 2) * 2); // 3.5 hrs doc time per week per developer
  const documentsCreated = Math.round(developers * 2 * (sprintWeeks / 2)); // 2 releases per developer per sprint average

  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-[#030c0a] flex flex-col transition-colors duration-500">
      {/* Background spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/12 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Content Container */}
      <div className="relative z-10 flex-1 px-10 sm:px-14 py-8 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-3 px-4.5 py-1.5 rounded-full bg-[#00c08b]/10 border border-[#00c08b]/30 shadow-sm animate-fade-in-up">
            <Building className="h-5 w-5 text-[#00c08b]" />
            <span className="font-mono text-[11px] sm:text-[12px] font-black tracking-[0.38em] text-[#009e72] dark:text-emerald-400 uppercase">
              Use Case 03 · Business Value & SDLC Velocity
            </span>
          </div>
          <h2
            className="text-[2.6rem] sm:text-[3.2rem] font-black tracking-tight leading-none text-slate-900 dark:text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA Documenter ·{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-500 italic">
              Unlocking Engineering Velocity
            </span>
          </h2>
          <p className="max-w-4xl text-[16px] sm:text-[18px] font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
            Eliminate hours of manual design writing and runbook compilation. Let developers focus on writing code while AIRA automates compliance in near real-time.
          </p>
        </div>

        {/* Impact Dashboard Grid - Maximized card sizes */}
        <div className="flex-1 grid grid-cols-12 gap-7 mt-6 items-stretch overflow-hidden min-h-[360px] max-h-[460px]">
          
          {/* Left Column: Key statistics cards (col-span-5) */}
          <div className="col-span-5 flex flex-col justify-between gap-4.5">
            
            {/* Metric 1 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center text-white shadow-lg flex-shrink-0">
                <Clock className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">COMPILATION SPEED</span>
                <span className="text-[25px] font-black leading-none text-[#00c08b] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  8× – 10× Faster Documenting
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  SDLC artifacts generated in minutes directly from Update Set XML metadata.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#34d399] to-[#84cc16] grid place-items-center text-white shadow-lg flex-shrink-0">
                <Percent className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">RELEASE OVERHEAD COMPRESSION</span>
                <span className="text-[25px] font-black leading-none text-[#009e72] dark:text-emerald-400 block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  40% – 60% Effort Reduction
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Reduces documentation backlog delays and speeds up CAB release approvals.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="relative flex-1 rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/60 p-5 flex items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#00c08b] to-[#84cc16] grid place-items-center text-white shadow-lg flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>
              <div className="min-w-0">
                <span className="block text-[9.5px] font-mono font-black uppercase text-slate-400 dark:text-emerald-400 tracking-wider">AUDITING & COMPLIANCE CONSISTENCY</span>
                <span className="text-[25px] font-black leading-none text-[#00c08b] block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  100% Template Adherence
                </span>
                <p className="text-[13.5px] font-bold text-slate-700 dark:text-slate-300 mt-1 leading-snug">
                  Eliminates typos, missing sections, and formatting errors across teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Velocity Calculator (col-span-7) */}
          <div className="col-span-7 rounded-2xl border border-[#00c08b]/40 bg-slate-50/50 dark:bg-slate-950/80 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              {/* Calculator Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-[#00c08b] animate-bounce" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-300">
                    Interactive SDLC Team Velocity Calculator
                  </span>
                </div>
              </div>

              {/* Input controls */}
              <div className="grid grid-cols-2 gap-6 mt-2">
                {/* Team Size Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[14px] font-extrabold text-slate-700 dark:text-slate-200">Sprint Developers</span>
                    <span className="text-[18px] font-mono font-black text-[#00c08b] bg-[#00c08b]/10 border border-[#00c08b]/30 px-3 py-0.5 rounded-lg">{developers} Devs</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={developers}
                    onChange={(e) => setDevelopers(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200 dark:bg-white/10 accent-[#00c08b]"
                    style={{
                      background: `linear-gradient(90deg, #00c08b 0%, #00c08b ${((developers - 1) / 19) * 100}%, rgba(148,163,184,0.12) ${((developers - 1) / 19) * 100}%, rgba(148,163,184,0.12) 100%)`,
                    }}
                  />
                </div>

                {/* Sprint Length Select */}
                <div className="space-y-2.5">
                  <span className="block text-[14px] font-extrabold text-slate-700 dark:text-slate-200">Sprint Duration</span>
                  <div className="flex gap-2.5">
                    {[2, 3, 4].map((weeks) => (
                      <button
                        key={weeks}
                        onClick={() => setSprintWeeks(weeks)}
                        className={`flex-1 py-2 rounded-xl text-[10px] sm:text-[11px] font-extrabold uppercase border tracking-wider transition-all ${
                          sprintWeeks === weeks
                            ? 'bg-[#00c08b] border-[#00c08b] text-white shadow-md'
                            : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:scale-105'
                        }`}
                      >
                        {weeks} Weeks
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculations results - Enlarged numbers for clear visibility */}
              <div className="grid grid-cols-3 gap-4.5 mt-6">
                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">DEV HOURS RECOVERED</span>
                  <span className="text-[28px] font-mono font-black text-[#00c08b] block mt-1.5 leading-none">{docHoursSaved}h</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">Rerouted to engineering</span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">COMPLIANCE OVERHEAD COMPRESSED</span>
                  <span className="text-[28px] font-mono font-black text-[#84cc16] block mt-1.5 leading-none">85% Faster</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">CAB approval acceleration</span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#091012] text-center shadow-lg hover:scale-105 transition-all">
                  <span className="block text-[8.5px] font-mono font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">COMPILATION PACKS</span>
                  <span className="text-[28px] font-mono font-black text-[#80b6a1] block mt-1.5 leading-none">{documentsCreated}</span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-2 block">Compliance suites compiled</span>
                </div>
              </div>
            </div>

            {/* Differentiator Strip */}
            <div className="mt-5 p-4 rounded-xl border border-[#80b6a1]/30 bg-[#80b6a1]/5 dark:bg-[#80b6a1]/10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#80b6a1] to-[#6b8c80] grid place-items-center text-white flex-shrink-0 shadow-md">
                <GitBranch className="h-6 w-6 text-white" strokeWidth={2.4} />
              </div>
              <div className="leading-snug min-w-0">
                <span className="text-[13px] font-black text-slate-800 dark:text-white block truncate">
                  Enterprise Differentiator: 100% ServiceNow Native
                </span>
                <p className="text-[11.5px] font-bold text-slate-500 dark:text-slate-400 truncate">
                  Runs directly inside Flow Designer and Script Includes. Absolute zero external dependencies, zero MID server setups, and zero compliance exposure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between text-[12px] font-bold text-slate-500 dark:text-slate-400">
          <span>AIRA Document compiler ensures compliance formatting checks are 100% compliant.</span>
          <span className="flex items-center gap-2 text-[#00c08b] font-extrabold">
            <Zap className="h-4.5 w-4.5 animate-pulse" /> 30-50 developer hours recovered per sprint!
          </span>
        </div>
      </div>
    </div>
  );
}
