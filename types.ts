
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  comingSoon?: boolean;
}

export interface RiskAssessmentData {
  customerName: string;
  address?: string;
  phoneNumber?: string;
  walletAddress?: string;
  country: string;
  isPep: boolean;
}

export interface ListStatus {
  name: string;
  status: 'Clear' | 'Match Found' | 'Caution';
  details?: string;
}

export interface RiskResult {
  caseId: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  summary: string;
  recommendations: string[];
  screeningHits: string[]; // Keep for compatibility
  listVerification: ListStatus[]; // Detailed verification per list
  timestamp: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}