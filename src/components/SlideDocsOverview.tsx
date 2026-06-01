import { useState, useEffect } from 'react';
import {
  FileText,
  Zap,
  GitBranch,
  CheckCircle2,
  FolderDown,
  Eye,
  X,
  Search,
  Sparkles,
  Boxes,
  ShieldCheck,
  ScrollText,
} from 'lucide-react';

type DocOption = {
  id: string;
  name: string;
  title: string;
  sections: string[];
};

const DOC_OPTIONS: DocOption[] = [
  {
    id: 'runbook',
    name: 'Deployment Runbook',
    title: 'Enterprise Deployment Runbook & Post-CAB Tasks',
    sections: [
      '1. PRE-DEPLOYMENT PREREQUISITES',
      'Verify DB connection pool ceiling limits in AWS KMS console and set pool limits to 250.',
      '2. DEPLOYMENT INSTRUCTIONS',
      '1. Import Update Set: US_084291_Checkout_Optimization_V2\n2. Run Schema Indexing Script via System Maintenance\n3. Restart VPN Integration Tunnel gateway-us-east',
      '3. ROLLBACK & DISASTER PROCEDURES',
      'In case of latency exceed >2500ms, restore DB compose pool size limits and delete composite indexing records.',
    ],
  },
  {
    id: 'sdd',
    name: 'Solution Design Document',
    title: 'Solution Design Document (SDD) · v2.1',
    sections: [
      '1. EXECUTIVE ARCHITECTURE SUMMARY',
      'This document designs the composite indexing and API logic for transaction tracking on payment-gateway-prod.',
      '2. COMPONENT DESIGN SPECIFICATIONS',
      '• Flow Designer: ProcessPendingEscrowFunds triggers on escrow changes.\n• Script Include: PaymentGatewayProcessor handles API handshakes.\n• Business Rule: ValidateTransactionLimit blocks multi-spend requests.',
      '3. DATA MODEL & SCHEMA SCHEMATICS',
      'Updates transaction table fields, defining composite index idx_transactions_status_date.',
    ],
  },
  {
    id: 'lld',
    name: 'Low Level Design (LLD)',
    title: 'Low Level Technical Design Spec (LLD)',
    sections: [
      '1. SCRIPT INCLUDE SPECS: PaymentGatewayProcessor',
      'Implements standard REST calls. Class encapsulates connection pooling handles, validating transaction authorization states in real-time.',
      '2. BUSINESS RULE LOGIC: ValidateTransactionLimit',
      'Before insert/update trigger on status change. Validates user balance vs payout amounts.',
    ],
  },
  {
    id: 'tests',
    name: 'Test Cases',
    title: 'System Integration Test (SIT) & UAT Cases',
    sections: [
      '1. QA TEST CASE 01: Connection Pool Exhaustion Stress',
      'Simulate 200 concurrent user calls within 5 seconds. Expect zero database connection pool lockouts.',
      '2. QA TEST CASE 02: Index Verification',
      'Verify query response speeds on payment_transactions. Expected speed: <40ms (Actual: 12ms).',
    ],
  },
  {
    id: 'kt',
    name: 'KT Document',
    title: 'Knowledge Transfer & Team Handover Documentation',
    sections: [
      '1. SYSTEM COMPONENT RUNTIME SCRIPTINGS',
      'Includes custom business rules that monitor transaction balances dynamically.',
      '2. OPERATIONAL OWNERSHIP TRANSITION',
      'Formally transitions WT Apps Servicedesk squads to the active L3 infrastructure monitoring desk.',
    ],
  },
];

const ALL_CHECKBOXES = [
  { id: 'runbook', label: 'Deployment Runbook' },
  { id: 'consolidated_runbook', label: 'Consolidated Prod Runbook' },
  { id: 'change_comm', label: 'Release Notes / Change Comms' },
  { id: 'sdd', label: 'Solution Design Document' },
  { id: 'lld', label: 'Low Level Design (LLD)' },
  { id: 'api_doc', label: 'API Documentation' },
  { id: 'kt', label: 'KT Document' },
  { id: 'consolidated_kt', label: 'Consolidated KT Document' },
  { id: 'user_guide', label: 'User Guide' },
  { id: 'tests', label: 'Test Cases' },
  { id: 'risk_assess', label: 'Impact Analysis / Risk Assessment' },
];

