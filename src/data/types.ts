
export interface Competitor {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  founded: number;
  headquartersLocation: string;
  employeeCount: string;
  keyProducts: string[];
  recentActivity: CompetitorActivity[];
}

export interface CompetitorActivity {
  id: string;
  type: 'product' | 'pricing' | 'partnership' | 'acquisition' | 'recruitment' | 'client' | 'social';
  title: string;
  description: string;
  date: string;
  source?: string;
  impact?: 'low' | 'medium' | 'high';
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  relatedCompetitors: string[];
  categories: string[];
}

export interface IndustryTrend {
  id: string;
  title: string;
  description: string;
  impactScore: number;
  startDate: string;
  categories: string[];
  relatedCompetitors: string[];
}

export type ActivityType = {
  value: 'product' | 'pricing' | 'partnership' | 'acquisition' | 'recruitment' | 'client' | 'social';
  label: string;
  color: string;
}

export type ImpactLevel = 'low' | 'medium' | 'high';

export type ImpactColors = {
  [key in ImpactLevel]: string;
}
