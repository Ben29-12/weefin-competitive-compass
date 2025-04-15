
import { Competitor } from '../types';

export const clarityAiCompetitor: Competitor = {
  id: "clarity-ai",
  name: "Clarity AI",
  logo: "/lovable-uploads/a340d1eb-a93c-42cc-8935-3891aa7c9ee0.png",
  description: "Specialized in ESG data solutions with advanced AI capabilities for sustainability measurement.",
  website: "https://example.com/clarity-ai",
  founded: 2017,
  headquartersLocation: "Madrid, Spain & New York, USA",
  employeeCount: "100-500",
  keyProducts: ["ESG Impact Assessment", "Sustainability Intelligence", "Regulatory Reporting"],
  recentActivity: [
    {
      id: "clarity-ps-1",
      type: "people_signals",
      title: "Sales Team Expansion",
      description: "Clarity AI is recruiting: 1 AE (France), 3 Senior AE (Spain), 1 Associate AE (UK).",
      date: "2025-02-15",
      impact: "medium",
      source: "/sources/clarity-sales-expansion"
    },
    {
      id: "clarity-ps-2",
      type: "people_signals",
      title: "Data Team Expansion",
      description: "Clarity AI is recruiting 6 people in Data (data science, data research, etc.).",
      date: "2025-04-10",
      impact: "high",
      source: "/sources/clarity-data-expansion"
    }
  ]
};
