import React from 'react';
import { CORE_PILLARS } from '../data/content';
import { FileCheck, ShieldCheck, HeartHandshake, Headphones, Smartphone, CreditCard, ArrowRight } from 'lucide-react';

interface CapabilitiesGridProps {
  onOpenConsultation: (intent?: string) => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onOpenConsultation }) => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <FileCheck className="w-5 h-5 text-emerald-800" />,
    '02': <ShieldCheck className="w-5 h-5 text-emerald-800" />,
    '03': <HeartHandshake className="w-5 h-5 text-emerald-800" />,
    '04': <Headphones className="w-5 h-5 text-emerald-800" />,
    '05': <Smartphone className="w-5 h-5 text-emerald-800" />,
    '06': <CreditCard className="w-5 h-5 text-emerald-800" />,
  };

  return (
    <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
            <span>FULL-STACK WORKFORCE INFRASTRUCTURE</span>
            <span aria-hidden="true">·</span>
            <span>END-TO-END EOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display" style={{ textWrap: 'balance' }}>
            Everything required to employ, pay, and support Indian talent compliantly.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Eliminate multi-vendor fragmentation. SnailHRA integrates legal employment, payroll processing, statutory deductions, employee insurance, and daily HR operations under one accountable roof.
          </p>
        </div>

        {/* 6 Bento Grid Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                {/* Header row with clean editorial number and icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {iconMap[pillar.number]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>

                {/* Sub-deliverables list */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {pillar.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom highlight label */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-800">
                  {pillar.highlight}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Inquire about ${pillar.title}`)}
                  className="text-slate-400 hover:text-emerald-800 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
