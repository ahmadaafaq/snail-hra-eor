import React from 'react';
import { STATUTORY_COMPONENTS } from '../data/content';
import { ShieldCheck, Scale, FileText, Landmark, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

export const StatutoryComplianceSection: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
            <span>REGULATORY RIGOR & LABOR CODES</span>
            <span aria-hidden="true">·</span>
            <span>ZERO AUDIT PENALTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display" style={{ textWrap: 'balance' }}>
            Uncompromising compliance with Indian central and state labor legislation.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            India's labor law regime spans complex central and state regulations. SnailHRA manages every statutory registration, monthly electronic filing, and employee tax deduction so your international enterprise remains 100% insulated.
          </p>
        </div>

        {/* 5 Statutory Components Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATUTORY_COMPONENTS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                    Statutory
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.authority}
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                  <span className="text-slate-500 block text-[11px]">Rule & Computation</span>
                  <span className="font-semibold text-slate-800">{item.rateRule}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Automated electronic challan & monthly ledger sync</span>
              </div>
            </div>
          ))}

          {/* Special 6th Card: IP Protection & POSH */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-300">
                <Lock className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  IP Assignment & POSH Compliance
                </h3>
                <div className="text-xs text-emerald-200">
                  Global Legal Safeguards
                </div>
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Every employee executes comprehensive IP assignment and non-disclosure agreements assigning 100% of inventions and code to your international firm. We also constitute statutory POSH committees with mandatory annual filings.
              </p>
            </div>

            <div className="pt-3 border-t border-emerald-800 text-[11px] text-emerald-300 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full legal indemnity and data protection (DPDP Act)</span>
            </div>
          </div>
        </div>

        {/* Audit Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                The SnailHRA Zero-Penalty Statutory Guarantee
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                We assume full legal employer liability for all Indian labor law compliance, PF filings, and tax withholding. In the rare event of a filing penalty due to our operational delay, SnailHRA covers 100% of the penalty.
              </div>
            </div>
          </div>

          <div className="shrink-0 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            AUDITED QUARTERLY
          </div>
        </div>

      </div>
    </section>
  );
};
