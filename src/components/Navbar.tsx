import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (intent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark (Display face, single line, no subtitle tag) */}
          <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Building2 className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                Snail<span className="text-emerald-700">HRA</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 -mt-1">
                Employer of Record · India
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#capabilities" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              Capabilities
            </a>
            <a href="#portal-tour" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              HRMS Portal Tour
            </a>
            <a href="#calculator" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              Cost & Tax Calculator
            </a>
            <a href="#comparison" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              EOR vs Entity
            </a>
            <a href="#compliance" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              Compliance & Tax
            </a>
            <a href="#faq" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('Quick Inquiry')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Contact Sales
            </button>
            <button
              onClick={() => onOpenConsultation('Book India EOR Consultation')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Capabilities
            </a>
            <a
              href="#portal-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              HRMS Portal Tour
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Cost & Tax Calculator
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              EOR vs Entity Comparison
            </a>
            <a
              href="#compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Statutory Compliance
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Mobile Start');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
            >
              Book India EOR Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
