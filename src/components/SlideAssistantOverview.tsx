import { useState, useEffect } from 'react';
import {
  Zap,
  CheckCircle,
  X,
  Search,
} from 'lucide-react';

type AIAction = {
  id: string;
  name: string;
  prompt: string;
  output: string;
  targetField: 'workNotes' | 'comments' | 'closeNotes' | 'category' | 'causeCode';
  targetValue: string;
};

const ACTIONS: AIAction[] = [
  {
    id: 'sum',
    name: 'Summarize this incident',
    prompt: 'Summarize ticket history & technical context',
    output: `**AIRA Summary for INC4881323:**
• **Core Issue:** User Akshay Patwa is locked out of accessing the Incident Management module within ServiceNow. Other platform features are verified functional.
• **Root Cause Analysis:** A recent deployment of scoped app permissions has restricted Akshay's security group from the standard incident workspace tables.
• **Status:** Stale session criteria locks detected.
• **Recommended Action:** Revise itil_admin group role mapping and flush the criteria table cache.`,
    targetField: 'workNotes',
    targetValue: 'AIRA Incident Summary Applied: Scoped app security permission restriction detected.',
  },
  {
    id: 'res',
    name: 'Generate resolution notes',
    prompt: 'Compile technical closure text and closure codes',
    output: `**AIRA Generated Closure Notes:**
• **Resolution Action:** Synced the WT Apps Servicedesk security group permissions, mapped the itil_admin role, and flushed active database session cache files.
• **Resolution Code:** Solved (Workaround Applied)
• **Cause Code:** Permissions / ACL mapping mismatch.
• **Next Step:** Verify Akshay Patwa's incident list view loading time.`,
    targetField: 'closeNotes',
    targetValue: 'WT Apps Servicedesk group roles updated. User criteria cache cleared. Access verified.',
  },
  {
    id: 'cust',
    name: 'Draft customer update',
    prompt: 'Draft an empathetic, client-facing status email update',
    output: `Hi Akshay Patwa,

We have analyzed your access timeout issue on the incident workspace module. Our support engineering team has identified a role synchronization issue on your account. 

We are actively applying a permission cache refresh. You should be able to log back into the incident records portal in 5 minutes. Thank you for your patience!

Best regards,
WT Apps Servicedesk (via AIRA Copilot)`,
    targetField: 'comments',
    targetValue: 'SLA Status Update: Mapped user permissions and sent access recovery notification.',
  },
  {
    id: 'work',
    name: 'Summarize work notes',
    prompt: 'Summarize all internal troubleshooting notes',
    output: `**AIRA Work Notes Digest:**
• **11:14:** Ticket filed by self-service portal.
• **11:15:** Initial support group assigned to WT Apps Servicedesk.
• **11:16:** Diagnostic checks verify active status, but fail on itil role authorization.
• **Action:** Flagged as scoped app access restriction.`,
    targetField: 'workNotes',
    targetValue: 'Internal work logs digest completed. Security group mapping mismatch flagged.',
  },
  {
    id: 'steps',
    name: 'Suggest next troubleshooting steps',
    prompt: 'Analyze context and recommend next investigation steps',
    output: `**AIRA Recommended Path:**
1. **Access Audit:** Query user roles to confirm Akshay has itil access.
2. **Session Reset:** Execute session flush script via ServiceNow Background Scripts page.
3. **ACL Check:** Review ReadSecureCardToken and read transaction ACL rules.`,
    targetField: 'workNotes',
    targetValue: 'Troubleshooting steps compiled: check user roles, reset user criteria session table.',
  },
];

