import React, { useState } from 'react';
import { USE_CASES } from '../data/content';
import { Building, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

interface UseCasesSectionProps {
  onOpenConsultation: (intent?: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(USE_CASES[0].id);

  const activeCase = USE_CASES.find((c) => c.id === selectedCaseId) || USE_CASES[0];

  return (
    <section id="use-cases" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
            <span>BUSINESS USE CASES</span>
            <span aria-hidden="true">·</span>
            <span>PROVEN EXPANSION PLAYBOOKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display" style={{ textWrap: 'balance' }}>
            Tailored employment models for international scale-ups and enterprises.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Whether you are making your very first engineering hire in Bengaluru or converting a 30-person contractor workforce, SnailHRA adapts to your exact operational stage.
          </p>
        </div>

        {/* Use Case Tabs & Detail Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {USE_CASES.map((uc) => {
              const isSelected = uc.id === activeCase.id;
              return (
                <div
                  key={uc.id}
                  onClick={() => setSelectedCaseId(uc.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/90 border-emerald-700 ring-1 ring-emerald-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    {uc.tagline}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {uc.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    {uc.clientType}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: In-depth Case Study Card */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                Case Study · {activeCase.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {activeCase.title}
              </h3>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">The Operational Challenge:</span>
                <p className="text-slate-600 leading-relaxed">
                  {activeCase.problem}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">SnailHRA's Solution & Deployment:</span>
                <p className="text-slate-600 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {activeCase.metrics.map((m, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 text-center">
                  <div className="text-base sm:text-xl font-bold font-mono-numbers text-slate-900">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Attributable Quote */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{activeCase.quote.text}"
              </p>
              <div className="text-xs">
                <strong className="text-slate-900">{activeCase.quote.author}</strong>
                <span className="text-slate-400 mx-1.5">·</span>
                <span className="text-slate-600">{activeCase.quote.title}, {activeCase.quote.company}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Ready to replicate these results with your team?
              </span>
              <button
                type="button"
                onClick={() => onOpenConsultation(`Discuss Use Case: ${activeCase.tagline}`)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                <span>Deploy This Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
