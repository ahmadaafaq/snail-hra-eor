import React, { useState } from 'react';
import { MOCK_ROSTER } from '../data/content';
import { EmployeeRecord } from '../types';
import {
  Users,
  Clock,
  Shield,
  FileText,
  DollarSign,
  Search,
  CheckCircle,
  Building,
  UserCheck,
  Calendar,
  Layers,
  ArrowRight,
  Maximize2,
  ExternalLink,
  Laptop,
  CreditCard,
  Lock,
  ChevronRight,
  FileCheck2,
  User,
  SlidersHorizontal,
} from 'lucide-react';

export const PortalShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'screenshots'>('interactive');
  const [portalView, setPortalView] = useState<'admin' | 'directory'>('directory');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>(MOCK_ROSTER[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockTime, setClockTime] = useState<string | null>(null);
  const [screenshotModalImage, setScreenshotModalImage] = useState<string | null>(null);

  const selectedEmployee: EmployeeRecord =
    MOCK_ROSTER.find((e) => e.id === selectedEmployeeId) || MOCK_ROSTER[0];

  const filteredEmployees = MOCK_ROSTER.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || emp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleClockToggle = () => {
    if (!isClockedIn) {
      const now = new Date();
      setClockTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
      setIsClockedIn(true);
    } else {
      setIsClockedIn(false);
      setClockTime(null);
    }
  };

  const totalGrossSalary =
    selectedEmployee.basicSalary +
    selectedEmployee.hraAllowance +
    selectedEmployee.otherAllowances;

  return (
    <section id="portal-tour" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-emerald-400">
            <span>PROPRIETARY HRMS PORTAL</span>
            <span aria-hidden="true">·</span>
            <span>BUILT FOR INDIA OPERATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display" style={{ textWrap: 'balance' }}>
            Empower your team with SnailHRA's integrated HRMS platform.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Review the exact portal your company leadership and Indian workforce use daily. Manage attendance, browse the employee directory, view tax-optimized salary specs, and maintain encrypted KYC vaults.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-800 rounded-xl border border-slate-700/80 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('interactive')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'interactive'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Portal Sandbox
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('screenshots')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'screenshots'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Production Portal Walkthrough
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE SANDBOX */}
        {activeTab === 'interactive' && (
          <div className="mt-12 bg-slate-50 text-slate-900 rounded-2xl border border-slate-300 shadow-2xl overflow-hidden">
            
            {/* Top Bar of the Mock Portal (Matching screenshot: MGM Financiers / SnailHRA portal) */}
            <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white font-bold text-xs">
                  SH
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>SnailHRA Client Operations Portal</span>
                    <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Enterprise Suite v2.4
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">MGM Global Services · India Workforce</div>
                </div>
              </div>

              {/* Sub-view switcher inside mock portal */}
              <div className="flex items-center gap-2">
                <div className="flex p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setPortalView('directory')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      portalView === 'directory'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Employee Directory & Specs
                  </button>
                  <button
                    type="button"
                    onClick={() => setPortalView('admin')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      portalView === 'admin'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Executive Dashboard
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 text-xs">
                  <span className="text-slate-500">Branch:</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    Ludhiana / NCR Active
                  </span>
                </div>
              </div>
            </div>

            {/* Portal Body */}
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* VIEW A: EMPLOYEE DIRECTORY & SALARY SPECS (Inspired by Screenshot 2) */}
              {portalView === 'directory' && (
                <div className="space-y-6">
                  
                  {/* Search and Filters Bar */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search employees by name, role, ID, or department..."
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs">
                        {['All', 'Active'].map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => setStatusFilter(status)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                              statusFilter === status
                                ? 'bg-emerald-800 text-white border-emerald-800'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>

                      <span className="text-xs text-slate-500 hidden md:inline">
                        Showing {filteredEmployees.length} of {MOCK_ROSTER.length} records
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: Left Roster List, Right Full Detail View */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: Employee Roster Cards */}
                    <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-1">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                        Select Employee Profile
                      </div>

                      {filteredEmployees.map((emp) => {
                        const isSelected = emp.id === selectedEmployee.id;
                        return (
                          <div
                            key={emp.id}
                            onClick={() => setSelectedEmployeeId(emp.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-emerald-50/80 border-emerald-600 ring-1 ring-emerald-600 shadow-sm'
                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                {emp.name.split(' ').map((n) => n[0]).join('')}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-bold text-slate-900 truncate">
                                    {emp.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1 rounded">
                                    {emp.code}
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-600 truncate">
                                  {emp.role} · {emp.department}
                                </div>
                              </div>
                            </div>

                            <div className="text-right shrink-0 pl-2">
                              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                                {emp.status}
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-400 ml-auto mt-1" />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right: Comprehensive Employee Specifications Card (Mirroring Screenshot 2) */}
                    <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 space-y-5">
                      
                      {/* Top Header of Selected Employee */}
                      <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-base shadow-xs">
                            {selectedEmployee.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-bold text-slate-900">
                                {selectedEmployee.name}
                              </h3>
                              <span className="text-xs font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                                {selectedEmployee.code}
                              </span>
                              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                                {selectedEmployee.status}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5">
                              {selectedEmployee.role} ({selectedEmployee.department})
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              Joined on {selectedEmployee.joinedDate} · {selectedEmployee.location}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[11px] text-slate-500 uppercase font-semibold">Monthly Gross CTC</div>
                          <div className="text-lg font-bold text-slate-900 font-mono-numbers">
                            ₹{totalGrossSalary.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                      {/* Bank & Salary Specs Section */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                          <CreditCard className="w-4 h-4 text-emerald-700" />
                          <span>Bank & Indian Salary Structure</span>
                        </div>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-slate-500 block text-[11px]">Basic Salary</span>
                            <span className="font-bold text-slate-900 font-mono-numbers">
                              ₹{selectedEmployee.basicSalary.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-slate-400 block">40% of CTC</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[11px]">HRA Allowance</span>
                            <span className="font-bold text-slate-900 font-mono-numbers">
                              ₹{selectedEmployee.hraAllowance.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-slate-400 block">Tax Exemption</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[11px]">Other Allowances</span>
                            <span className="font-bold text-slate-900 font-mono-numbers">
                              ₹{selectedEmployee.otherAllowances.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-slate-400 block">Special / LTA</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[11px]">Direct Bank Account</span>
                            <span className="font-bold text-slate-900 font-mono-numbers">
                              ****{selectedEmployee.accountEnding}
                            </span>
                            <span className="text-[10px] text-emerald-700 font-semibold block">{selectedEmployee.bankName}</span>
                          </div>
                        </div>
                      </div>

                      {/* Statutory Identifiers (PAN & EPFO UAN) */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                          <Shield className="w-4 h-4 text-emerald-700" />
                          <span>Statutory Tax & Social Security Identifiers</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <span className="text-slate-500 text-[11px] block">Permanent Account Number (PAN)</span>
                            <span className="font-mono font-bold text-slate-900 text-sm tracking-wide">
                              {selectedEmployee.panNumber}
                            </span>
                            <span className="text-[10px] text-emerald-700 flex items-center gap-1 mt-0.5">
                              <CheckCircle className="w-3 h-3" /> Income Tax Verified
                            </span>
                          </div>

                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <span className="text-slate-500 text-[11px] block">Universal Account Number (EPFO UAN)</span>
                            <span className="font-mono font-bold text-slate-900 text-sm tracking-wide">
                              {selectedEmployee.uanNumber}
                            </span>
                            <span className="text-[10px] text-emerald-700 flex items-center gap-1 mt-0.5">
                              <CheckCircle className="w-3 h-3" /> Provident Fund Linked
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Onboarding Document Checklist & Vault (Mirroring Screenshot 2) */}
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                            <FileCheck2 className="w-4 h-4 text-emerald-700" />
                            <span>Onboarding Document Checklist & Digital KYC Vault</span>
                          </div>
                          <span className="text-[11px] font-semibold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                            {selectedEmployee.kycDocsCount}/5 Documents Verified
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          Mandatory employee KYC requirements paired with SnailHRA's digital document vault: Aadhaar card verification, PAN card, dual-language employment contract with IP assignment, education degree validation, and previous employer relieving letter.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                          <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-600" /> Aadhaar KYC
                          </span>
                          <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-600" /> Signed EOR Agreement
                          </span>
                          <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-600" /> IP Assignment
                          </span>
                          <span className="bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-600" /> Bank Mandate
                          </span>
                        </div>
                      </div>

                      {/* Emergency Contact & Address */}
                      <div className="text-xs text-slate-500 pt-1 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="font-semibold text-slate-700">Contact Person:</span>{' '}
                          {selectedEmployee.emergencyContact.name} ({selectedEmployee.emergencyContact.phone})
                        </div>
                        <div className="truncate max-w-xs">
                          <span className="font-semibold text-slate-700">Address:</span>{' '}
                          {selectedEmployee.emergencyContact.address}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              )}

              {/* VIEW B: EXECUTIVE ADMIN DASHBOARD (Inspired by Screenshot 1) */}
              {portalView === 'admin' && (
                <div className="space-y-6">
                  
                  {/* Hero Banner inside the portal (Exact text and vibe from Screenshot 1) */}
                  <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-xl p-5 sm:p-6 shadow-md relative overflow-hidden">
                    <div className="space-y-3 relative z-10 max-w-2xl">
                      <div className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-2">
                        <span>SYSTEM ADMINISTRATOR PORTAL</span>
                        <span aria-hidden="true">·</span>
                        <span>SNAILHRA OPERATIONS</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display">
                        Welcome back, Executive Team!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                        Executive Overview: Monitoring company-wide attendance, HR rosters, payroll metrics, statutory compliance, and infrastructure security.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 text-xs">
                        <span className="bg-emerald-800/80 px-3 py-1 rounded-md text-emerald-200">
                          Clearance: <strong className="text-white">SUPER ADMIN</strong>
                        </span>
                        <span className="bg-emerald-800/80 px-3 py-1 rounded-md text-emerald-200">
                          Regional Office: <strong className="text-white">Ludhiana & NCR Hub</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Attendance & Clock In Desk Simulator */}
                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Virtual Attendance Terminal & Shift Status</div>
                        <div className="text-xs text-slate-500">
                          {isClockedIn
                            ? `Clocked in at ${clockTime} · Shift in progress`
                            : 'Currently not clocked in · Standard 9:30 AM to 6:30 PM IST shift'}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleClockToggle}
                      className={`px-5 py-2.5 text-xs font-semibold rounded-lg shadow-xs transition-all ${
                        isClockedIn
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      }`}
                    >
                      {isClockedIn ? 'Clock Out Now' : 'Clock In Now (Web Punch)'}
                    </button>
                  </div>

                  {/* 4 Stat KPI cards (Directly from Screenshot 1) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                        <span>COMPANY ROSTER</span>
                        <Users className="w-4 h-4 text-emerald-700" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono-numbers">
                        {MOCK_ROSTER.length} Staff
                      </div>
                      <div className="text-[11px] text-slate-500">
                        1 HR Staff · {MOCK_ROSTER.length - 1} Active Employees
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                        <span>ATTENDANCE TODAY</span>
                        <Clock className="w-4 h-4 text-emerald-700" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono-numbers">
                        {isClockedIn ? '1 Present' : '0 Checked In'}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Biometric + Web punch sync
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                        <span>PENDING APPROVALS</span>
                        <Shield className="w-4 h-4 text-emerald-700" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 font-mono-numbers">
                        0 Pending
                      </div>
                      <div className="text-[11px] text-slate-500">
                        0 Leaves · 0 Claims pending review
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                        <span>STATUTORY STATUS</span>
                        <CheckCircle className="w-4 h-4 text-emerald-700" />
                      </div>
                      <div className="text-2xl font-bold text-emerald-700 font-mono-numbers">
                        100% Filed
                      </div>
                      <div className="text-[11px] text-slate-500">
                        EPF, ESIC & TDS cleared
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Indian Holidays & Corporate Assets (from Screenshot 1) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-700" />
                          <span>Upcoming Indian Holidays (Mandatory Statutory Calendar)</span>
                        </div>
                        <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          Punjab / Central
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                          <div>
                            <div className="font-bold text-slate-800">Guru Nanak Jayanti</div>
                            <div className="text-[11px] text-slate-500">Regional Gazette Holiday</div>
                          </div>
                          <span className="font-mono text-slate-700 font-semibold">24 Nov 2026</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                          <div>
                            <div className="font-bold text-slate-800">Christmas Day</div>
                            <div className="text-[11px] text-slate-500">National Gazette Holiday</div>
                          </div>
                          <span className="font-mono text-slate-700 font-semibold">25 Dec 2026</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/70">
                          <div>
                            <div className="font-bold text-slate-800">Republic Day of India</div>
                            <div className="text-[11px] text-slate-500">Mandatory National Holiday</div>
                          </div>
                          <span className="font-mono text-slate-700 font-semibold">26 Jan 2027</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <Laptop className="w-4 h-4 text-emerald-700" />
                          <span>Corporate Assets & Hardware Logistics</span>
                        </div>
                        <span className="text-[11px] text-slate-500">MDM Enrolled</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                          <div className="font-semibold text-slate-900">End-to-End Laptop Procurement in India</div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            SnailHRA procures Apple MacBook Pros and Dell developer laptops locally with GST invoices, manages doorstep delivery across India, and enforces secure device retrieval upon exit.
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="text-slate-600">All Devices Encrypted</span>
                          <span className="text-emerald-700 font-semibold">BitLocker / FileVault Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

        {/* TAB 2: ORIGINAL SCREENSHOTS WALKTHROUGH WITH INTERACTIVE ZOOM */}
        {activeTab === 'screenshots' && (
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Screenshot 1 Card */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">1. System Administrator & Executive Dashboard</h3>
                    <p className="text-xs text-slate-400">Live operational instance: snail-hra.vercel.app</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScreenshotModalImage('/assets/aistudio/Screenshot_2026-11-10_at_7.19.36_PM_1191f81c.png')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>
                </div>

                <div
                  className="rounded-xl overflow-hidden border border-slate-600 relative group cursor-pointer"
                  onClick={() => setScreenshotModalImage('/assets/aistudio/Screenshot_2026-11-10_at_7.19.36_PM_1191f81c.png')}
                >
                  <img
                    src="/assets/aistudio/Screenshot_2026-11-10_at_7.19.36_PM_1191f81c.png"
                    alt="SnailHRA Executive Admin Dashboard"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-600">
                      Click to inspect full resolution
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-emerald-400">Key Production Modules Shown:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Multi-branch switcher (Ludhiana Desk, Delhi NCR, Bengaluru)</li>
                    <li>Live attendance punch terminal & instant shift status tracking</li>
                    <li>Consolidated company roster, pending leaves, and expense claim approvals</li>
                    <li>Gazetted Indian holiday calendar sync & employee milestones</li>
                  </ul>
                </div>
              </div>

              {/* Screenshot 2 Card */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">2. Employee Directory & Salary Breakdown Vault</h3>
                    <p className="text-xs text-slate-400">Live operational instance: snail-hra.vercel.app</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setScreenshotModalImage('/assets/aistudio/Screenshot_2026-11-10_at_7.20.10_PM_caf37bd0.png')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>
                </div>

                <div
                  className="rounded-xl overflow-hidden border border-slate-600 relative group cursor-pointer"
                  onClick={() => setScreenshotModalImage('/assets/aistudio/Screenshot_2026-11-10_at_7.20.10_PM_caf37bd0.png')}
                >
                  <img
                    src="/assets/aistudio/Screenshot_2026-11-10_at_7.20.10_PM_caf37bd0.png"
                    alt="SnailHRA Employee Directory & Salary Specs"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-600">
                      Click to inspect full resolution
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-emerald-400">Key Production Modules Shown:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Dynamic employee directory with search and active/probation filters</li>
                    <li>Precise Indian salary breakdown: Basic Salary, HRA Allowance, and Special Allowances</li>
                    <li>Official statutory compliance tags: PAN Number & EPFO UAN number linkage</li>
                    <li>Onboarding Document Checklist & Digital KYC Vault for seamless verification</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Full Screen Image Modal */}
      {screenshotModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setScreenshotModalImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] overflow-auto rounded-xl">
            <button
              onClick={() => setScreenshotModalImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-slate-900/80 text-white text-xs font-bold rounded-lg border border-slate-700 hover:bg-slate-900"
            >
              Close [ESC]
            </button>
            <img
              src={screenshotModalImage}
              alt="Full Resolution Screenshot"
              className="w-full h-auto rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