export default function SlideDocsOverview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    runbook: true,
    sdd: true,
    lld: true,
  });
  const [genMode, setGenMode] = useState('detailed');
  const [additionalContext, setAdditionalContext] = useState('');
  const [compiling, setCompiling] = useState(false);
  const [compilationProgress, setCompilationProgress] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [activePreviewDoc, setActivePreviewDoc] = useState<DocOption | null>(null);

  const toggleCheckbox = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedCount = Object.values(checkedDocs).filter(Boolean).length;

  const triggerGenerate = () => {
    setCompiling(true);
    setFinished(false);
    setActivePreviewDoc(null);
    const selectedIds = Object.keys(checkedDocs).filter((k) => checkedDocs[k]);
    const initProgress: Record<string, number> = {};
    selectedIds.forEach((id) => {
      initProgress[id] = 0;
    });
    setCompilationProgress(initProgress);
  };

  useEffect(() => {
    if (compiling) {
      const interval = setInterval(() => {
        setCompilationProgress((prev) => {
          const next = { ...prev };
          let allDone = true;
          Object.keys(next).forEach((id) => {
            if (next[id] < 100) {
              next[id] += Math.floor(Math.random() * 20) + 12;
              if (next[id] > 100) next[id] = 100;
              allDone = false;
            }
          });
          if (allDone) {
            clearInterval(interval);
            setCompiling(false);
            setFinished(true);
          }
          return next;
        });
      }, 280);
      return () => clearInterval(interval);
    }
  }, [compiling]);

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
              <FileText className="h-3.5 w-3.5 text-[#00c08b]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.36em] text-[#009e72] dark:text-[#84cc16] uppercase">
                Use Case 03 · SDLC Documentation Assistant
              </span>
            </div>
            <h2
              className="text-[2.3rem] sm:text-[2.7rem] font-black tracking-tight leading-[1.04] text-[#0c1e1c] dark:text-white animate-fade-in-up"
              style={{ animationDelay: '80ms', fontFamily: "'Sora', sans-serif" }}
            >
              One click ·{' '}
              <span
                className="bg-clip-text text-transparent italic"
                style={{ backgroundImage: 'linear-gradient(110deg, #34d399, #84cc16 55%, #00c08b)' }}
              >
                six SDLC docs
              </span>{' '}
              · zero typos.
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#030c0b]/75 border border-slate-200 dark:border-[#00c08b]/30 shadow-xl backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <GitBranch className="h-4 w-4 text-[#00c08b]" />
            <span className="font-mono text-[10px] font-black tracking-[0.22em] uppercase text-[#009e72] dark:text-[#84cc16]">
              Update Set · XML-Native
            </span>
          </div>
        </div>

        {/* Console */}
        <div className="flex-1 rounded-2xl border border-slate-200 dark:border-white/10 bg-white overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,192,139,0.12)] mt-5 flex flex-col relative min-h-[420px] max-h-[510px]">

          <div className="px-4 py-1.5 bg-slate-50/80 border-b border-slate-200 flex items-center gap-2 text-[9.5px] font-bold text-slate-400">
            <span>System Update Sets</span>
            <span>/</span>
            <span>Local Update Sets</span>
            <span>/</span>
            <span className="text-slate-700 font-black font-mono">FETR1549163</span>
          </div>

          <div className="px-5 py-3 bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] font-black uppercase tracking-[0.18em] text-slate-600">
                Update Set · Local
              </span>
              <span className="font-mono text-[9px] bg-[#00c08b]/10 border border-[#00c08b]/30 px-2 py-0.5 rounded text-[#009e72] font-black uppercase tracking-[0.15em]">
                State · Complete
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-[10.5px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">
                Update
              </button>
              <button className="px-3 py-1 text-[10.5px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">
                Back Out
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="relative px-3.5 py-1.5 text-[10.5px] font-black bg-gradient-to-r from-[#00c08b] to-[#34d399] hover:opacity-95 text-white rounded shadow-lg shadow-[#00c08b]/25 border border-[#00c08b]/40 flex items-center gap-1.5 group"
              >
                <span className="absolute -left-0.5 -top-0.5 -right-0.5 -bottom-0.5 rounded-md bg-[#00c08b]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                AIRA Document Assistant
              </button>
            </div>
          </div>

          <div className="flex-1 p-5 overflow-auto bg-[#f7faf9] grid grid-cols-12 gap-x-6 gap-y-3 text-[12.5px] font-semibold text-slate-700">
            <div className="col-span-6 space-y-3">
              <div className="flex items-center gap-2 justify-between">
                <label className="text-[11px] font-black text-slate-500 w-[26%] flex items-center gap-1">
                  <span className="text-rose-500 font-black">*</span> Name
                </label>
                <div className="w-[74%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm truncate font-mono text-[11px]">
                  FETR1549163-RITM2701792-Custom_conversation_Apple_Support
                </div>
              </div>
              {[
                { l: 'State', v: 'Complete', dropdown: true, req: true },
                { l: 'Parent', v: '-- empty --', empty: true },
                { l: 'Release date', v: '-- empty --', empty: true, cal: true },
                { l: 'Install date', v: '2022-06-21 16:42:41', cal: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 justify-between">
                  <label className="text-[11px] font-black text-slate-500 w-[26%] flex items-center gap-1">
                    {row.req && <span className="text-rose-500 font-black">*</span>} {row.l}
                  </label>
                  <div
                    className={`w-[74%] px-3 py-1.5 rounded shadow-sm flex items-center justify-between border ${
                      row.empty
                        ? 'bg-slate-100 border-slate-200 text-slate-400 italic font-mono'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <span>{row.v}</span>
                    {row.dropdown && <span className="text-[9px] text-slate-400">▼</span>}
                    {row.cal && <span className="text-[10px] text-slate-400">📅</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-6 space-y-3">
              {[
                { l: 'Application', v: 'Global', search: true, req: true, locked: true },
                { l: 'Created', v: '2022-06-21 16:42:31', cal: true },
                { l: 'Created by', v: '32016756', mono: true },
                { l: 'Merged to', v: '-- empty --', empty: true, search: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 justify-between">
                  <label className="text-[11px] font-black text-slate-500 w-[26%] flex items-center gap-1">
                    {row.req && <span className="text-rose-500 font-black">*</span>} {row.l}
                  </label>
                  <div
                    className={`w-[74%] px-3 py-1.5 rounded shadow-sm flex items-center justify-between border ${
                      row.empty
                        ? 'bg-slate-100 border-slate-200 text-slate-400 italic font-mono'
                        : row.locked
                        ? 'bg-slate-100 border-slate-200 text-slate-600 font-mono'
                        : 'bg-white border-slate-200 text-slate-800'
                    } ${row.mono ? 'font-mono' : ''}`}
                  >
                    <span>{row.v}</span>
                    {row.cal && <span className="text-[10px] text-slate-400">📅</span>}
                    {row.search && <Search className="h-3 w-3 text-slate-400" />}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 justify-between">
                <label className="text-[11px] font-black text-slate-500 w-[26%]">Installed from</label>
                <div className="w-[74%] px-3 py-1.5 bg-white border border-slate-200 rounded shadow-sm flex items-center justify-between text-[#009e72] underline truncate">
                  <span>https://philipsqa.service-now.com/</span>
                  <Search className="h-3 w-3 text-[#00c08b]" />
                </div>
              </div>
            </div>

            <div className="col-span-12 space-y-2 border-t border-slate-200 pt-3 mt-1">
              <div className="flex items-start gap-4">
                <label className="text-[11px] font-black text-slate-500 w-[12%] mt-1 flex-shrink-0">Description</label>
                <div className="flex-1 px-3 py-2 bg-slate-100 border border-slate-200 rounded text-slate-400 italic font-mono shadow-inner text-[11.5px]">
                  -- empty --
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-gradient-to-b from-slate-50 to-slate-100/70 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[10.5px] font-bold">
            <span className="font-mono uppercase tracking-[0.18em]">Update Set · Completed</span>
            <span className="font-mono uppercase tracking-[0.18em]">Last Checked · just now</span>
          </div>

          {/* Doc Assistant Modal */}
          {modalOpen && (
            <div className="absolute inset-0 bg-black/55 backdrop-blur-md z-50 flex items-center justify-center p-5 animate-fade-in">
              <div className="w-[92%] max-w-[820px] bg-white rounded-2xl shadow-2xl border border-[#00c08b]/40 overflow-hidden flex flex-col animate-fade-in-scale relative">

                <div className="px-6 py-4 bg-gradient-to-r from-[#00c08b] via-[#10b981] to-[#84cc16] flex items-center justify-between text-white relative overflow-hidden">
                  <div className="absolute inset-0 shimmer-mask opacity-25 pointer-events-none" />
                  <div className="flex items-center gap-3 relative">
                    <div className="h-9 w-9 rounded-xl bg-white/20 grid place-items-center backdrop-blur-sm">
                      <FileText className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <span
                        className="text-[15.5px] font-black tracking-tight block leading-none"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        AI Documentation Assistant
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 mt-0.5 block">
                        Enterprise SDLC · ServiceNow Native · Schema-driven
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

                <div className="p-5 space-y-3.5 max-h-[330px] overflow-auto slide-scroll text-slate-800">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="block text-[10px] font-black uppercase text-[#009e72] tracking-[0.22em] flex items-center gap-1.5">
                        <Boxes className="h-3.5 w-3.5" /> Documents
                      </span>
                      <span className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
                        {selectedCount} selected
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {ALL_CHECKBOXES.map((box) => {
                        const isChecked = !!checkedDocs[box.id];
                        return (
                          <div
                            key={box.id}
                            onClick={() => toggleCheckbox(box.id)}
                            className="p-2.5 rounded-xl border-2 cursor-pointer select-none transition-all flex items-center gap-2 hover:scale-[1.02]"
                            style={{
                              borderColor: isChecked ? '#00c08b' : 'rgba(148,163,184,0.25)',
                              background: isChecked
                                ? 'rgba(0,192,139,0.08)'
                                : 'rgba(255,255,255,0.6)',
                              boxShadow: isChecked ? '0 6px 16px -6px rgba(0,192,139,0.35)' : undefined,
                            }}
                          >
                            <div
                              className="h-4 w-4 rounded grid place-items-center flex-shrink-0 transition-all border-2"
                              style={{
                                borderColor: isChecked ? '#00c08b' : 'rgba(148,163,184,0.5)',
                                background: isChecked ? '#00c08b' : 'transparent',
                              }}
                            >
                              {isChecked && <CheckCircle2 className="h-3 w-3 text-white" strokeWidth={3.5} />}
                            </div>
                            <span
                              className={`text-[11.5px] font-extrabold truncate ${
                                isChecked ? 'text-[#009e72]' : 'text-slate-750'
                              }`}
                            >
                              {box.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <span className="block text-[10px] font-black uppercase text-[#009e72] tracking-[0.22em] flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Generation Mode
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'fast', label: 'Fast', sub: 'Concise AI output' },
                        { id: 'detailed', label: 'Detailed', sub: 'Balanced enterprise output' },
                        { id: 'gov', label: 'Enterprise Governance', sub: 'Deep audit & compliance' },
                      ].map((mode) => {
                        const isSelected = genMode === mode.id;
                        return (
                          <div
                            key={mode.id}
                            onClick={() => setGenMode(mode.id)}
                            className="p-2.5 rounded-xl border-2 cursor-pointer select-none transition-all flex items-start gap-2 hover:scale-[1.02]"
                            style={{
                              borderColor: isSelected ? '#00c08b' : 'rgba(148,163,184,0.25)',
                              background: isSelected ? 'rgba(0,192,139,0.08)' : 'rgba(255,255,255,0.6)',
                              boxShadow: isSelected ? '0 6px 16px -6px rgba(0,192,139,0.35)' : undefined,
                            }}
                          >
                            <div
                              className="h-3.5 w-3.5 rounded-full grid place-items-center flex-shrink-0 mt-0.5 transition-all border-2"
                              style={{
                                borderColor: isSelected ? '#00c08b' : 'rgba(148,163,184,0.5)',
                                background: isSelected ? '#00c08b' : 'transparent',
                              }}
                            >
                              {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </div>
                            <div className="min-w-0">
                              <span
                                className={`block text-[11.5px] font-black ${
                                  isSelected ? 'text-[#009e72]' : 'text-slate-750'
                                }`}
                              >
                                {mode.label}
                              </span>
                              <span className="block text-[9.5px] text-slate-400 font-bold mt-0.5 leading-tight">
                                {mode.sub}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <span className="block text-[10px] font-black uppercase text-[#009e72] tracking-[0.22em] flex items-center gap-1.5">
                      <ScrollText className="h-3.5 w-3.5" /> Additional Context
                    </span>
                    <textarea
                      value={additionalContext}
                      onChange={(e) => setAdditionalContext(e.target.value)}
                      placeholder="Optional business or technical context to refine compiler output…"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-[11.5px] outline-none font-medium h-[54px] focus:border-[#00c08b]/60 focus:bg-white text-slate-800 transition-colors"
                    />
                  </div>

                  {compiling && (
                    <div className="p-3.5 bg-gradient-to-br from-[#00c08b]/8 to-[#84cc16]/6 border border-[#00c08b]/30 rounded-xl space-y-2 animate-fade-in-scale">
                      <div className="flex justify-between items-center text-[11.5px] font-black text-[#0c1e1c]">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-[#00c08b] animate-pulse" />
                          Parsing Update Set XML…
                        </span>
                        <span className="font-mono text-[9px] text-[#009e72] animate-pulse uppercase tracking-[0.22em]">
                          Compiling Suite
                        </span>
                      </div>
                      <div className="space-y-1.5 mt-1.5">
                        {Object.keys(compilationProgress).map((id) => {
                          const progress = compilationProgress[id] || 0;
                          const name = ALL_CHECKBOXES.find((c) => c.id === id)?.label || id;
                          return (
                            <div key={id} className="text-[11px] font-bold text-slate-600 flex justify-between items-center gap-3">
                              <span className="truncate w-[40%]">{name}</span>
                              <div className="flex-1 flex items-center gap-2">
                                <div className="flex-1 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                  <div
                                    className="h-full transition-all duration-300"
                                    style={{
                                      width: `${progress}%`,
                                      background: 'linear-gradient(90deg, #00c08b, #84cc16)',
                                    }}
                                  />
                                </div>
                                <span className="font-mono font-black text-[9px] w-8 text-right text-[#009e72]">
                                  {progress}%
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {finished && (
                    <div className="space-y-1.5 border-t border-slate-100 pt-3 animate-fade-in-up">
                      <span className="block text-[10px] font-black uppercase text-[#009e72] tracking-[0.22em] flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Generated SDLC Document Artifacts
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {DOC_OPTIONS.filter((o) => checkedDocs[o.id]).map((doc) => (
                          <div
                            key={doc.id}
                            className="p-2.5 bg-gradient-to-br from-[#00c08b]/6 to-[#84cc16]/4 border border-[#00c08b]/25 rounded-xl flex items-center justify-between gap-2"
                          >
                            <div className="min-w-0">
                              <span className="block text-[11.5px] font-black text-[#0c1e1c] leading-tight truncate">
                                {doc.name}
                              </span>
                              <span className="text-[9px] text-slate-500 block mt-0.5 font-mono uppercase tracking-[0.18em]">
                                MS Word · ready
                              </span>
                            </div>
                            <button
                              onClick={() => setActivePreviewDoc(doc)}
                              className="px-2.5 py-1.5 rounded-lg bg-white border border-[#00c08b]/40 hover:bg-[#00c08b]/10 text-[#009e72] font-black text-[10px] flex items-center gap-1 shadow-sm transition-all flex-shrink-0 hover:scale-105"
                            >
                              <Eye className="h-3 w-3" /> Preview
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-200 flex justify-between items-center text-[11px] font-black text-slate-500">
                  <span className="font-mono tracking-[0.18em] uppercase">
                    {selectedCount} document{selectedCount === 1 ? '' : 's'} selected
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="px-3.5 py-1.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-lg shadow-sm text-[11px] font-black uppercase tracking-[0.16em]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={triggerGenerate}
                      disabled={compiling || selectedCount === 0}
                      className="px-4 py-1.5 bg-gradient-to-r from-[#00c08b] to-[#34d399] hover:opacity-95 disabled:opacity-40 text-white rounded-lg shadow-md shadow-[#00c08b]/25 font-black text-[11px] uppercase tracking-[0.16em] flex items-center gap-2"
                    >
                      <Zap className="h-3.5 w-3.5 text-white fill-white animate-pulse" />
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Word Document Preview */}
          {activePreviewDoc && (
            <div className="absolute inset-0 bg-black/55 backdrop-blur-md z-50 flex items-center justify-center p-5 animate-fade-in">
              <div className="w-[90%] max-w-[700px] bg-white rounded-2xl shadow-2xl border border-[#00c08b]/40 p-5 flex flex-col overflow-hidden animate-fade-in-scale">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00c08b] to-[#34d399] grid place-items-center flex-shrink-0">
                      <FileText className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span
                      className="text-[13px] font-black text-[#0c1e1c] truncate"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {activePreviewDoc.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePreviewDoc(null)}
                    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 text-[10px] font-black uppercase tracking-[0.16em] border border-slate-200 rounded-lg bg-slate-50 flex-shrink-0 ml-3"
                  >
                    Close
                  </button>
                </div>

                <div className="flex-1 my-4 p-5 bg-slate-50/80 rounded-xl border border-slate-200 overflow-auto leading-relaxed text-[11.5px] font-medium text-slate-700 space-y-3 max-h-[250px] slide-scroll">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#00c08b]/8 to-[#84cc16]/6 border border-[#00c08b]/25 mb-2">
                    <span className="text-[8px] font-mono font-black text-[#009e72] uppercase tracking-[0.22em] block">
                      Enterprise SDLC Document · Certified
                    </span>
                    <span
                      className="text-[15px] font-black text-[#0c1e1c] block mt-1"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {activePreviewDoc.name}
                    </span>
                    <span className="text-[9px] text-slate-500 block mt-1 font-mono">
                      Generated 2026-05-25 · Author AIRA Document Engine
                    </span>
                  </div>

                  <div className="space-y-2.5 pr-1">
                    {activePreviewDoc.sections.map((sec, i) => {
                      const isTitle = sec.startsWith('1.') || sec.startsWith('2.') || sec.startsWith('3.');
                      return (
                        <div key={i} className={isTitle ? 'border-b border-slate-200 pb-1 mt-2' : 'pl-3'}>
                          {isTitle ? (
                            <h4
                              className="text-[12px] font-black text-[#009e72]"
                              style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                              {sec}
                            </h4>
                          ) : (
                            <p className="whitespace-pre-wrap text-slate-650 leading-relaxed font-semibold">
                              {sec}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-3.5">
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                    Format · .docx Open XML
                  </span>
                  <button
                    onClick={() => setActivePreviewDoc(null)}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#00c08b] to-[#34d399] text-white font-black text-[10px] tracking-[0.18em] uppercase flex items-center gap-2 hover:opacity-95 shadow-md shadow-[#00c08b]/25"
                  >
                    <FolderDown className="h-3.5 w-3.5 text-white animate-bounce" /> Download MS Word
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11.5px] font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <ShieldCheck className="h-4 w-4 text-[#00c08b]" strokeWidth={2.4} />
            Runs natively on Flow Designer & Script Includes — zero external infra.
          </span>
          <span className="flex items-center gap-1.5 text-[#009e72] dark:text-[#00c08b] font-black">
            <CheckCircle2 className="h-4 w-4" strokeWidth={2.4} />
            8 – 10× faster SDLC document generation.
          </span>
        </div>
      </div>
    </div>
  );
}
