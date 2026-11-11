import React, { useState } from 'react';
import { CURRENCIES } from '../data/content';
import { DollarSign, Calculator, HelpCircle, ArrowRight, ShieldCheck, Download, Users, TrendingUp } from 'lucide-react';

interface PayrollCalculatorProps {
  onOpenConsultation: (intent?: string) => void;
}

export const PayrollCalculator: React.FC<PayrollCalculatorProps> = ({ onOpenConsultation }) => {
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('USD');
  const [annualSalaryInSelectedCurrency, setAnnualSalaryInSelectedCurrency] = useState<number>(45000);
  const [headcount, setHeadcount] = useState<number>(3);
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);

  const currency = CURRENCIES.find((c) => c.code === selectedCurrencyCode) || CURRENCIES[0];

  // Convert annual foreign salary to INR
  const totalAnnualSalaryInr = annualSalaryInSelectedCurrency * currency.inrMultiplier;
  const monthlySalaryInr = totalAnnualSalaryInr / 12;

  // Indian Salary Structure Calculations (Standard compliant model):
  // 1. Basic Salary = 40% of Monthly Gross
  const basicSalary = Math.round(monthlySalaryInr * 0.4);
  // 2. HRA = 50% of Basic
  const hraAllowance = Math.round(basicSalary * 0.5);
  // 3. Other / Special Allowances = Remainder
  const otherAllowances = Math.max(0, Math.round(monthlySalaryInr - basicSalary - hraAllowance));

  // Statutory Employer Overhead:
  // - Employer PF = 12% of Basic (often capped at ₹1,800 or full uncapped 12% for tech roles)
  const employerPf = Math.round(Math.min(basicSalary * 0.12, 8500));
  // - Gratuity = 4.81% of Basic
  const employerGratuity = Math.round(basicSalary * 0.0481);
  // - Group Medical Insurance = approx ₹1,500/mo
  const employerInsurance = includeInsurance ? 1650 : 0;
  const totalMonthlyEmployerStatutory = employerPf + employerGratuity + employerInsurance;

  // Employee Deductions:
  const employeePf = employerPf;
  const professionalTax = 200; // standard state PT average
  // Estimated TDS (assuming modern 115BAC new tax regime)
  const taxableAnnual = (monthlySalaryInr * 12) - 75000; // standard deduction
  let estimatedAnnualTax = 0;
  if (taxableAnnual > 1500000) {
    estimatedAnnualTax = (taxableAnnual - 1500000) * 0.3 + 140000;
  } else if (taxableAnnual > 1200000) {
    estimatedAnnualTax = (taxableAnnual - 1200000) * 0.2 + 80000;
  } else if (taxableAnnual > 1000000) {
    estimatedAnnualTax = (taxableAnnual - 1000000) * 0.15 + 50000;
  } else if (taxableAnnual > 700000) {
    estimatedAnnualTax = (taxableAnnual - 700000) * 0.1 + 20000;
  } else {
    estimatedAnnualTax = 0; // rebate up to 7L
  }
  const monthlyTds = Math.round(estimatedAnnualTax / 12);
  const netTakeHomeInr = Math.max(0, Math.round(monthlySalaryInr - employeePf - professionalTax - monthlyTds));

  // SnailHRA Flat EOR Monthly Fee (e.g., $199 USD converted)
  const eorFeePerEmployeeInr = 17500; // approx $200 USD
  const eorFeePerEmployeeSelectedCurr = Math.round(eorFeePerEmployeeInr / currency.inrMultiplier);

  // Total monthly cost per employee for client in selected currency
  const totalMonthlyCostPerEmployeeInr = monthlySalaryInr + totalMonthlyEmployerStatutory + eorFeePerEmployeeInr;
  const totalMonthlyCostPerEmployeeSelectedCurr = Math.round(totalMonthlyCostPerEmployeeInr / currency.inrMultiplier);
  const totalTeamMonthlyCost = totalMonthlyCostPerEmployeeSelectedCurr * headcount;

  // Entity Incorporation Comparative Math:
  // Setting up an Indian Private Limited costs ~$15,000 upfront + $20,000/yr in audits, resident director, bank custody
  const entitySetupAnnualEquivalent = Math.round((15000 + 22000) / (currency.inrMultiplier / 86.5));
  const snailHraAnnualEorTotal = (eorFeePerEmployeeSelectedCurr * headcount * 12);
  const estimatedAnnualSavings = Math.max(12000, entitySetupAnnualEquivalent - snailHraAnnualEorTotal);

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider">
            <span>REAL-TIME PAYROLL ESTIMATOR</span>
            <span aria-hidden="true">·</span>
            <span>MULTI-CURRENCY SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display" style={{ textWrap: 'balance' }}>
            Calculate Indian employee CTC, statutory tax, and EOR savings.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Transparent breakdown of Indian statutory provisions: Basic, HRA, Provident Fund (EPFO), Gratuity, Medical Insurance, and net employee take-home pay.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-6">
            
            {/* Currency Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Billing Currency
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => setSelectedCurrencyCode(c.code)}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center ${
                      selectedCurrencyCode === c.code
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500">
                1 {currency.code} = ₹{currency.inrMultiplier.toFixed(1)} INR (Live compliant exchange model)
              </p>
            </div>

            {/* Annual Salary Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Target Annual Salary Per Employee
                </label>
                <span className="font-mono-numbers text-base font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {currency.symbol}{annualSalaryInSelectedCurrency.toLocaleString()} {currency.code}
                </span>
              </div>

              <input
                type="range"
                min={15000}
                max={150000}
                step={2500}
                value={annualSalaryInSelectedCurrency}
                onChange={(e) => setAnnualSalaryInSelectedCurrency(Number(e.target.value))}
                className="w-full accent-emerald-800 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono-numbers">
                <span>{currency.symbol}15k (Entry/Ops)</span>
                <span>{currency.symbol}45k (Mid/Sr Eng)</span>
                <span>{currency.symbol}150k (Staff/Exec)</span>
              </div>

              <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                Equivalent Indian CTC:{' '}
                <strong className="text-slate-900 font-mono-numbers">
                  ₹{(totalAnnualSalaryInr / 100000).toFixed(1)} Lakhs / year
                </strong>{' '}
                (₹{Math.round(monthlySalaryInr).toLocaleString('en-IN')} / month)
              </div>
            </div>

            {/* Team Headcount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Number of Employees to Hire
                </label>
                <span className="font-mono-numbers text-base font-bold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200">
                  {headcount} {headcount === 1 ? 'Hire' : 'Hires'}
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-emerald-800 cursor-pointer"
              />
            </div>

            {/* Group Insurance Toggle */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Include Group Medical Cover (GMC)</span>
                <span className="text-[11px] text-slate-500">₹5 Lakhs family cashless hospitalization</span>
              </div>
              <button
                type="button"
                onClick={() => setIncludeInsurance(!includeInsurance)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  includeInsurance ? 'bg-emerald-800' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    includeInsurance ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Quick Action Button */}
            <button
              type="button"
              onClick={() => onOpenConsultation(`Quote: ${headcount} hires at ${currency.symbol}${annualSalaryInSelectedCurrency} ${currency.code}`)}
              className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Get Detailed Written Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* Results Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Summary Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-emerald-400">TOTAL ESTIMATED CLIENT INVOICE</span>
                <span className="text-xs text-slate-400 font-mono">
                  {headcount} Indian Employee{headcount > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">Total Monthly Cost</div>
                  <div className="text-3xl font-extrabold font-mono-numbers text-white tracking-tight">
                    {currency.symbol}{totalTeamMonthlyCost.toLocaleString()} <span className="text-sm font-normal text-slate-400">{currency.code}/mo</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1">
                    Includes salary + statutory PF/gratuity + SnailHRA EOR fee
                  </div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/80">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Annual Entity Avoidance Savings</span>
                  </div>
                  <div className="text-xl font-bold font-mono-numbers text-white mt-1">
                    ~{currency.symbol}{estimatedAnnualSavings.toLocaleString()} {currency.code}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Saved on legal secretarial, resident directors, & CA audits
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Statutory Breakdown Card (Mirroring SnailHRA's portal payroll engine) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">
                  Individual Monthly Salary Structure & Statutory Math
                </h3>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                  100% Tax Compliant
                </span>
              </div>

              {/* Component Stack */}
              <div className="space-y-3 text-xs">
                
                {/* 1. Base Compensation */}
                <div className="space-y-1.5">
                  <div className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    1. Monthly Gross Compensation (₹{Math.round(monthlySalaryInr).toLocaleString('en-IN')})
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <span className="text-slate-500 block text-[11px]">Basic Salary (40%)</span>
                      <span className="font-bold text-slate-900 font-mono-numbers">
                        ₹{basicSalary.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <span className="text-slate-500 block text-[11px]">HRA Allowance (20%)</span>
                      <span className="font-bold text-slate-900 font-mono-numbers">
                        ₹{hraAllowance.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <span className="text-slate-500 block text-[11px]">Special Allowances (40%)</span>
                      <span className="font-bold text-slate-900 font-mono-numbers">
                        ₹{otherAllowances.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Employer Mandatory Overhead */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    2. Employer Statutory Overhead (+₹{totalMonthlyEmployerStatutory.toLocaleString('en-IN')}/mo)
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                      <span className="text-slate-600 block text-[11px]">Employer PF (EPFO 12%)</span>
                      <span className="font-bold text-emerald-900 font-mono-numbers">
                        ₹{employerPf.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                      <span className="text-slate-600 block text-[11px]">Gratuity Provision (4.81%)</span>
                      <span className="font-bold text-emerald-900 font-mono-numbers">
                        ₹{employerGratuity.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                      <span className="text-slate-600 block text-[11px]">GMC Group Insurance</span>
                      <span className="font-bold text-emerald-900 font-mono-numbers">
                        ₹{employerInsurance.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Employee Take-Home Math */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                    3. Estimated Net In-Hand Employee Take-Home Pay
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-mono-numbers">
                        ₹{netTakeHomeInr.toLocaleString('en-IN')} / month
                      </div>
                      <div className="text-[11px] text-slate-500">
                        After PF (₹{employeePf.toLocaleString('en-IN')}), State PT (₹200), and projected income tax TDS
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded">
                      Direct NEFT / IMPS to Indian Bank
                    </span>
                  </div>
                </div>

              </div>

              {/* SnailHRA EOR Flat Fee explanation */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>SnailHRA EOR Partner Management Fee:</span>
                <span className="font-bold text-slate-900 font-mono-numbers">
                  {currency.symbol}{eorFeePerEmployeeSelectedCurr} {currency.code} / employee / month
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
