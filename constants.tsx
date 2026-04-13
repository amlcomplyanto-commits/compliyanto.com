
import React from 'react';
import { Shield, Search, FileText, Globe, Users, TrendingUp, ClipboardCheck, LayoutGrid } from 'lucide-react';
import { Service } from './types';

// Central Brand Settings
export const BRAND_COLOR = '#2563eb'; 

export const SERVICES: Service[] = [
  {
    id: 'aml-risk-assessment',
    title: 'AML Risk Assessments & Reports',
    description: 'We take a deep dive into your operations to build a clear, actionable picture of your risk exposure.',
    icon: 'Shield'
  },
  {
    id: 'msb-compliance-consulting',
    title: 'MSB Compliance Consulting',
    description: 'We help you build and manage compliance programs that actually work in the real world.',
    icon: 'Globe'
  },
  {
    id: 'suspicious-activity-investigation',
    title: 'Suspicious Activity Investigation',
    description: 'We help you dig into the details, clear false alarms, and write clear, accurate SARs.',
    icon: 'Search'
  },
  {
    id: 'remittance-cross-border',
    title: 'Remittance & Cross-Border Compliance',
    description: 'We specialize in managing the unique risks that come with moving money internationally.',
    icon: 'Globe'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8 text-cyan-400" />,
  Users: <Users className="w-8 h-8 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-cyan-400" />,
  Globe: <Globe className="w-8 h-8 text-cyan-400" />,
  Search: <Search className="w-8 h-8 text-cyan-400" />,
  FileText: <FileText className="w-8 h-8 text-cyan-400" />,
  ClipboardCheck: <ClipboardCheck className="w-8 h-8 text-cyan-400" />,
  LayoutGrid: <LayoutGrid className="w-8 h-8 text-cyan-400" />
};
