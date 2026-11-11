import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortalShowcase } from './components/PortalShowcase';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { PayrollCalculator } from './components/PayrollCalculator';
import { EntityComparison } from './components/EntityComparison';
import { UseCasesSection } from './components/UseCasesSection';
import { StatutoryComplianceSection } from './components/StatutoryComplianceSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationIntent, setConsultationIntent] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (intent?: string) => {
    setConsultationIntent(intent);
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
    setConsultationIntent(undefined);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onScrollToPortal={() => scrollToSection('portal-tour')}
          onScrollToCalculator={() => scrollToSection('calculator')}
        />

        {/* 2. Interactive HRMS Portal Showcase (Screenshots & Live Sandbox) */}
        <PortalShowcase />

        {/* 3. Core Capabilities Grid (5 Pillars + Currency) */}
        <CapabilitiesGrid onOpenConsultation={handleOpenConsultation} />

        {/* 4. Real-time Indian CTC, Tax & EOR Cost Estimator */}
        <PayrollCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 5. Entity Incorporation vs. SnailHRA EOR Comparison */}
        <EntityComparison onOpenConsultation={handleOpenConsultation} />

        {/* 6. Business Use Cases & Case Studies */}
        <UseCasesSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Statutory Compliance, Tax & Labor Law Rigor */}
        <StatutoryComplianceSection />

        {/* 8. Conversion Pre-Footer Banner */}
        <section className="py-16 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  RAPID INDIA EMPLOYMENT LAUNCH
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display" style={{ textWrap: 'balance' }}>
                  Ready to onboard your first Indian team member in 48 hours?
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Join venture-backed software companies and international enterprises hiring and paying top Indian engineering and operations talent compliantly with SnailHRA.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No entity setup fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full IP assignment protection
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% EPFO & tax compliance
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenConsultation('Pre-footer CTA')}
                  className="px-6 py-3.5 bg-white text-emerald-950 hover:bg-slate-100 text-xs font-bold rounded-xl shadow-lg transition-all hover:shadow-xl whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>Request Custom EOR Proposal</span>
                  <ArrowRight className="w-4 h-4 text-emerald-800" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('calculator')}
                  className="px-5 py-3.5 bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl border border-emerald-600 transition-colors whitespace-nowrap"
                >
                  Estimate Monthly CTC
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation / Proposal Builder Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
        initialIntent={consultationIntent}
      />
    </div>
  );
}
