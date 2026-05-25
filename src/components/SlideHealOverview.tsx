import { useEffect, useState, useRef } from 'react';
import {
  Sparkles,
  MessageCircleQuestion,
  Database,
  History,
  Lightbulb,
  ShieldCheck,
  Play,
  Pause,
  User,
  Workflow,
  Cpu,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

type Stage = {
  n: string;
  name: string;
  desc: string;
  Icon: LucideIcon;
};

const STAGES: Stage[] = [
  {
    n: '01',
    name: 'Portal Raise',
    desc: 'Incident logged from Service Portal',
    Icon: MessageCircleQuestion,
  },
  {
    n: '02',
    name: 'AIRA Clarify',
    desc: 'AI immediate conversational question response',
    Icon: Sparkles,
  },
  {
    n: '03',
    name: 'User Reply',
    desc: 'User answers questions on Service Portal',
    Icon: User,
  },
  {
    n: '04',
    name: 'Predictive IQ',
    desc: 'Dual-model prediction & technical scripts',
    Icon: Database,
  },
  {
    n: '05',
    name: 'LLM Resolve',
    desc: 'LLM reasons on context & updates ticket',
    Icon: Lightbulb,
  },
];

export default function SlideHealOverview() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<any>(null);

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
  const nextStage = () => setActive((v) => (v + 1) % STAGES.length);
  const prevStage = () => setActive((v) => (v - 1 + STAGES.length) % STAGES.length);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-900 text-white flex flex-col">
      {/* Background radial spotlight */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00c08b]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0070f3]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Grid container */}
      <div className="relative z-10 flex-1 px-8 sm:px-12 py-6 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block - Saved Vertical Space */}
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3 flex-shrink-0">
          <h2
            className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-tight leading-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 italic inline-block pr-4">
              Self-Healing Flow
            </span>
          </h2>

          {/* Interactive controls */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg flex-shrink-0">
            <button
              onClick={prevStage}
              className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center hover:bg-white/15 transition-all text-emerald-400 hover:scale-105"
              title="Previous Stage"
            >
              <span className="rotate-180 inline-block font-black text-base">➔</span>
            </button>
            <button
              onClick={togglePlay}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[10px] tracking-wider uppercase flex items-center gap-2 hover:opacity-95 shadow-md shadow-emerald-500/20"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 fill-white text-white" />
                  PAUSE SIM
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                  RUN SIM
                </>
              )}
            </button>
            <button
              onClick={nextStage}
              className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 grid place-items-center hover:bg-white/15 transition-all text-emerald-400 hover:scale-105"
              title="Next Stage"
            >
              <span className="font-black text-base">➔</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid - Large high-contrast cards, Maximized Height */}
        <div className="flex-1 grid grid-cols-12 gap-6 mt-4.5 items-stretch overflow-hidden min-h-[420px] max-h-[500px]">
          
          {/* Left panel: 5 stages (col-span-4) */}
          <div className="col-span-4 flex flex-col justify-between py-1 pr-1 border-r border-dashed border-white/10">
            <div className="space-y-2">
              {STAGES.map((s, i) => {
                const isSelected = i === active;
                const isCompleted = i < active;
                return (
                  <button
                    key={s.n}
                    onClick={() => selectStage(i)}
                    className="w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-4 group relative overflow-hidden"
                    style={{
                      borderColor: isSelected
                        ? '#00c08b'
                        : isCompleted
                        ? 'rgba(16, 185, 129, 0.4)'
                        : 'rgba(255, 255, 255, 0.08)',
                      backgroundColor: isSelected
                        ? 'rgba(0, 192, 139, 0.08)'
                        : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    {isSelected && (
                      <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-emerald-400 to-teal-400" />
                    )}

                    <div
                      className="h-9 w-9 rounded-xl grid place-items-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isSelected || isCompleted
                          ? 'linear-gradient(135deg, #00c08b, #0d9488)'
                          : 'rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <s.Icon
                        className="h-5 w-5 transition-colors"
                        style={{ color: isSelected || isCompleted ? '#ffffff' : '#94a3b8' }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-black uppercase text-emerald-400 tracking-wider">
                          STAGE {s.n}
                        </span>
                        {isCompleted && (
                          <span className="text-[8.5px] uppercase font-mono tracking-wider text-emerald-400 font-black">
                            PASSED
                          </span>
                        )}
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <div
                        className="text-[15px] font-black tracking-tight leading-tight text-white group-hover:text-emerald-400 transition-colors"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {s.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom active stage details box */}
            <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 leading-relaxed">
              <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase text-emerald-400 tracking-wider mb-1.5">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" /> SIMULATOR FLOW STATE
              </div>
              <div className="text-[13px] font-bold text-slate-200 leading-snug">
                {active === 0 && 'Akshay Patwa logs a new ticket on the Philips ServiceNow portal. Due to vague description "Unable to access incident", AIRA takes operational control.'}
                {active === 1 && 'AIRA intercepts the ticket in real-time, responding automatically on the portal with six diagnostic questions to gather structured context.'}
                {active === 2 && 'Akshay responds directly on the Service Portal interface, providing exact parameters (blank screens, access logs, Brooklyn office network).'}
                {active === 3 && 'AIRA aggregates the chat data, invokes 2 predictive models (similarity incidents & field classification), runs roles/group validation scripts, and compiles details.'}
                {active === 4 && 'The GenAI LLM reasons over the aggregated workspace context, formulates structural resolution notes, automatically updates the ticket fields, and resolves the issue.'}
              </div>
            </div>
          </div>

          {/* Right panel: Live Service Portal & Incident Console replica (col-span-8) - WHITE CONTAINER */}
          <div className="col-span-8 flex flex-col rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-2xl">
            
            {/* ServiceNow / Portal Header - Light Theme */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-100 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="h-5 w-[1px] bg-slate-300 mx-1" />
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {active < 3 ? 'PHILIPS SERVICE PORTAL // USER EXPERIENCE' : 'SERVICENOW WORKSPACE // AIRA BRAIN ENGINE'}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] font-black">
                <span className="text-[#00c08b] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300">
                  INC4881324
                </span>
                <span className="text-slate-500 uppercase">STATE: {active === 4 ? 'RESOLVED' : 'NEW'}</span>
              </div>
            </div>

            {/* Screen Container */}
            <div className="flex-1 p-5 overflow-auto relative bg-[#f8fafc] text-slate-800">
              
              {/* STAGES 1, 2, 3: Service Portal Simulator Interface */}
              {active <= 2 && (
                <div className="grid grid-cols-12 gap-5 h-full animate-fade-in">
                  
                  {/* Left Column: Chat Conversation Stream */}
                  <div className="col-span-8 flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-4 h-[350px]">
                    <div className="flex-1 overflow-auto space-y-3.5 pr-1 slide-scroll text-[12.5px]">
                      
                      {/* Outage Banner at Top */}
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-[12px] font-semibold text-blue-700 flex justify-between items-center">
                        <span>Incident: **Unable to access incident**</span>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-[9px] uppercase px-2 py-1 rounded">Cancel Incident</button>
                      </div>

                      {/* User's Original Ticket Entry */}
                      <div className="flex items-start gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-slate-200 border border-slate-350 grid place-items-center text-slate-600 font-mono text-[10px] font-black flex-shrink-0">
                          AP
                        </div>
                        <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 font-semibold text-slate-700 leading-snug">
                          <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Akshay Patwa (User) · just now</span>
                          "Unable to access incident"
                        </div>
                      </div>

                      {/* Stage 2 & 3: AIRA Diagnostic Response */}
                      {active >= 1 && (
                        <div className="flex items-start gap-2.5 ml-6 animate-fade-in-up">
                          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-white font-mono text-[10px] font-black shadow-md flex-shrink-0">
                            S
                          </div>
                          <div className="bg-white text-slate-800 rounded-2xl rounded-tl-none p-3.5 font-bold leading-relaxed border border-slate-200 shadow-sm">
                            <span className="block text-[8.5px] font-black text-emerald-600 uppercase tracking-wider mb-1">AIRA Support Assistant (System)</span>
                            Hi Akshay Patwa,<br />
                            I'm AIRA, your AI support assistant. To help accelerate the analysis and identify the most accurate resolution for your incident, please provide the following details:
                            <ol className="list-decimal list-inside mt-2 space-y-1 text-slate-700 font-semibold text-[12px]">
                              <li>Which specific ServiceNow module or page are you trying to access when the issue occurs?</li>
                              <li>What exactly happens when you try to access the incident (e.g., error message, blank screen, slow loading)?</li>
                              <li>Is this issue occurring only for you or for multiple users in your team/organization?</li>
                              <li>Are you connected via office network, VPN, or any other specific environment when the problem happens?</li>
                              <li>Have you attempted any troubleshooting steps so far (e.g., different browser, clearing cache)?</li>
                              <li>Does this issue affect any ongoing business operations or deadlines?</li>
                            </ol>
                          </div>
                        </div>
                      )}

                      {/* Stage 3: User reply answers */}
                      {active >= 2 && (
                        <div className="flex items-start gap-2.5 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                          <div className="h-7 w-7 rounded-full bg-slate-200 border border-slate-350 grid place-items-center text-slate-600 font-mono text-[10px] font-black flex-shrink-0">
                            AP
                          </div>
                          <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3.5 font-bold text-slate-700 leading-relaxed">
                            <span className="block text-[8px] font-black text-slate-400 uppercase tracking-wider mb-1">Akshay Patwa · just now</span>
                            <div className="space-y-1">
                              <div>1. Trying to access the ServiceNow incident details/form workspace list.</div>
                              <div>2. It loads a blank screen with a scoped app permission error.</div>
                              <div>3. Only for me, other team members can access incident forms fine.</div>
                              <div>4. Connected via office New York intranet.</div>
                              <div>5. Yes, tried Chrome/Safari, cleared local browser cache, still fails.</div>
                              <div>6. Yes, I cannot review my critical tickets for the current sprint.</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chat Text Input Area */}
                    <div className="flex items-center gap-2 border-t border-slate-200 pt-2.5 mt-2">
                      <input
                        type="text"
                        readOnly
                        placeholder={active === 2 ? 'Message sent successfully.' : 'Type your message here...'}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[12px] placeholder-slate-550 font-semibold outline-none text-slate-750"
                      />
                      <button className="h-8 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center">
                        Send
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Ticket details box (col-span-4) */}
                  <div className="col-span-4 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between text-[12px]">
                    <div>
                      <h4 className="font-mono text-[9px] font-black text-slate-400 uppercase border-b border-slate-100 pb-2 mb-3">Ticket Details</h4>
                      <div className="space-y-2.5">
                        <div>
                          <span className="block text-[8px] font-black text-slate-400 uppercase">Number</span>
                          <span className="font-mono font-black text-slate-800">INC4881324</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-black text-slate-400 uppercase">State</span>
                          <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5 text-[11px] border border-emerald-200">New</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-black text-slate-400 uppercase">Short description</span>
                          <span className="font-bold text-slate-800 block truncate">Unable to access incident</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-black text-slate-400 uppercase">Service</span>
                          <span className="font-mono font-bold text-slate-800">SERVICENOW</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-black text-slate-400 uppercase">Affected User</span>
                          <span className="font-semibold text-slate-800">Akshay Patwa</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10.5px] leading-relaxed text-slate-500 font-semibold mt-4">
                      <span className="font-bold text-[#00c08b] block mb-1">Outage Notice:</span>
                      The SERVICENOW service is currently experiencing performance issues...
                    </div>
                  </div>

                </div>
              )}

              {/* STAGE 4: Predictive AI models & technical scripts processing */}
              {active === 3 && (
                <div className="space-y-5 animate-fade-in flex flex-col h-full justify-between pb-1">
                  
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-[13.5px] font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-emerald-600" /> Model Execution & Back-End Scripts Runtime
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-300 text-emerald-700 animate-pulse font-black">AI HARVESTING ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Predictive Model 1: Similarity incidents */}
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-[12px] font-black text-[#00c08b] flex items-center gap-1.5 font-mono">
                          <History className="h-4.5 w-4.5" /> MODEL 1: SIMILAR INCIDENTS FINDER
                        </span>
                        <span className="text-[9px] font-mono font-bold text-slate-400">Top 3 Matches</span>
                      </div>
                      <div className="space-y-2 text-[11.5px]">
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="truncate">INC0038421 - ACL checks failure user role sync</span>
                          <span className="text-[9.5px] font-mono text-emerald-600 font-black flex-shrink-0">94% MATCH</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="truncate">INC0028162 - Scoped app user access denial</span>
                          <span className="text-[9.5px] font-mono text-[#84cc16] font-bold flex-shrink-0">86% MATCH</span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="truncate">INC0019281 - Stale cache record user session</span>
                          <span className="text-[9.5px] font-mono text-slate-400 flex-shrink-0">81% MATCH</span>
                        </div>
                      </div>
                    </div>

                    {/* Predictive Model 2: Field Categorization */}
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-[12px] font-black text-[#00c08b] flex items-center gap-1.5 font-mono">
                          <Database className="h-4.5 w-4.5" /> MODEL 2: FIELD CLASSIFIER
                        </span>
                        <span className="text-[9px] font-mono font-bold text-slate-400">Predictions</span>
                      </div>
                      <div className="space-y-2 text-[11.5px]">
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="text-slate-400">Category</span>
                          <span className="font-bold text-slate-800">Application <span className="text-[9px] font-mono text-emerald-600 font-black">(95%)</span></span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="text-slate-400">Subcategory</span>
                          <span className="font-bold text-slate-800">ServiceNow <span className="text-[9px] font-mono text-emerald-600 font-black">(91%)</span></span>
                        </div>
                        <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between items-center font-semibold text-slate-700">
                          <span className="text-slate-400">Configuration Item</span>
                          <span className="font-bold text-slate-800">Incident Management <span className="text-[9px] font-mono text-emerald-600 font-black">(96%)</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operational validation scripts */}
                  <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-sm">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-1.5">
                      <span className="text-[12.5px] font-black text-blue-600 flex items-center gap-1.5 font-mono">
                        <Terminal className="h-4.5 w-4.5" /> SYSTEM LOGS: BACK-END DIAGNOSTIC SCRIPTS
                      </span>
                      <span className="text-[9px] font-mono font-bold text-slate-400">Executed 3 scripts</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-[12px] font-semibold">
                      <div className="p-2 rounded bg-slate-50 border border-emerald-200 flex items-center justify-between">
                        <span className="text-slate-400">Active User Check</span>
                        <span className="font-black text-emerald-600">ACTIVE (OK)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-emerald-200 flex items-center justify-between">
                        <span className="text-slate-400">Support Group Member</span>
                        <span className="font-black text-emerald-600">WT Apps (YES)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-rose-200 flex items-center justify-between">
                        <span className="text-slate-400">itil_admin role sync</span>
                        <span className="font-black text-rose-500 animate-pulse">MISSING (FAIL)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-center font-bold text-[13px] text-white tracking-wide animate-pulse shadow-md">
                    🚀 HARVESTING COMPLETE. AGGREGATED METADATA CONTEXT SENT TO LLM ENGINE...
                  </div>
                </div>
              )}

              {/* STAGE 5: LLM Resolution & ServiceNow updates */}
              {active === 4 && (
                <div className="space-y-4 animate-fade-in flex flex-col h-full justify-between pb-1">
                  
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-[13.5px] font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-emerald-600" /> LLM Context Reasoner & DB Incident Update
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-700 font-black animate-bounce">TICKET RESOLVED</span>
                  </div>

                  {/* LLM formulated Resolution Details */}
                  <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3.5 text-[13px] shadow-sm">
                    <div>
                      <span className="block text-[8.5px] font-mono font-black uppercase text-emerald-600 tracking-wider">AGGREGATED REASONING CAUSE DETERMINATION</span>
                      <p className="font-bold text-slate-700 mt-1 leading-snug">
                        User criteria sync failure blocked <span className="font-mono text-emerald-600">Akshay Patwa</span> from accessing incident tables due to a missing <span className="font-mono text-rose-500">itil_admin</span> role map in WT Apps Servicedesk group.
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3.5">
                      <span className="block text-[8.5px] font-mono font-black uppercase text-emerald-600 tracking-wider">FORMULATED RESOLUTION NOTES (Applied to Incident closure)</span>
                      <p className="font-bold text-emerald-700 mt-1 leading-relaxed bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-250">
                        "Successfully mapped the missing itil_admin permission schema to user account Akshay Patwa. Flushed the active ServiceNow database user criteria permission cache tables and verified access. Page loaded successfully without access timeouts."
                      </p>
                    </div>
                  </div>

                  {/* Live Database Fields Updated Visualizer */}
                  <div className="grid grid-cols-4 gap-3 text-[12px] font-semibold">
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                      <span className="block text-[8px] text-slate-400 font-black uppercase">Category</span>
                      <span className="text-slate-800 block mt-0.5">Application</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                      <span className="block text-[8px] text-slate-400 font-black uppercase">Subcategory</span>
                      <span className="text-slate-800 block mt-0.5">ServiceNow</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                      <span className="block text-[8px] text-slate-400 font-black uppercase">Assignment Group</span>
                      <span className="text-slate-800 block mt-0.5">WT Apps Servicedesk</span>
                    </div>
                    <div className="p-2.5 bg-emerald-50 border border-emerald-400 rounded-xl text-center shadow-lg animate-pulse-glow">
                      <span className="block text-[8px] text-emerald-600 font-black uppercase">Incident State</span>
                      <span className="text-emerald-700 font-black block mt-0.5">Resolved (Auto)</span>
                    </div>
                  </div>

                  {/* Success notification */}
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-[#84cc16] rounded-xl flex items-center justify-between text-white font-black text-[13px] shadow-lg shadow-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 animate-bounce" />
                      <span>Incident INC4881324 successfully updated and closed automatically in 32s!</span>
                    </div>
                    <span className="text-[10px] font-mono bg-black/25 px-2 py-0.5 rounded font-black">100% GOVERNED</span>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-white/10 pt-3.5 flex items-center justify-between text-[12px] font-semibold text-slate-400 flex-shrink-0">
          <span>AIRA incident self-healing pipeline ensures zero ticket toil for repetitive Philips issues.</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Workflow className="h-4 w-4 animate-pulse" /> Evolve ServiceNow from reactive ticketing into autonomous operations.
          </span>
        </div>
      </div>
    </div>
  );
}
