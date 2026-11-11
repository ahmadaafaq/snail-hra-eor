import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Globe2, Building, DollarSign, Users, Award, Play } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (intent?: string) => void;
  onScrollToPortal: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToPortal,
  onScrollToCalculator,
}) => {
  const [selectedHiringFocus, setSelectedHiringFocus] = useState<'tech' | 'operations' | 'executive'>('tech');

  const focusDetails = {
    tech: {
      title: 'Senior Software & AI Engineers in India',
      typicalSalary: '$35,000 – $65,000 / year (₹30L – ₹55L)',
      timeline: '48 Hours to Employment Agreement',
      statutory: 'EPFO + Group Medical Insurance + IP Assignment',
    },
    operations: {
      title: 'Customer Success, Finance & Operations Staff',
      typicalSalary: '$18,000 – $32,000 / year (₹15L – ₹28L)',
      timeline: '24–48 Hours to Compliant Onboarding',
      statutory: 'Statutory Bonus + ESIC / GMC + State PT',
    },
    executive: {
      title: 'Directors, Country Leads & Senior Managers',
      typicalSalary: '$70,000 – $120,000 / year (₹60L – ₹1Cr)',
      timeline: 'Custom Executive Contracts & Gratuity Structuring',
      statutory: 'Tax-Optimized HRA & Executive Indemnity',
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quiet Unboxed Metadata Kicker (Anti-pill discipline: unboxed text with separators) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide">
              <span>EMPLOYER OF RECORD</span>
              <span aria-hidden="true">·</span>
              <span>GLOBAL PAYROLL</span>
              <span aria-hidden="true">·</span>
              <span>HR OPERATIONS INDIA</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.15]" style={{ textWrap: 'balance' }}>
              Hire and manage your Indian workforce through one integrated partner.
            </h1>

            {/* Subtitle / Value Explanation */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Scale your team in India in days without incorporating a local legal entity. SnailHRA handles local employment contracts, multi-currency payroll, EPFO & tax compliance, group health insurance, and dedicated HR operations through our proprietary HRMS portal.
            </p>

            {/* Key Value Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">100% Statutory & Tax Compliance (PF, ESIC, PT, TDS)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">No Indian Private Limited Entity Required</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Multi-Currency Invoicing (USD, EUR, GBP, SGD, AED)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">Proprietary Digital Employee Self-Service Portal</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation('Hero CTA')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-sm transition-all hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Hire in India Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                <DollarSign className="w-4 h-4 text-emerald-700" />
                <span>Estimate Hiring Costs</span>
              </button>

              <button
                onClick={onScrollToPortal}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-emerald-800 hover:text-emerald-900 hover:underline underline-offset-4 whitespace-nowrap"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>View Live HRMS Portal Tour</span>
              </button>
            </div>

            {/* Subtle verification notice */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span>Backed by registered Indian legal entity</span>
              <span aria-hidden="true">·</span>
              <span>RBI FEMA Compliant</span>
              <span aria-hidden="true">·</span>
              <span>Over $12M+ Annual Payroll Processed</span>
            </div>

          </div>

          {/* Right Column: Interactive Hiring Focus & Live Portal Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">India Expansion Rapid Deploy</h3>
                  <p className="text-xs text-slate-500">Select candidate role type to view EOR timeline</p>
                </div>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                  48H SLA
                </span>
              </div>

              {/* Interactive Segmented Selector (Permitted interactive control with click handlers) */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setSelectedHiringFocus('tech')}
                  className={`py-2 px-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    selectedHiringFocus === 'tech'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tech & AI
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedHiringFocus('operations')}
                  className={`py-2 px-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    selectedHiringFocus === 'operations'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ops & Sales
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedHiringFocus('executive')}
                  className={`py-2 px-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    selectedHiringFocus === 'executive'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Leadership
                </button>
              </div>

              {/* Role Details dynamic card */}
              <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Target Profile
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {focusDetails[selectedHiringFocus].title}
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div>
                    <span className="text-slate-500 block">Typical Salary Band</span>
                    <span className="font-semibold text-slate-800 font-mono-numbers">
                      {focusDetails[selectedHiringFocus].typicalSalary}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Onboarding Speed</span>
                    <span className="font-semibold text-emerald-700">
                      {focusDetails[selectedHiringFocus].timeline}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs">
                  <span className="text-slate-500 block">Statutory Package Included</span>
                  <span className="font-medium text-slate-700">
                    {focusDetails[selectedHiringFocus].statutory}
                  </span>
                </div>
              </div>

              {/* Quick teaser of the SnailHRA Portal (Referencing user's screenshot aesthetics) */}
              <div className="p-4 bg-emerald-900 text-white rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-200">SNAILHRA SYSTEM SUITE</span>
                  <span className="text-[11px] bg-emerald-800 px-2 py-0.5 rounded text-emerald-300">
                    Active Roster v2.4
                  </span>
                </div>
                <div className="text-sm font-semibold">
                  Full Employee Self-Service & Local Compliance Vault
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Every employee receives digital onboarding, KYC validation, salary specs breakdown, and automated monthly payslips.
                </p>
                <button
                  type="button"
                  onClick={onScrollToPortal}
                  className="w-full py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 rounded-lg text-white transition-colors"
                >
                  Launch Interactive HRMS Sandbox →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof Metric Strip below hero split */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-numbers tracking-tight">
              48 Hours
            </div>
            <div className="text-xs font-medium text-slate-600">
              Avg. Time to Issue Compliant Employment Agreement
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-numbers tracking-tight">
              $0 CapEx
            </div>
            <div className="text-xs font-medium text-slate-600">
              Entity Incorporation & Resident Director Fees Saved
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-numbers tracking-tight">
              100% Audit
            </div>
            <div className="text-xs font-medium text-slate-600">
              EPFO, ESIC, Professional Tax & TDS Compliance
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono-numbers tracking-tight">
              6 Currencies
            </div>
            <div className="text-xs font-medium text-slate-600">
              Invoice in USD, EUR, GBP, SGD, AED, or CAD
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
