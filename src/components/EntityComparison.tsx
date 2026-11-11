import React from 'react';
import { COMPARISON_DATA } from '../data/content';
import { Check, X, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface EntityComparisonProps {
  onOpenConsultation: (intent?: string) => void;
}

export const EntityComparison: React.FC<EntityComparisonProps> = ({ onOpenConsultation }) => {
  return (
    <section id="comparison" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
            <span>STRATEGIC EXPANSION DECISION</span>
            <span aria-hidden="true">·</span>
            <span>EOR VS. SUBSIDIARY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display" style={{ textWrap: 'balance' }}>
            Why global companies choose SnailHRA over incorporating an Indian entity.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Incorporating a Private Limited subsidiary in India requires local resident directors, registered offices, capital infusions, and 20+ recurring state and central filings. SnailHRA allows you to deploy and manage staff compliantly in 48 hours.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/60 text-xs font-bold text-slate-700">
                  <th className="py-4 px-6 w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-6 w-3/8 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      <span>Setting Up Indian Private Limited</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 w-3/8 bg-emerald-50/70 text-emerald-950 font-bold border-l border-emerald-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        <span>SnailHRA Employer of Record</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Recommended
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 align-top">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-6 text-slate-600 align-top leading-relaxed">
                      {row.indianEntity}
                    </td>
                    <td className="py-4 px-6 bg-emerald-50/30 font-medium text-slate-900 align-top border-l border-emerald-100 leading-relaxed">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{row.snailHraEor}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom callout */}
          <div className="p-6 bg-slate-100/60 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              <strong className="text-slate-900">Planning to incorporate later?</strong> We offer a smooth transfer guarantee: migrate your employees to your own entity anytime without workflow interruption.
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Inquire about Entity vs EOR')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <span>Speak with an India Expansion Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
