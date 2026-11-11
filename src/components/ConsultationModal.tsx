import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Download, Calendar, Mail, Building, User, Globe } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialIntent,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [headquarters, setHeadquarters] = useState('United States');
  const [teamSize, setTeamSize] = useState('1–5 hires');
  const [roleType, setRoleType] = useState('Engineering & Tech');
  const [timeline, setTimeline] = useState('Next 30 Days');
  const [notes, setNotes] = useState(initialIntent ? `Intent: ${initialIntent}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid work email address';
    }
    if (!company.trim()) errs.company = 'Please enter your company name';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#047857', '#10B981', '#065F46', '#34D399'],
      });
    } catch {
      // Ignore if confetti is blocked
    }

    setSubmitted(true);
  };

  const handleDownloadProposalSim = () => {
    const proposalData = `===================================================
SNAILHRA - EMPLOYER OF RECORD & GLOBAL PAYROLL
CUSTOM INDIA HIRING PROPOSAL & COMPLIANCE SUMMARY
===================================================

Prepared for: ${fullName}
Company: ${company} (${headquarters})
Contact Email: ${email}
Planned India Headcount: ${teamSize}
Role Focus: ${roleType}
Target Deployment: ${timeline}
Notes: ${notes || 'Standard EOR Agreement'}

SNAILHRA SERVICE SPECIFICATIONS:
- Legal Entity: SnailHRA India Operations (Compliant Indian Corporate Employer)
- Onboarding Turnaround: 24 to 48 hours per candidate
- Statutory Inclusions:
  * Employees' Provident Fund (EPFO 12%)
  * Employees' State Insurance (ESIC) & Group Medical Coverage
  * Professional Tax (PT) across 28 Indian states
  * TDS Withholding & Quarterly Form 24Q Filings
  * Statutory Gratuity Provision (Payment of Gratuity Act 1972)
- Multi-Currency Invoicing: USD, EUR, GBP, SGD, AED, or CAD
- RBI FEMA Compliance: Automatic Foreign Inward Remittance Certificates (FIRC)
- Digital HRMS: SnailHRA Portal for attendance, payslips & KYC vault

NEXT STEPS:
Your dedicated SnailHRA India Director will contact you within 2 business hours to review candidate offer letters and deliver your tailored master services agreement.

Website: https://snail-hra.vercel.app
Platform: SnailHRA Enterprise Workforce Platform
===================================================`;

    const blob = new Blob([proposalData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SnailHRA_India_EOR_Proposal_${company.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                SNAILHRA ONBOARDING ADVISORY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                Request Custom India EOR Proposal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Receive exact Indian CTC breakdowns, statutory tax structuring, and onboarding contracts within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  />
                  {errors.fullName && <p className="text-rose-600 text-[11px] mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  />
                  {errors.email && <p className="text-rose-600 text-[11px] mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Technologies"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  />
                  {errors.company && <p className="text-rose-600 text-[11px] mt-0.5">{errors.company}</p>}
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Headquarters Country
                  </label>
                  <select
                    value={headquarters}
                    onChange={(e) => setHeadquarters(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  >
                    <option value="United States">United States (USD)</option>
                    <option value="United Kingdom">United Kingdom (GBP)</option>
                    <option value="European Union">European Union (EUR)</option>
                    <option value="Singapore">Singapore (SGD)</option>
                    <option value="United Arab Emirates">United Arab Emirates (AED)</option>
                    <option value="Canada">Canada (CAD)</option>
                    <option value="Australia">Australia (AUD)</option>
                    <option value="Other">Other Global Location</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Planned Headcount
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  >
                    <option value="1–2 hires">1–2 hires</option>
                    <option value="3–5 hires">3–5 hires</option>
                    <option value="6–15 hires">6–15 hires</option>
                    <option value="16–50+ hires">16–50+ hires</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Role Category
                  </label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  >
                    <option value="Engineering & Tech">Engineering & AI</option>
                    <option value="Product & Design">Product & Design</option>
                    <option value="Sales & Customer Success">Sales & Operations</option>
                    <option value="Executive Leadership">Leadership</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Hiring Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                  >
                    <option value="Immediately (Next 48h)">Immediately</option>
                    <option value="Next 30 Days">Next 30 Days</option>
                    <option value="Within 60 Days">Within 60 Days</option>
                    <option value="Budgeting & Planning">Budgeting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Specific Requirements or Candidate Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. We have a senior developer in Bengaluru ready to sign, need offer letter and PF setup..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <span>Submit Inquiry & Generate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>NDA & strict confidentiality guaranteed. No obligation.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="space-y-6 py-4 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Inquiry Received, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you. We have recorded your requirement for <strong>{company}</strong> ({teamSize} in {roleType}). An India Expansion Director has been assigned to your account.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Summary of Your Deployment Request</span>
                <span className="text-emerald-700 font-mono font-semibold">REF: SHRA-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div>Corporate: <strong className="text-slate-900">{company}</strong></div>
                <div>Billing Currency: <strong className="text-slate-900">{headquarters}</strong></div>
                <div>Headcount: <strong className="text-slate-900">{teamSize}</strong></div>
                <div>Target Start: <strong className="text-slate-900">{timeline}</strong></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleDownloadProposalSim}
                className="flex-1 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Summary Sheet (.txt)</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
