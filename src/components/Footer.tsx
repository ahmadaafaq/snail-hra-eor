import React from 'react';
import { Building2, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (intent?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
                <Building2 className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Snail<span className="text-emerald-500">HRA</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              SnailHRA is India's dedicated Employer of Record, Global Multi-Currency Payroll, and HR Operations infrastructure partner. We empower international companies to hire, pay, and compliantly manage top Indian talent without local entity incorporation.
            </p>

            <div className="space-y-1.5 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Operational Hubs: Ludhiana · Bengaluru · Delhi NCR · Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>support@snail-hra.com · enterprise@snail-hra.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              EOR Solutions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  India Employer of Record
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Global Multi-Currency Payroll
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  Statutory Tax & EPFO Filings
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Group Medical Insurance (GMC)
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">
                  Contractor to EOR Conversion
                </a>
              </li>
            </ul>
          </div>

          {/* Technology & Portal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              SnailHRA Platform
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#portal-tour" className="hover:text-white transition-colors">
                  Executive HRMS Portal
                </a>
              </li>
              <li>
                <a href="#portal-tour" className="hover:text-white transition-colors">
                  Employee Directory & Vault
                </a>
              </li>
              <li>
                <a href="#portal-tour" className="hover:text-white transition-colors">
                  Biometric & Web Attendance
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Indian CTC Cost Calculator
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  EOR vs. Indian Subsidiary
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  EPF Act, 1952
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  ESIC & Gratuity Regulations
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  TDS Withholding & Form 16
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  POSH Committee Compliance
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-white transition-colors">
                  RBI FEMA Cross-Border Remittance
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SnailHRA Platform Technologies Private Limited. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation('Privacy & Data Governance')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy (DPDP Act)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenConsultation('Terms of Service')}
              className="hover:text-slate-300 transition-colors"
            >
              Master Services Agreement
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenConsultation('Security & SOC2')}
              className="hover:text-slate-300 transition-colors"
            >
              Security Whitepaper
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
