import {
  FileText,
  Sparkles,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Lock,
  GitBranch,
} from 'lucide-react';

export default function SlideDocsImpact() {
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
              AIRA Documenter ·{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: 'linear-gradient(110deg, #00c08b, #34d399 55%, #84cc16)' }}
              >
                Unlocking SDLC Velocity
              </span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#030c0b]/55 backdrop-blur-md border border-[#00c08b]/25 shadow-sm self-start sm:self-auto">
            <GitBranch className="h-3.5 w-3.5 text-[#00c08b]" />
            <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-[0.25em] text-[#009e72] dark:text-[#80b6a1] uppercase">
              Use Case 03 · Velocity & Documentation Value
            </span>
          </div>
        </div>

        {/* Features vs Benefits Symmetric split layout */}
        <div className="flex-1 grid grid-cols-12 gap-6 lg:gap-8 mt-4 items-stretch overflow-visible pb-3 min-h-[380px] max-h-[460px]">
          
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
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#00c08b]/15 to-[#34d399]/5 dark:from-[#00c08b]/20 dark:to-transparent border border-[#00c08b]/30 grid place-items-center text-[#009e72] dark:text-[#00c08b] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <GitBranch className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      Update Set XML Intelligence
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      AIRA <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">directly parses</span> closed ServiceNow Update Sets, extracting script includes, system indices, and flow diagrams automatically.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#00c08b]/8 border border-[#00c08b]/20 font-mono text-[8px] font-black text-[#009e72] dark:text-[#00c08b] uppercase tracking-wider">
                      <Sparkles className="h-3 w-3 animate-pulse text-[#00c08b]" /> metadata-extractor: update-set database scans
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#34d399]/15 to-[#10b981]/5 dark:from-[#34d399]/20 dark:to-transparent border border-[#34d399]/30 grid place-items-center text-[#34d399] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <FileText className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      Multi-Doc Auto-Generation
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      Compiles complete <span className="text-[#00c08b] dark:text-[#34d399] font-extrabold">technical design packages</span> including Runbooks, Low-Level Designs (LLD), Test Cases, and CAB Release Notes.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#34d399]/8 border border-[#34d399]/20 font-mono text-[8px] font-black text-[#009e72] dark:text-[#34d399] uppercase tracking-wider">
                      <Cpu className="h-3 w-3 animate-pulse text-[#34d399]" /> compilation-engine: design & compliance doc packs
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#84cc16]/15 to-[#34d399]/5 dark:from-[#84cc16]/20 dark:to-transparent border border-[#84cc16]/30 grid place-items-center text-[#84cc16] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      ServiceNow Native Scope
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      Runs <span className="text-[#00c08b] dark:text-[#84cc16] font-extrabold">entirely within native tables</span>. Zero external API handshakes, MID-server dependencies, or compliance exposures.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#84cc16]/8 border border-[#84cc16]/20 font-mono text-[8px] font-black text-[#009e72] dark:text-[#84cc16] uppercase tracking-wider">
                      <Lock className="h-3 w-3 animate-bounce text-[#84cc16]" /> scope-governed: zero network exposure sandbox
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
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-amber-400/15 to-transparent border border-amber-400/30 grid place-items-center text-amber-500 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative animate-pulse-glow">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Zap className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      Engineering Velocity Unlock
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      Freer developer teams from manually writing CAB design sheets. Developers focus <span className="text-amber-600 dark:text-amber-400 font-extrabold">100% on custom code builds</span>.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-amber-400/8 border border-amber-400/20 font-mono text-[8px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      <Zap className="h-3 w-3 animate-pulse text-amber-500" /> development-speed: developer hours recovered
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-rose-400/15 to-transparent border border-rose-400/30 grid place-items-center text-rose-550 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <Activity className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      Zero CAB Release Backlog
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      Speeds release pipelines by generating <span className="text-rose-600 dark:text-rose-400 font-extrabold">highly structured compliance dossiers</span>, ensuring smooth, error-free approvals.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-rose-400/8 border border-rose-400/20 font-mono text-[8px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                      <Activity className="h-3 w-3 animate-pulse text-rose-500" /> compliance-velocity: approval acceleration
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="p-4 sm:p-4.5 rounded-xl bg-white/95 dark:bg-[#04110e]/85 border border-slate-200 dark:border-[#00c08b]/15 hover:border-[#00c08b]/40 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[#00c08b]/8 hover:shadow-slate-200/30 transition-all duration-300 flex items-start gap-4 shadow-sm relative overflow-hidden group">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-emerald-400/15 to-transparent border border-emerald-400/30 grid place-items-center text-emerald-555 dark:text-[#34d399] group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm relative">
                    <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-br from-white to-transparent" />
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                  <div className="flex-1 space-y-1 leading-snug">
                    <h4 className="text-[15px] lg:text-[15.5px] font-black text-slate-800 dark:text-white font-sora">
                      Perfect template Consistency
                    </h4>
                    <p className="text-[12px] lg:text-[12.5px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                      Guarantees <span className="text-[#009e72] dark:text-[#84cc16] font-extrabold">100% template alignment</span> across all engineering squads, ensuring standard governance and audit readiness.
                    </p>
                    {/* Glowing micro-badge graphic */}
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#00c08b]/8 border border-[#00c08b]/20 font-mono text-[8px] font-black text-emerald-600 dark:text-emerald-450 uppercase tracking-wider">
                      <ShieldCheck className="h-3 w-3 animate-pulse text-[#00c08b] dark:text-[#34d399]" /> standardized-quality: template compliance guaranteed
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>Safe autonomous operations that prioritize production stability above all else.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <CheckCircle2 className="h-4 w-4" /> Integrated ServiceNow updates &bull; 100% compliant.
          </span>
        </div>
      </div>
    </div>
  );
}
