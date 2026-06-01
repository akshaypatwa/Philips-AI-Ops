import {
  MessageSquare,
  Cpu,
  Database,
  Zap,
  Activity,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export default function SlideHealImpact() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-ink-900 flex flex-col transition-colors duration-500 text-slate-800 dark:text-white">
      {/* Brand spotlights */}
      <div className="absolute top-[-12%] left-[-10%] w-[55%] h-[55%] bg-[#00c08b]/15 dark:bg-[#00c08b]/22 rounded-full blur-[140px] pointer-events-none z-0 animate-breathe" />
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

      <div className="relative z-10 flex-1 px-10 sm:px-14 py-5 sm:py-6 flex flex-col justify-between overflow-visible">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0 pb-1.5 border-b border-slate-100 dark:border-white/5 animate-fade-in-up">
          <div>
            <h2
              className="text-[2.1rem] sm:text-[2.3rem] font-extrabold tracking-tight leading-none text-[#0c1e1c] dark:text-white font-sora"
            >
              AIRA Self-Heal ·{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)' }}
              >
                Capabilities & Outcomes
              </span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/55 backdrop-blur-md border border-[#00c08b]/25 shadow-sm self-start sm:self-auto">
            <Sparkles className="h-3.5 w-3.5 text-[#00c08b]" />
            <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-[0.25em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Use Case 01 · Self-Healing Impact
            </span>
          </div>
        </div>

        {/* Features vs Benefits Symmetric split layout */}
        <div className="flex-1 grid grid-cols-12 gap-6 lg:gap-8 mt-3.5 items-stretch overflow-visible pb-3 min-h-[400px] max-h-[480px]">
          
          {/* LEFT: THE FEATURES (col-span-6) */}
          <div 
            className="col-span-6 rounded-[24px] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#061613]/20 p-5 lg:p-5.5 flex flex-col justify-between relative shadow-sm animate-fade-in-up"
            style={{ animationDelay: '180ms' }}
          >
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {/* Header section */}
              <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-white/10 pb-2 mb-0.5">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center text-white text-[12px] font-black font-mono shadow-lg relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-white/10 opacity-60 pointer-events-none" />
                  F
                </div>
                <span className="text-[17px] font-mono font-black uppercase text-[#009e72] dark:text-[#80b6a1] tracking-[0.2em] leading-none">
                  Core Features
                </span>
              </div>

              {/* Features cards list */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                
                {/* Feature 1 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />
                  
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#00c08b]/15 to-[#34d399]/5 dark:from-[#00c08b]/20 dark:to-transparent border border-[#00c08b]/30 grid place-items-center text-[#009e72] dark:text-[#00c08b] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <MessageSquare className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      Dynamic Portal Intercept
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-550 dark:text-slate-400 leading-relaxed">
                      AIRA <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">instantly responds</span> with custom, adaptive questions. Users get <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">immediate engagement</span> while support agents are spared from generic triaging queues.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#00c08b]/8 border border-[#00c08b]/20 font-mono text-[8.5px] font-black text-[#009e72] dark:text-[#00c08b] uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00c08b] animate-ping" /> portal-clarifier: instant dynamic engagement
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />

                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#34d399]/15 to-[#10b981]/5 dark:from-[#34d399]/20 dark:to-transparent border border-[#34d399]/30 grid place-items-center text-[#34d399] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Cpu className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      Intelligent Triangulation
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-550 dark:text-slate-400 leading-relaxed">
                      Combines <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">similarity ML models</span> and <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">native diagnostic scripts</span> to inspect live roles and permissions, ensuring high-accuracy troubleshooting.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#34d399]/8 border border-[#34d399]/20 font-mono text-[8.5px] font-black text-[#009e72] dark:text-[#34d399] uppercase tracking-wider">
                      <Sparkles className="h-3 w-3 animate-pulse text-[#00c08b]" /> triage-engine: ml classification + diagnostic scripts
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />

                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#84cc16]/15 to-[#34d399]/5 dark:from-[#84cc16]/20 dark:to-transparent border border-[#84cc16]/30 grid place-items-center text-[#84cc16] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Database className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      Instant Form Handover
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-550 dark:text-slate-400 leading-relaxed">
                      Automatically <span className="text-[#00c08b] dark:text-[#84cc16] font-extrabold">autofills fields</span> and <span className="text-[#00c08b] dark:text-[#84cc16] font-extrabold">drafts clean work-notes</span> inside the incident. Support engineers resolve the ticket instantly on sight.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#84cc16]/8 border border-[#84cc16]/20 font-mono text-[8.5px] font-black text-[#009e72] dark:text-[#84cc16] uppercase tracking-wider">
                      <Lock className="h-3 w-3 animate-bounce text-[#84cc16]" /> form-autofill: dynamic resolution workbench
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: THE BENEFITS (col-span-6) */}
          <div 
            className="col-span-6 rounded-[24px] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#061613]/20 p-5 lg:p-5.5 flex flex-col justify-between relative shadow-sm animate-fade-in-up"
            style={{ animationDelay: '260ms' }}
          >
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {/* Header section */}
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2 mb-0.5">
                <div className="flex items-center gap-3 border-b-0">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] grid place-items-center text-white text-[12px] font-black font-mono shadow-lg relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-white/10 opacity-60 pointer-events-none" />
                    B
                  </div>
                  <span className="text-[17px] font-mono font-black uppercase text-[#009e72] dark:text-[#80b6a1] tracking-[0.2em] leading-none">
                    Realized Benefits
                  </span>
                </div>
                <span className="font-mono text-[8px] px-2 py-0.5 rounded-md bg-[#00c08b]/15 border border-[#00c08b]/35 text-[#009e72] dark:text-[#00c08b] font-black uppercase tracking-wider">
                  outcomes
                </span>
              </div>

              {/* Benefits cards list */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                
                {/* Benefit 1 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />

                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-400/15 to-transparent border border-amber-400/30 grid place-items-center text-amber-500 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10 animate-pulse-glow">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Zap className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      Instant Support Response
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-555 dark:text-slate-400 leading-relaxed">
                      Employees get <span className="text-amber-600 dark:text-amber-400 font-extrabold">immediate assurance</span> that their request is active, removing manual email ping-pongs and L1 queue latency.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-400/8 border border-amber-400/20 font-mono text-[8.5px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      <Zap className="h-3 w-3 animate-pulse text-amber-500" /> user-experience: dynamic portal intercept
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />

                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-rose-400/15 to-transparent border border-rose-400/30 grid place-items-center text-rose-500 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Activity className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      High Resolution Precision
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-555 dark:text-slate-400 leading-relaxed">
                      Achieves <span className="text-rose-600 dark:text-rose-400 font-extrabold">maximum resolution accuracy</span> by replacing manual guesswork with cross-verified script diagnostics and ML prediction records.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-rose-400/8 border border-rose-400/20 font-mono text-[8.5px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                      <Activity className="h-3 w-3 animate-pulse text-rose-500" /> resolution-accuracy: verified diagnostic metrics
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-emerald-50/15 dark:from-[#04110e]/95 dark:via-[#04110e]/85 dark:to-[#00c08b]/[0.01] border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4.5 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#00c08b] to-[#84cc16] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(0,192,139,0.06),transparent_60%)] pointer-events-none" />

                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400/15 to-transparent border border-emerald-400/30 grid place-items-center text-emerald-550 dark:text-emerald-450 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative z-10">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <ShieldCheck className="h-5.5 w-5.5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1.5 relative z-10 leading-snug">
                    <h4 className="text-[16px] sm:text-[17px] lg:text-[17.5px] font-black text-slate-800 dark:text-white font-sora">
                      Frictionless Shift Handover
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold text-slate-555 dark:text-slate-400 leading-relaxed">
                      Agents resolve tickets <span className="text-[#009e72] dark:text-[#84cc16] font-extrabold">instantly on sight</span> without reading messy work logs or starting from scratch, saving valuable shift hours.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-400/8 border border-[#00c08b]/20 font-mono text-[8.5px] font-black text-emerald-600 dark:text-emerald-450 uppercase tracking-wider">
                      <ShieldCheck className="h-3 w-3 animate-pulse text-emerald-550 dark:text-emerald-450" /> ticket-handover: pre-summarized forms
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>Safe autonomous operations that prioritize production stability above all else.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <CheckCircle2 className="h-4 w-4" /> Native ServiceNow workflows &bull; 100% compliant.
          </span>
        </div>
      </div>
    </div>
  );
}
