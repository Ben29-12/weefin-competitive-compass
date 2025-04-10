
import { IndustryTrend } from './types';

export const industryTrends: IndustryTrend[] = [
  {
    id: "trend-1",
    title: "AI Integration in ESG Analysis",
    description: "Growing adoption of artificial intelligence and machine learning to improve the accuracy and depth of ESG analysis, particularly for unstructured data.",
    impactScore: 85,
    startDate: "2023-06-01",
    categories: ["technology", "artificial intelligence", "data analytics"],
    relatedCompetitors: ["clarity-ai", "bloomberg-esg"]
  },
  {
    id: "trend-2",
    title: "ESG Data Standardization",
    description: "Movement towards greater standardization and comparability of ESG data and metrics, supported by regulatory initiatives such as SFDR and CSRD in Europe.",
    impactScore: 90,
    startDate: "2023-01-01",
    categories: ["regulation", "data standards", "reporting"],
    relatedCompetitors: ["sp-market-intelligence", "bloomberg-esg", "factset"]
  },
  {
    id: "trend-3",
    title: "Focus on Biodiversity Data",
    description: "Growing interest in data related to biodiversity and natural capital, going beyond simple climate and carbon metrics.",
    impactScore: 75,
    startDate: "2023-08-01",
    categories: ["biodiversity", "natural capital", "environmental data"],
    relatedCompetitors: ["jpm-fusion", "clarity-ai"]
  },
  {
    id: "trend-4",
    title: "ESG Data Provider Market Consolidation",
    description: "Wave of acquisitions and mergers among ESG data providers, with large financial institutions and data providers acquiring ESG specialists.",
    impactScore: 80,
    startDate: "2023-03-01",
    categories: ["market consolidation", "acquisition", "industry structure"],
    relatedCompetitors: ["bloomberg-esg", "sp-market-intelligence"]
  },
  {
    id: "trend-5",
    title: "Democratization of ESG Tools",
    description: "Development of more accessible offerings for small institutions and wealth managers, expanding the adoption of ESG tools beyond large institutional players.",
    impactScore: 70,
    startDate: "2023-10-01",
    categories: ["market access", "pricing", "technology adoption"],
    relatedCompetitors: ["rimes", "clarity-ai"]
  }
];
