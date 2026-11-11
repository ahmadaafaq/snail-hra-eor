export interface EmployeeRecord {
  id: string;
  name: string;
  code: string;
  role: string;
  department: string;
  location: string;
  status: 'Active' | 'Probation' | 'Suspended' | 'Resigned';
  avatar?: string;
  joinedDate: string;
  basicSalary: number;
  hraAllowance: number;
  otherAllowances: number;
  bankName: string;
  accountEnding: string;
  panNumber: string;
  uanNumber: string;
  emergencyContact: {
    name: string;
    phone: string;
    address: string;
  };
  kycCompleted: boolean;
  kycDocsCount: number;
}

export interface StatutoryComponent {
  name: string;
  authority: string;
  rateRule: string;
  employerContribution: number;
  employeeDeduction: number;
  description: string;
}

export interface UseCaseItem {
  id: string;
  tagline: string;
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
    company: string;
  };
}

export interface ComparisonRow {
  aspect: string;
  indianEntity: string;
  snailHraEor: string;
  advantage: 'snailhra' | 'neutral';
}

export interface CurrencyRate {
  code: string;
  symbol: string;
  name: string;
  inrMultiplier: number; // 1 Foreign Currency = X INR
}