export default function SlideAssistantOverview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<AIAction | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Parent form fields in ServiceNow
  const category = 'Application';
  const [causeCode, setCauseCode] = useState('-- None --');
  const [workNotes, setWorkNotes] = useState('');
  const [comments, setComments] = useState('');
  const [closeNotes, setCloseNotes] = useState('');
  const [incidentState, setIncidentState] = useState('In Progress');

  // Typing simulator
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
      }, 5);
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

    if (selectedAction.targetField === 'workNotes') {
      setWorkNotes(selectedAction.targetValue);
    } else if (selectedAction.targetField === 'comments') {
      setComments(selectedAction.targetValue);
    } else if (selectedAction.targetField === 'closeNotes') {
      setCloseNotes(selectedAction.targetValue);
      setIncidentState('Resolved');
      setCauseCode('Permissions Mismatch');
    }

    setSuccessMsg(`Successfully updated ServiceNow ${selectedAction.targetField}!`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-900 text-white flex flex-col">
      {/* Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0070f3]/8 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex-1 px-8 sm:px-12 py-6 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block - Saved Vertical Space */}
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3 flex-shrink-0">
          <h2
            className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-tight leading-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 italic inline-block pr-4">
              AI Copilot Assistant
            </span>
          </h2>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-[10.5px] font-black uppercase tracking-wider text-emerald-400 shadow-md">
            7-Day Persistent Memory
          </div>
        </div>

        {/* Live Interactive ServiceNow Console Replica - WHITE CONTAINER, Maximized Height */}
        <div className="flex-1 rounded-2xl border border-slate-250 bg-white overflow-hidden shadow-2xl mt-4.5 flex flex-col justify-between relative min-h-[420px] max-h-[500px]">
          
          {/* ServiceNow Workspace Browser-like Tab & Breadcrumbs Bar */}
          <div className="px-5 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2 text-[10px] font-bold text-slate-400">
            <span>Self-Service</span>
            <span>/</span>
            <span>Incidents</span>
            <span>/</span>
            <span className="text-slate-600 font-extrabold">INC4881323</span>
          </div>

          {/* ServiceNow Top Header Buttons bar - Light Theme */}
          <div className="px-5 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] font-black uppercase tracking-wider text-slate-600">Incident · INC4881323</span>
              <span className="font-mono text-[9px] bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded text-[#00c08b] font-bold">State: {incidentState}</span>
            </div>

            {/* Header shortcuts including AIRA Assistant */}
            <div className="flex gap-2">
              <button className="px-2.5 py-1 text-[11px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">Update</button>
              <button className="px-2.5 py-1 text-[11px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">Resolve</button>
              
              {/* Highlighted AIRA Assistant Trigger */}
              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 py-1.5 text-[11.5px] font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-white rounded shadow-lg shadow-emerald-500/20 border border-emerald-400 flex items-center gap-1.5 animate-pulse-glow"
              >
                AIRA AI Assistant ➔
              </button>
            </div>
          </div>

          {/* Form Content Replica from Screenshot - Light Theme */}
          <div className="flex-1 p-5 overflow-auto bg-[#f8fafc] grid grid-cols-12 gap-x-6 gap-y-4 text-[13px] font-semibold text-slate-700">
            {/* Left column fields (6 columns) */}
            <div className="col-span-6 space-y-3.5">
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> Caller
                </label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>Akshay Patwa</span>
                  <Search className="h-3 w-3 text-slate-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Affected User</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>Akshay Patwa</span>
                  <Search className="h-3 w-3 text-slate-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Service</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>SERVICENOW</span>
                  <Search className="h-3 w-3 text-slate-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Configuration item</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>Incident Management</span>
                  <Search className="h-3 w-3 text-slate-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> Category
                </label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
            </div>

            {/* Right column fields (6 columns) */}
            <div className="col-span-6 space-y-3.5">
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Impact</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>3 - Low</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Urgency</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>3 - Low</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Priority</label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner">4 - Low</div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Assignment group</label>
                <div className="w-[70%] px-3 py-1.5 bg-emerald-50 border border-emerald-300 rounded text-[#00c08b] flex items-center justify-between">
                  <span>WT Apps Servicedesk</span>
                  <Search className="h-3 w-3 text-emerald-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Cause code</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>{causeCode}</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
            </div>

            {/* Full width descriptions */}
            <div className="col-span-12 space-y-3 border-t border-slate-200 pt-4 mt-2">
              <div className="flex items-start gap-4">
                <label className="text-slate-555 text-[11.5px] font-bold w-[12%] mt-1 flex-shrink-0 flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> Short Description
                </label>
                <div className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 shadow-sm">Unable to access incidents</div>
              </div>

              <div className="flex items-start gap-4">
                <label className="text-slate-400 text-[11.5px] font-bold w-[12%] mt-1 flex-shrink-0">Description</label>
                <div className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded text-slate-800 leading-snug shadow-sm">
                  User Akshay Patwa reports being unable to access incident records in ServiceNow, while other functionalities remain accessible. The issue affects only his account and occurs consistently.
                </div>
              </div>

              {/* Dynamic Applied Fields */}
              {(workNotes || comments || closeNotes) && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2 mt-2 animate-fade-in-scale text-emerald-800">
                  {workNotes && (
                    <div className="text-[12px]"><span className="text-emerald-700 font-bold uppercase font-mono text-[9px] mr-2">[Work Notes Added]:</span> {workNotes}</div>
                  )}
                  {comments && (
                    <div className="text-[12px]"><span className="text-emerald-700 font-bold uppercase font-mono text-[9px] mr-2">[Comments Added]:</span> {comments}</div>
                  )}
                  {closeNotes && (
                    <div className="text-[12px]"><span className="text-emerald-700 font-bold uppercase font-mono text-[9px] mr-2">[Close Notes Added]:</span> {closeNotes}</div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* ServiceNow footer banner */}
          <div className="px-5 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[11px] font-semibold">
            <span>SLA: 4 hours remaining</span>
            <span>Last Updated: 2026-05-20 11:14:39</span>
          </div>

          {/* ==================== SCREENSHOT 2 MODAL OVERLAY ==================== */}
          {modalOpen && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
              <div className="w-[85%] max-w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between animate-fade-in-scale">
                
                {/* Modal Header */}
                <div className="px-6 py-4 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[18px] font-black text-slate-900 font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    AIRA AI Assistant
                  </span>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="h-8 w-8 rounded-lg border border-slate-300 bg-white grid place-items-center text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal Body Contents */}
                <div className="p-6 space-y-4 max-h-[350px] overflow-auto slide-scroll text-slate-800">
                  
                  {/* Record Box */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-semibold text-[13px] text-slate-700 leading-relaxed">
                    <div><strong className="text-slate-900">Table:</strong> incident</div>
                    <div className="mt-1"><strong className="text-slate-900">Record Number:</strong> INC4881323</div>
                  </div>

                  {/* Suggested Actions */}
                  <div className="space-y-2">
                    <span className="block text-[11px] font-black uppercase text-slate-400 tracking-wider">Suggested Actions</span>
                    <div className="flex flex-wrap gap-2">
                      {ACTIONS.map((act) => {
                        const isSelected = selectedAction?.id === act.id;
                        return (
                          <button
                            key={act.id}
                            disabled={isGenerating}
                            onClick={() => triggerAction(act)}
                            className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 text-slate-800 font-extrabold text-[12.5px] hover:scale-105 transition-all shadow-sm group"
                            style={{
                              borderColor: isSelected ? '#10b981' : undefined,
                              boxShadow: isSelected ? '0 0 10px rgba(16,185,129,0.1)' : undefined,
                            }}
                          >
                            <span className="group-hover:text-emerald-600 transition-colors">{act.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* AI Response Box (Dashed) */}
                  <div className="space-y-2">
                    <span className="block text-[11px] font-black uppercase text-slate-400 tracking-wider">AI Response</span>
                    <div className="rounded-xl border border-dashed border-slate-300 p-4 bg-slate-50/50 min-h-[120px] flex flex-col justify-between">
                      {selectedAction ? (
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-[12.5px] leading-relaxed text-slate-700 font-medium font-mono whitespace-pre-wrap">
                            {generatedText}
                            {isGenerating && (
                              <span className="inline-block w-1.5 h-4 bg-emerald-500 animate-pulse ml-0.5" />
                            )}
                          </p>

                          {!isGenerating && generatedText && (
                            <button
                              onClick={applyAIOutput}
                              className="mt-3 py-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-[11px] tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-emerald-500/10"
                            >
                              <Zap className="h-4 w-4 animate-pulse text-white fill-white" />
                              Apply to Incident Form ➔
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="text-slate-400 font-bold text-[13px] text-center py-6">
                          Select an action to generate a response.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Assistant History */}
                  <div className="space-y-2">
                    <span className="block text-[11px] font-black uppercase text-slate-400 tracking-wider">Assistant History</span>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-[12.5px] leading-relaxed space-y-3 font-semibold text-slate-700">
                      <div>
                        <span className="block text-[8.5px] font-black text-slate-400 uppercase">USER</span>
                        Summarize this incident
                      </div>
                      <div className="border-t border-slate-200 pt-2.5">
                        <span className="block text-[8.5px] font-black text-emerald-600 uppercase">ASSISTANT</span>
                        Incident INC4881323: Akshay Patwa is unable to access incident records in ServiceNow, while other functionalities remain accessible. The issue affects only his account and occurs consistently. Role and group membership are confirmed, suggesting a likely ACL or scoped application restriction. The ticket is assigned to WT Apps Servicedesk.
                      </div>
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-[12px] uppercase shadow-md shadow-slate-900/10"
                  >
                    Close Modal
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Success floating notification */}
        {successMsg && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-black text-[13px] px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-emerald-400 z-50 animate-fade-in-scale">
            <CheckCircle className="h-5 w-5 text-white" />
            {successMsg}
          </div>
        )}

        {/* Bottom Status bar */}
        <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="rounded-2xl border border-slate-200 dark:border-[#80b6a1]/15 bg-white/95 dark:bg-[#030c0b]/75 backdrop-blur-md px-4 py-2.5 shadow-sm">
            <div className="flex items-center justify-between text-[12.5px] font-black text-slate-500 dark:text-[#80b6a1]/85">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4.5 w-4.5 text-[#10b981]" />
                AIRA Copilot automates L1/L2 operational analysis directly in ServiceNow.
              </span>
              <span className="text-[#10b981] font-mono uppercase tracking-widest text-[9.5px]">
                ⚡ 40% – 70% Reduction in manual incident review effort
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
