import { useState, useEffect } from 'react';
import {
  Zap,
  CheckCircle,
  X,
  Search,
  Sparkles,
  Bot,
  Layers,
  MessageSquare,
  FileCheck2,
  Mail,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type AIAction = {
  id: string;
  name: string;
  Icon: LucideIcon;
  output: string;
  targetField: 'workNotes' | 'comments' | 'closeNotes';
  targetValue: string;
};

const ACTIONS: AIAction[] = [
  {
    id: 'sum',
    name: 'Summarize this incident',
    Icon: Sparkles,
    output: `AIRA Summary · INC4881323
• Core Issue: Akshay Patwa locked out of Incident Management module in ServiceNow. Other platform features verified functional.
• Root Cause: Recent scoped-app permission deployment restricted his group from incident workspace tables.
• Status: Stale session criteria locks detected.
• Recommendation: Revise itil_admin group role mapping, flush criteria-table cache.`,
    targetField: 'workNotes',
    targetValue: 'AIRA Summary applied: scoped-app security restriction detected. Recommend role re-map.',
  },
  {
    id: 'res',
    name: 'Generate resolution notes',
    Icon: FileCheck2,
    output: `AIRA Closure Notes
• Resolution: Synced WT Apps Servicedesk group permissions, mapped itil_admin, flushed active session cache.
• Resolution Code: Solved (Workaround Applied)
• Cause Code: Permissions / ACL mapping mismatch
• Next Step: Verify Akshay's incident list view load.`,
    targetField: 'closeNotes',
    targetValue: 'WT Apps Servicedesk group roles updated. User criteria cache cleared. Access verified.',
  },
  {
    id: 'cust',
    name: 'Draft customer update',
    Icon: Mail,
    output: `Hi Akshay,

We analyzed your access timeout on the incident workspace. Our team identified a role-sync issue on your account and applied a permission cache refresh.

You should regain access in under 5 minutes. Thanks for your patience.

— WT Apps Servicedesk (via AIRA Copilot)`,
    targetField: 'comments',
    targetValue: 'Status update sent: mapped permissions and access recovery notification delivered.',
  },
  {
    id: 'work',
    name: 'Summarize work notes',
    Icon: Layers,
    output: `Work Notes Digest
• 11:14 · Ticket filed via self-service portal.
• 11:15 · Assigned to WT Apps Servicedesk.
• 11:16 · Active status verified; itil-role authorization failed.
• Flag: scoped app access restriction.`,
    targetField: 'workNotes',
    targetValue: 'Work-log digest compiled. Security group mapping mismatch flagged.',
  },
  {
    id: 'steps',
    name: 'Suggest next steps',
    Icon: Workflow,
    output: `Recommended Path
1. Access Audit: query user roles, confirm itil access.
2. Session Reset: run flush script in Background Scripts.
3. ACL Check: review read transaction ACL rules.`,
    targetField: 'workNotes',
    targetValue: 'Next-steps recorded: roles audit → session flush → ACL review.',
  },
];

export default function SlideAssistantOverview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<AIAction | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const category = 'Application';
  const [causeCode, setCauseCode] = useState('-- None --');
  const [workNotes, setWorkNotes] = useState('');
  const [comments, setComments] = useState('');
  const [closeNotes, setCloseNotes] = useState('');
  const [incidentState, setIncidentState] = useState('In Progress');

  useEffect(() => {
    if (selectedAction && isGenerating) {
      setGeneratedText('');
      let index = 0;
      const fullText = selectedAction.output;
      const interval = setInterval(() => {
        setGeneratedText((prev) => prev + fullText[index]);
        index++;
        if (index >= fullText.length - 1) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 6);
      return () => clearInterval(interval);
    }
  }, [selectedAction, isGenerating]);

  const triggerAction = (action: AIAction) => {
    setSelectedAction(action);
    setIsGenerating(true);
    setGeneratedText('');
  };

  const applyAIOutput = () => {
    if (!selectedAction) return;
    if (selectedAction.targetField === 'workNotes') setWorkNotes(selectedAction.targetValue);
    else if (selectedAction.targetField === 'comments') setComments(selectedAction.targetValue);
    else if (selectedAction.targetField === 'closeNotes') {
      setCloseNotes(selectedAction.targetValue);
      setIncidentState('Resolved');
      setCauseCode('Permissions Mismatch');
    }
    setSuccessMsg(`Applied to ServiceNow · ${selectedAction.targetField}`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

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
              <Bot className="h-3.5 w-3.5 text-[#00c08b]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#84cc16] uppercase">
                Use Case 02 · AI Copilot Assistant
              </span>
            </div>
            <h2
              className="text-[2.3rem] sm:text-[2.7rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up"
              style={{ animationDelay: '80ms', fontFamily: "'Sora', sans-serif" }}
            >
              AIRA copilots{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: 'linear-gradient(110deg, #34d399, #84cc16 55%, #00c08b)' }}
              >
                every engineer
              </span>{' '}
              — inside the form.
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#030c0b]/75 border border-slate-200 dark:border-[#00c08b]/30 shadow-xl backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <Layers className="h-4 w-4 text-[#00c08b]" />
            <span className="font-mono text-[10px] font-black tracking-[0.22em] uppercase text-[#009e72] dark:text-[#84cc16]">
              7-Day Persistent Memory
            </span>
          </div>
        </div>

        {/* Console */}
        <div className="flex-1 rounded-2xl border border-slate-200 dark:border-white/10 bg-white overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,192,139,0.12)] mt-5 flex flex-col relative min-h-[420px] max-h-[510px]">

          {/* Browser chrome */}
          <div className="px-4 py-1.5 bg-slate-50/80 border-b border-slate-200 flex items-center gap-2 text-[9.5px] font-bold text-slate-400">
            <span>Self-Service</span>
            <span>/</span>
            <span>Incidents</span>
            <span>/</span>
            <span className="text-slate-700 font-black font-mono">INC4881323</span>
          </div>

          {/* ServiceNow header */}
          <div className="px-5 py-3 bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] font-black uppercase tracking-[0.18em] text-slate-600">
                Incident · INC4881323
              </span>
              <span
                className={`font-mono text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-[0.15em] border ${
                  incidentState === 'Resolved'
                    ? 'bg-[#00c08b]/10 border-[#00c08b]/30 text-[#009e72]'
                    : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}
              >
                State · {incidentState}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-[10.5px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm transition-all">
                Update
              </button>
              <button className="px-3 py-1 text-[10.5px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm transition-all">
                Resolve
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="relative px-3.5 py-1.5 text-[10.5px] font-black bg-gradient-to-r from-[#00c08b] to-[#34d399] hover:opacity-95 text-white rounded shadow-lg shadow-[#00c08b]/25 border border-[#00c08b]/40 flex items-center gap-1.5 group"
              >
                <span className="absolute -left-0.5 -top-0.5 -right-0.5 -bottom-0.5 rounded-md bg-[#00c08b]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                AIRA Assistant
              </button>
            </div>
          </div>

          {/* Form body */}
          <div className="flex-1 p-5 overflow-auto bg-[#f7faf9] grid grid-cols-12 gap-x-6 gap-y-3 text-[12.5px] font-semibold text-slate-700">
            <div className="col-span-6 space-y-3">
              {[
                { l: 'Caller', v: 'Akshay Patwa', req: true, search: true },
                { l: 'Affected User', v: 'Akshay Patwa', search: true },
                { l: 'Service', v: 'SERVICENOW', search: true, mono: true },
                { l: 'Configuration item', v: 'Incident Management', search: true },
                { l: 'Category', v: category, req: true, dropdown: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 justify-between">
                  <label className="text-[11px] font-black text-slate-500 flex items-center gap-1 w-[26%]">
                    {row.req && <span className="text-rose-500 font-black">*</span>} {row.l}
                  </label>
                  <div className="w-[74%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                    <span className={row.mono ? 'font-mono font-black' : ''}>{row.v}</span>
                    {row.dropdown && <span className="text-[9px] text-slate-400">▼</span>}
                    {row.search && <Search className="h-3 w-3 text-slate-400" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-6 space-y-3">
              {[
                { l: 'Impact', v: '3 - Low', dropdown: true },
                { l: 'Urgency', v: '3 - Low', dropdown: true },
                { l: 'Priority', v: '4 - Low', readonly: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 justify-between">
                  <label className="text-[11px] font-black text-slate-500 w-[26%]">{row.l}</label>
                  <div
                    className={`w-[74%] px-3 py-1.5 rounded shadow-sm flex items-center justify-between ${
                      row.readonly
                        ? 'bg-slate-100 border border-slate-200 text-slate-400 font-mono shadow-inner'
                        : 'bg-white border border-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{row.v}</span>
                    {row.dropdown && <span className="text-[9px] text-slate-400">▼</span>}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 justify-between">
                <label className="text-[11px] font-black text-slate-500 w-[26%]">Assignment group</label>
                <div className="w-[74%] px-3 py-1.5 bg-[#00c08b]/8 border border-[#00c08b]/30 rounded text-[#009e72] font-bold flex items-center justify-between">
                  <span>WT Apps Servicedesk</span>
                  <Search className="h-3 w-3 text-[#00c08b]" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-[11px] font-black text-slate-500 w-[26%]">Cause code</label>
                <div
                  className={`w-[74%] px-3 py-1.5 rounded text-slate-800 shadow-sm flex items-center justify-between border ${
                    causeCode === '-- None --'
                      ? 'bg-white border-slate-200'
                      : 'bg-[#00c08b]/8 border-[#00c08b]/30 text-[#009e72] font-bold'
                  }`}
                >
                  <span>{causeCode}</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 space-y-2.5 border-t border-slate-200 pt-3 mt-1">
              <div className="flex items-start gap-4">
                <label className="text-[11px] font-black text-slate-500 w-[12%] mt-1 flex-shrink-0 flex items-center gap-1">
                  <span className="text-rose-500 font-black">*</span> Short Description
                </label>
                <div className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 shadow-sm">
                  Unable to access incidents
                </div>
              </div>

              <div className="flex items-start gap-4">
                <label className="text-[11px] font-black text-slate-500 w-[12%] mt-1 flex-shrink-0">Description</label>
                <div className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 leading-snug shadow-sm text-[11.5px]">
                  User Akshay Patwa reports being unable to access incident records in ServiceNow while other functionalities remain accessible. The issue affects only his account and occurs consistently.
                </div>
              </div>

              {(workNotes || comments || closeNotes) && (
                <div className="p-3 bg-gradient-to-br from-[#00c08b]/8 to-[#84cc16]/6 border border-[#00c08b]/30 rounded-xl space-y-1.5 mt-1 animate-fade-in-scale">
                  {workNotes && (
                    <div className="text-[11.5px] text-slate-700">
                      <span className="font-mono font-black text-[#009e72] text-[8.5px] uppercase tracking-[0.18em] mr-2">
                        [Work Notes]
                      </span>
                      {workNotes}
                    </div>
                  )}
                  {comments && (
                    <div className="text-[11.5px] text-slate-700">
                      <span className="font-mono font-black text-[#009e72] text-[8.5px] uppercase tracking-[0.18em] mr-2">
                        [Comments]
                      </span>
                      {comments}
                    </div>
                  )}
                  {closeNotes && (
                    <div className="text-[11.5px] text-slate-700">
                      <span className="font-mono font-black text-[#009e72] text-[8.5px] uppercase tracking-[0.18em] mr-2">
                        [Close Notes]
                      </span>
                      {closeNotes}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="px-5 py-2.5 bg-gradient-to-b from-slate-50 to-slate-100/70 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[10.5px] font-bold">
            <span className="font-mono uppercase tracking-[0.18em]">SLA · 4h remaining</span>
            <span className="font-mono uppercase tracking-[0.18em]">Updated · 2026-05-20 11:14:39</span>
          </div>

          {/* Modal */}
          {modalOpen && (
            <div className="absolute inset-0 bg-black/55 backdrop-blur-md z-50 flex items-center justify-center p-5 animate-fade-in">
              <div className="w-[90%] max-w-[720px] bg-white rounded-2xl shadow-2xl border border-[#00c08b]/40 overflow-hidden flex flex-col animate-fade-in-scale relative">
                <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,192,139,0.4), rgba(132,204,22,0.3))', mixBlendMode: 'overlay', opacity: 0.4 }} />

                <div className="px-6 py-4 bg-gradient-to-r from-[#00c08b] via-[#10b981] to-[#84cc16] flex items-center justify-between text-white relative overflow-hidden">
                  <div className="absolute inset-0 shimmer-mask opacity-25 pointer-events-none" />
                  <div className="flex items-center gap-3 relative">
                    <div className="h-9 w-9 rounded-xl bg-white/20 grid place-items-center backdrop-blur-sm">
                      <Sparkles className="h-5 w-5 text-white animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[15px] font-black tracking-tight block leading-none" style={{ fontFamily: "'Sora', sans-serif" }}>
                        AIRA AI Assistant
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 mt-0.5 block">
                        Inside Incident Workspace · 7-day memory
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="h-8 w-8 rounded-lg bg-white/15 hover:bg-white/25 grid place-items-center text-white transition-colors relative"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <div className="p-5 space-y-3.5 max-h-[330px] overflow-auto slide-scroll text-slate-800 relative">
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-[10.5px] font-black text-slate-600 flex items-center justify-between">
                    <span>
                      <span className="text-slate-400">Table: </span>incident{' '}
                      <span className="text-slate-300 mx-1.5">·</span>{' '}
                      <span className="text-slate-400">Record: </span>INC4881323
                    </span>
                    <span className="text-[8.5px] tracking-[0.22em] uppercase text-[#009e72]">Context Bound</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.22em]">
                      Suggested Actions
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {ACTIONS.map((act) => {
                        const isSelected = selectedAction?.id === act.id;
                        return (
                          <button
                            key={act.id}
                            disabled={isGenerating}
                            onClick={() => triggerAction(act)}
                            className="px-3 py-2 rounded-xl bg-white border-2 text-left text-slate-800 font-extrabold text-[11.5px] hover:scale-[1.02] hover:border-[#00c08b]/50 transition-all shadow-sm group flex items-center gap-2"
                            style={{
                              borderColor: isSelected ? '#00c08b' : 'rgba(148,163,184,0.25)',
                              boxShadow: isSelected ? '0 6px 18px -6px rgba(0,192,139,0.35)' : undefined,
                            }}
                          >
                            <act.Icon className={`h-4 w-4 flex-shrink-0 transition-colors ${isSelected ? 'text-[#00c08b]' : 'text-slate-400 group-hover:text-[#00c08b]'}`} strokeWidth={2.4} />
                            <span className={`truncate ${isSelected ? 'text-[#009e72]' : 'group-hover:text-[#009e72]'}`}>
                              {act.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.22em]">
                      AI Response
                    </span>
                    <div className="rounded-xl border-2 border-dashed border-[#00c08b]/30 p-3.5 bg-gradient-to-br from-[#00c08b]/4 to-[#84cc16]/4 min-h-[120px] flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 text-[8.5px] font-mono font-black uppercase tracking-[0.2em] text-[#009e72]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inset-0 rounded-full bg-[#00c08b] animate-ping" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00c08b]" />
                        </span>
                        {isGenerating ? 'streaming' : 'ready'}
                      </div>

                      {selectedAction ? (
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-[11.5px] leading-relaxed text-slate-700 font-medium font-mono whitespace-pre-wrap pr-16">
                            {generatedText}
                            {isGenerating && (
                              <span className="inline-block w-1.5 h-3.5 bg-[#00c08b] animate-pulse ml-0.5 align-middle" />
                            )}
                          </p>

                          {!isGenerating && generatedText && (
                            <button
                              onClick={applyAIOutput}
                              className="mt-2.5 py-2 w-full rounded-xl bg-gradient-to-r from-[#00c08b] to-[#34d399] hover:opacity-95 text-white font-black text-[10.5px] tracking-[0.22em] uppercase flex items-center justify-center gap-2 shadow-md shadow-[#00c08b]/25"
                            >
                              <Zap className="h-3.5 w-3.5 animate-pulse text-white fill-white" />
                              Apply to Incident Form
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="text-slate-400 font-bold text-[12px] text-center py-7 flex flex-col items-center gap-1.5">
                          <MessageSquare className="h-5 w-5 text-[#00c08b]/40" />
                          Pick an action to generate a response.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.22em] text-slate-400">
                    Confidence 0.96 · Native to ServiceNow
                  </span>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-900 text-white font-black text-[10.5px] uppercase tracking-[0.16em] shadow-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Success toast */}
        {successMsg && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00c08b] to-[#34d399] text-white font-black text-[12px] px-5 py-2.5 rounded-2xl shadow-2xl shadow-[#00c08b]/30 flex items-center gap-2 z-50 animate-fade-in-scale border border-white/20">
            <CheckCircle className="h-4 w-4" />
            {successMsg}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span>AIRA Copilot automates L1/L2 operational analysis directly inside ServiceNow.</span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <Zap className="h-4 w-4 animate-pulse" />
            40 – 70% reduction in manual incident review.
          </span>
        </div>
      </div>
    </div>
  );
}
