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
      'This document designs the composite Indexing and API logic for transaction tracking on payment-gateway-prod.',
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
  { id: 'change_comm', label: 'Release Notes / Change Communication' },
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
    runbook: true, // checked by default in screenshot
  });
  const [genMode, setGenMode] = useState('detailed'); // detailed selected by default in screenshot
  const [additionalContext, setAdditionalContext] = useState('');
  
  const [compiling, setCompiling] = useState(false);
  const [compilationProgress, setCompilationProgress] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [activePreviewDoc, setActivePreviewDoc] = useState<DocOption | null>(null);

  const toggleCheckbox = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedCount = Object.values(checkedDocs).filter(Boolean).length;

  const triggerGenerate = () => {
    setCompiling(true);
    setFinished(false);
    setActivePreviewDoc(null);

    // Initialise selected progress
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
      }, 300);
      return () => clearInterval(interval);
    }
  }, [compiling]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-900 text-white flex flex-col">
      {/* Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00c08b]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#84cc16]/8 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex-1 px-8 sm:px-12 py-5 flex flex-col justify-between overflow-hidden">
        
        {/* Header Block - Saved Vertical Space */}
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3 flex-shrink-0">
          <h2
            className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-tight leading-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AIRA{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 italic inline-block pr-4">
              Document Assistant
            </span>
          </h2>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-[10.5px] font-black uppercase tracking-wider text-emerald-400 shadow-md">
            Use Case 03 · SDLC Documentation Assistant
          </div>
        </div>

        {/* Live Interactive ServiceNow Console Replica - WHITE CONTAINER, Maximized Height */}
        <div className="flex-1 rounded-2xl border border-slate-250 bg-white overflow-hidden shadow-2xl mt-4.5 flex flex-col justify-between relative min-h-[420px] max-h-[500px]">
          
          {/* ServiceNow Workspace Tab & Breadcrumbs Bar */}
          <div className="px-5 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2 text-[10px] font-bold text-slate-400">
            <span>System Update Sets</span>
            <span>/</span>
            <span>Local Update Sets</span>
            <span>/</span>
            <span className="text-slate-600 font-extrabold">FETR1549163</span>
          </div>

          {/* ServiceNow Top Header Buttons bar - Light Theme */}
          <div className="px-5 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] font-black uppercase tracking-wider text-slate-600">Update Set · Local</span>
              <span className="font-mono text-[9px] bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded text-[#00c08b] font-bold">State: Complete</span>
            </div>

            {/* Header shortcuts */}
            <div className="flex gap-2">
              <button className="px-2.5 py-1 text-[11px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">Update</button>
              <button className="px-2.5 py-1 text-[11px] font-black bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded shadow-sm">Back Out</button>
              
              {/* Highlighted AIRA Assistant Trigger */}
              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 py-1.5 text-[11.5px] font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-white rounded shadow-lg shadow-emerald-500/20 border border-emerald-400 flex items-center gap-1.5 animate-pulse-glow"
              >
                <GitBranch className="h-3.5 w-3.5" /> AIRA Document Assistant ➔
              </button>
            </div>
          </div>

          {/* Form Content Replica from Screenshot 3 - Light Theme */}
          <div className="flex-1 p-5 overflow-auto bg-[#f8fafc] grid grid-cols-12 gap-x-6 gap-y-4 text-[13px] font-semibold text-slate-700">
            {/* Left column fields (6 columns) */}
            <div className="col-span-6 space-y-3.5">
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> Name
                </label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm truncate">
                  FETR1549163-RITM2701792-Custom_converstaion_Apple_Support
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> State
                </label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>Complete</span>
                  <span className="text-[9px] text-slate-400">▼</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Parent</label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner italic flex items-center justify-between">
                  <span>-- empty --</span>
                  <Search className="h-3 w-3 text-slate-350" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Release date</label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner italic flex items-center justify-between">
                  <span>-- empty --</span>
                  <span className="text-[10px] text-slate-350">📅</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Install date</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>2022-06-21 16:42:41</span>
                  <span className="text-[10px] text-slate-400">📅</span>
                </div>
              </div>
            </div>

            {/* Right column fields (6 columns) */}
            <div className="col-span-6 space-y-3.5">
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold flex items-center gap-1">
                  <span className="text-red-500 font-extrabold">*</span> Application
                </label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner flex items-center justify-between">
                  <span>Global</span>
                  <Search className="h-3 w-3 text-slate-350" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Created</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-800 shadow-sm flex items-center justify-between">
                  <span>2022-06-21 16:42:31</span>
                  <span className="text-[10px] text-slate-400">📅</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Created by</label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner">32016756</div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Merged to</label>
                <div className="w-[70%] px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-slate-400 font-mono shadow-inner italic flex items-center justify-between">
                  <span>-- empty --</span>
                  <Search className="h-3 w-3 text-slate-350" />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label className="text-slate-555 text-[11.5px] font-bold">Installed from</label>
                <div className="w-[70%] px-3 py-1.5 bg-white border border-slate-200 rounded text-sky-600 underline shadow-sm truncate flex items-center justify-between">
                  <span>https://philipsqa.service-now.com/</span>
                  <Search className="h-3 w-3 text-sky-500" />
                </div>
              </div>
            </div>

            {/* Description full width */}
            <div className="col-span-12 space-y-3 border-t border-slate-200 pt-4 mt-2">
              <div className="flex items-start gap-4">
                <label className="text-slate-400 text-[11.5px] font-bold w-[12%] mt-1 flex-shrink-0">Description</label>
                <div className="flex-1 px-3 py-2 bg-slate-100 border border-slate-200 rounded text-slate-400 shadow-inner italic font-mono">-- empty --</div>
              </div>
            </div>

          </div>

          {/* ServiceNow footer banner */}
          <div className="px-5 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[11px] font-semibold">
            <span>System: Update Set Completed</span>
            <span>Last Checked: just now</span>
          </div>

          {/* ==================== SCREENSHOT 4 MODAL OVERLAY ==================== */}
          {modalOpen && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in animate-fade-in">
              <div className="w-[90%] max-w-[840px] bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between animate-fade-in-scale">
                
                {/* Modal Header bar */}
                <div className="px-5 py-3 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[17px] font-black text-slate-900 font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    AI Documentation Assistant
                  </span>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="h-8 w-8 rounded-lg border border-slate-300 bg-white grid place-items-center text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Banner inside modal replica of screenshot */}
                <div className="mx-6 mt-4 p-4.5 bg-[#0070f3] rounded-xl flex items-center justify-between text-white shadow-md relative">
                  <div>
                    <h3 className="text-[18px] font-black tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>AI Documentation Assistant</h3>
                    <p className="text-[11.5px] font-bold text-blue-100 mt-0.5">Generate enterprise-grade AI-powered SDLC documentation</p>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-lg shadow transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Modal Body Contents */}
                <div className="p-6 space-y-4 max-h-[300px] overflow-auto slide-scroll text-slate-800">
                  
                  {/* Documents Section Grid Checklist */}
                  <div className="space-y-2">
                    <span className="block text-[11px] font-black uppercase text-[#0070f3] tracking-wider">Documents</span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {ALL_CHECKBOXES.map((box) => {
                        const isChecked = !!checkedDocs[box.id];
                        return (
                          <div
                            key={box.id}
                            onClick={() => toggleCheckbox(box.id)}
                            className={`p-2.5 rounded-xl border cursor-pointer select-none transition-all flex items-center gap-2.5 ${
                              isChecked
                                ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-sm'
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              className="h-4 w-4 accent-[#0070f3] cursor-pointer"
                            />
                            <span className="text-[12px] font-extrabold truncate">{box.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Generation Mode Section */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="block text-[11px] font-black uppercase text-[#0070f3] tracking-wider">Generation Mode</span>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'fast', label: 'Fast', sub: 'Faster concise AI generation' },
                        { id: 'detailed', label: 'Detailed', sub: 'Balanced enterprise output' },
                        { id: 'gov', label: 'Enterprise Governance', sub: 'Deep audit & compliance analysis' },
                      ].map((mode) => {
                        const isSelected = genMode === mode.id;
                        return (
                          <div
                            key={mode.id}
                            onClick={() => setGenMode(mode.id)}
                            className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-blue-50 border-blue-400 text-blue-900'
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                            }`}
                          >
                            <input
                              type="radio"
                              checked={isSelected}
                              readOnly
                              className="h-4.5 w-4.5 accent-[#0070f3] cursor-pointer mt-0.5"
                            />
                            <div>
                              <span className="block text-[12.5px] font-black">{mode.label}</span>
                              <span className="block text-[10px] text-slate-400 font-bold mt-0.5 leading-tight">{mode.sub}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Context Area */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <span className="block text-[11px] font-black uppercase text-[#0070f3] tracking-wider">Additional Context</span>
                    <textarea
                      value={additionalContext}
                      onChange={(e) => setAdditionalContext(e.target.value)}
                      placeholder="Enter optional metadata details to refine compiler..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-[12.5px] outline-none font-medium h-[64px] focus:border-blue-400 text-slate-800"
                    />
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      Optional business or technical context to improve AI-generated documentation quality.
                    </span>
                  </div>

                  {/* Compilation Status loader when generating */}
                  {compiling && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2 mt-4 animate-fade-in-scale">
                      <div className="flex justify-between items-center text-[12px] font-black text-blue-900">
                        <span>Parsing Update Set XML Nodes...</span>
                        <span className="font-mono animate-pulse">COMPILING SUITE</span>
                      </div>
                      <div className="space-y-1.5 mt-2.5">
                        {Object.keys(compilationProgress).map((id) => {
                          const progress = compilationProgress[id] || 0;
                          const name = ALL_CHECKBOXES.find((c) => c.id === id)?.label || id;
                          return (
                            <div key={id} className="text-[11.5px] font-semibold text-slate-600 flex justify-between items-center">
                              <span>{name}</span>
                              <div className="w-[60%] flex items-center gap-2">
                                <div className="flex-1 bg-slate-200 h-1 rounded-full overflow-hidden">
                                  <div className="bg-[#0070f3] h-full transition-all duration-300" style={{ width: `${progress}%` }} />
                                </div>
                                <span className="font-mono font-bold text-[9px] w-8 text-right">{progress}%</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Compiled preview list */}
                  {finished && (
                    <div className="space-y-2 border-t border-slate-100 pt-4 mt-3 animate-fade-in-up">
                      <span className="block text-[11.5px] font-black uppercase text-emerald-600 tracking-wider">Generated SDLC Document Artifacts Preview</span>
                      <div className="grid grid-cols-2 gap-2">
                        {DOC_OPTIONS.filter((o) => checkedDocs[o.id]).map((doc) => (
                          <div key={doc.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                            <div>
                              <span className="block text-[13px] font-black text-slate-900 leading-tight">{doc.name}</span>
                              <span className="text-[10px] text-slate-400 block mt-0.5">MS Word Document ready</span>
                            </div>
                            <button
                              onClick={() => {
                                const matched = DOC_OPTIONS.find((o) => o.id === doc.id);
                                if (matched) setActivePreviewDoc(matched);
                              }}
                              className="px-3 py-1.5 rounded-lg border border-emerald-500/40 hover:bg-emerald-50 text-emerald-600 font-black text-[10.5px] flex items-center gap-1 bg-white shadow-sm"
                            >
                              <Eye className="h-3.5 w-3.5" /> PREVIEW
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-[#f8fafc] border-t border-slate-200 flex justify-between items-center text-[12px] font-extrabold text-slate-500">
                  <span>{selectedCount} document{selectedCount === 1 ? '' : 's'} selected</span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-xl shadow-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={triggerGenerate}
                      disabled={compiling || selectedCount === 0}
                      className="px-5 py-2.5 bg-[#0070f3] hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl shadow-md font-black uppercase tracking-wider flex items-center gap-2"
                    >
                      <Zap className="h-4 w-4 animate-bounce text-white fill-white" />
                      Generate Documents
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==================== MOCK WORD DOCUMENT VIEW OVERLAY ==================== */}
          {activePreviewDoc && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in animate-fade-in">
              <div className="w-[85%] max-w-[720px] bg-white rounded-2xl shadow-2xl border border-[#00c08b]/40 p-6 flex flex-col justify-between overflow-hidden animate-fade-in-scale">
                
                {/* Header Word view */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-emerald-500/10 grid place-items-center">
                      <FileText className="h-4.5 w-4.5 text-[#00c08b]" />
                    </div>
                    <span className="text-[14px] font-black text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {activePreviewDoc.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePreviewDoc(null)}
                    className="px-2.5 py-1 text-slate-500 hover:text-slate-900 text-[11px] font-black uppercase border border-slate-200 rounded-lg bg-slate-100"
                  >
                    Close Preview
                  </button>
                </div>

                {/* Simulated Word document layout */}
                <div className="flex-1 my-4 p-5 bg-slate-50 rounded-xl border border-slate-200 overflow-auto font-sans leading-relaxed text-[12px] font-medium text-slate-700 space-y-4 max-h-[250px]">
                  {/* Branded cover page */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-500/20 mb-2">
                    <span className="text-[8px] font-mono font-black text-emerald-600 uppercase tracking-widest block">ENTERPRISE SDLC DOCUMENT CERTIFICATION</span>
                    <span className="text-[16px] font-black text-slate-950 block mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {activePreviewDoc.name}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-1">Generated: 2026-05-25 · Author: AIRA Document Engine</span>
                  </div>

                  <div className="space-y-3 pr-1 text-slate-700">
                    {activePreviewDoc.sections.map((sec, i) => {
                      const isTitle = sec.startsWith('1.') || sec.startsWith('2.') || sec.startsWith('3.');
                      return (
                        <div key={i} className={isTitle ? 'border-b border-slate-200 pb-1 mt-3' : 'pl-3'}>
                          {isTitle ? (
                            <h4 className="text-[12.5px] font-black text-emerald-600" style={{ fontFamily: "'Outfit', sans-serif" }}>{sec}</h4>
                          ) : (
                            <p className="whitespace-pre-wrap text-slate-600 leading-relaxed font-semibold">{sec}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer simulation */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3.5">
                  <span className="font-mono text-[9px] text-slate-400 uppercase">FORMAT: MICROSOFT WORD OPEN XML (.DOCX)</span>
                  <button
                    onClick={() => setActivePreviewDoc(null)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-[10.5px] tracking-wider uppercase flex items-center gap-2 hover:opacity-95 shadow-md shadow-emerald-500/20"
                  >
                    <FolderDown className="h-4 w-4 text-white animate-bounce" /> DOWNLOAD MICROSOFT WORD DOCUMENT
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Bottom Banner */}
        <div className="mt-4 border-t border-white/10 pt-3.5 flex items-center justify-between text-[12px] font-semibold text-slate-400">
          <span>AIRA Document Assistant uses Flow Designer & Outbound API logic inside ServiceNow.</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <CheckCircle2 className="h-4 w-4" /> 8–10x faster SDLC compliance document generation.
          </span>
        </div>
      </div>
    </div>
  );
}
