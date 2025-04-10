
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

export const competitors: Competitor[] = [
  {
    id: "jpm-fusion",
    name: "JPM Fusion",
    logo: "placeholder.svg",
    description: "Global leader in ESG solutions for financial institutions with a wide range of data and analytics products.",
    website: "https://example.com/jpm",
    founded: 2012,
    headquartersLocation: "New York, USA",
    employeeCount: "1000-5000",
    keyProducts: ["Portfolio Analytics", "ESG Data Feed", "Risk Assessment Tools"],
    recentActivity: [
      {
        id: "jpm-1",
        type: "product",
        title: "Launch of JPM ESG Insight 3.0",
        description: "New version of their flagship platform with advanced analytics and reporting capabilities.",
        date: "2024-03-15",
        impact: "high"
      },
      {
        id: "jpm-2",
        type: "partnership",
        title: "Partnership with ClimateSync",
        description: "JPM partners with ClimateSync to integrate advanced climate data.",
        date: "2024-02-10",
        impact: "medium"
      },
      {
        id: "jpm-3",
        type: "recruitment",
        title: "Recruitment of a new Chief Data Officer",
        description: "Former Google data director joins the management team.",
        date: "2024-01-22",
        impact: "medium"
      }
    ]
  },
  {
    id: "bloomberg-esg",
    name: "Bloomberg ESG",
    logo: "placeholder.svg",
    description: "Leading provider of ESG data integrated with the Bloomberg terminal and dedicated analytical solutions.",
    website: "https://example.com/bloomberg",
    founded: 2009,
    headquartersLocation: "New York, USA",
    employeeCount: "5000+",
    keyProducts: ["ESG Data Integration", "Sustainability Metrics", "Climate Risk Analytics"],
    recentActivity: [
      {
        id: "bloomberg-1",
        type: "pricing",
        title: "New pricing structure for ESG Pro",
        description: "15% price increase for their premium offering with additional optional modules.",
        date: "2024-03-01",
        impact: "high"
      },
      {
        id: "bloomberg-2",
        type: "acquisition",
        title: "Acquisition of GreenData Solutions",
        description: "$78M acquisition of an environmental data specialist.",
        date: "2024-02-15",
        impact: "high"
      },
      {
        id: "bloomberg-3",
        type: "client",
        title: "New client: Banque Nationale de Paris",
        description: "Major contract signed for the implementation of their complete ESG suite.",
        date: "2024-01-05",
        impact: "medium"
      }
    ]
  },
  {
    id: "sp-market-intelligence",
    name: "S&P Market Intelligence",
    logo: "placeholder.svg",
    description: "Major provider of ESG data, analytics, and reporting tools for financial players.",
    website: "https://example.com/sp",
    founded: 2005,
    headquartersLocation: "London, UK",
    employeeCount: "1000-5000",
    keyProducts: ["ESG Risk Assessment", "Corporate Sustainability Scorer", "Regulatory Compliance Suite"],
    recentActivity: [
      {
        id: "sp-1",
        type: "product",
        title: "Launch of S&P Climate Analytics API",
        description: "New API allowing direct integration of climate data into client systems.",
        date: "2024-03-20",
        impact: "medium"
      },
      {
        id: "sp-2",
        type: "social",
        title: "LinkedIn Campaign on ESG Adoption",
        description: "Series of widely shared posts on the importance of ESG in the financial sector.",
        date: "2024-02-18",
        impact: "low"
      },
      {
        id: "sp-3",
        type: "partnership",
        title: "Partnership with SustainTech",
        description: "Collaboration to develop solutions dedicated to SMEs.",
        date: "2024-01-30",
        impact: "medium"
      }
    ]
  },
  {
    id: "factset",
    name: "FactSet",
    logo: "placeholder.svg",
    description: "Comprehensive financial analysis platform with a rapidly growing ESG offering.",
    website: "https://example.com/factset",
    founded: 1998,
    headquartersLocation: "Connecticut, USA",
    employeeCount: "1000-5000",
    keyProducts: ["Portfolio Impact Analysis", "ESG Navigator", "Sustainable Investment Tools"],
    recentActivity: [
      {
        id: "factset-1",
        type: "product",
        title: "Major update to ESG Navigator",
        description: "Integration of proprietary data and improvement of the user interface.",
        date: "2024-03-10",
        impact: "medium"
      },
      {
        id: "factset-2",
        type: "recruitment",
        title: "Expansion of the ESG team",
        description: "Recruitment of 15 ESG analysts in European offices.",
        date: "2024-02-28",
        impact: "medium"
      },
      {
        id: "factset-3",
        type: "client",
        title: "New client: Amundi Asset Management",
        description: "One of the largest European asset managers adopts their ESG platform.",
        date: "2024-01-15",
        impact: "high"
      }
    ]
  },
  {
    id: "rimes",
    name: "Rimes",
    logo: "placeholder.svg",
    description: "Specialist in ESG data and managed services for the financial industry.",
    website: "https://example.com/rimes",
    founded: 2007,
    headquartersLocation: "London, UK",
    employeeCount: "500-1000",
    keyProducts: ["ESG Data Service", "Reporting Suite", "Benchmark Analytics"],
    recentActivity: [
      {
        id: "rimes-1",
        type: "pricing",
        title: "New ESG Core subscription model",
        description: "Introduction of a lower-priced entry-level offering for small institutions.",
        date: "2024-03-05",
        impact: "high"
      },
      {
        id: "rimes-2",
        type: "partnership",
        title: "Alliance with DataVendor",
        description: "Partnership to enrich their ESG data coverage in emerging markets.",
        date: "2024-02-22",
        impact: "medium"
      },
      {
        id: "rimes-3",
        type: "social",
        title: "Webinar on SFDR regulation",
        description: "Highly followed online event on the implications of the new regulation.",
        date: "2024-01-25",
        impact: "low"
      }
    ]
  },
  {
    id: "clarity-ai",
    name: "Clarity AI",
    logo: "placeholder.svg",
    description: "Technological platform using AI for ESG impact analysis and measurement.",
    website: "https://example.com/clarity",
    founded: 2017,
    headquartersLocation: "Madrid, Spain",
    employeeCount: "100-500",
    keyProducts: ["Impact Analysis Platform", "AI ESG Scoring", "Sustainable Portfolio Construction"],
    recentActivity: [
      {
        id: "clarity-1",
        type: "product",
        title: "Launch of Clarity AI for Asset Owners",
        description: "New solution specially designed for asset owners with a focus on impact.",
        date: "2024-03-25",
        impact: "high"
      },
      {
        id: "clarity-2",
        type: "acquisition",
        title: "Acquisition of GreenMetrics",
        description: "Purchase of a startup specializing in carbon footprint measurement.",
        date: "2024-02-05",
        impact: "medium"
      },
      {
        id: "clarity-3",
        type: "recruitment",
        title: "Recruitment of a VP Engineering",
        description: "Former Microsoft technical manager joins the management team.",
        date: "2024-01-10",
        impact: "medium"
      }
    ]
  }
];

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "Bloomberg acquires GreenData Solutions to strengthen its ESG offering",
    source: "Financial Times",
    date: "2024-02-15",
    summary: "Bloomberg today announced the acquisition of GreenData Solutions for $78 million, significantly enhancing its ability to provide accurate environmental data to its clients.",
    url: "#",
    relatedCompetitors: ["bloomberg-esg"],
    categories: ["acquisition", "ESG data"]
  },
  {
    id: "news-2",
    title: "JPMorgan launches new ESG analysis platform",
    source: "ESG Today",
    date: "2024-03-15",
    summary: "JPMorgan Chase today unveiled JPM ESG Insight 3.0, a major overhaul of its flagship ESG analysis platform, integrating new advanced reporting and analysis features.",
    url: "#",
    relatedCompetitors: ["jpm-fusion"],
    categories: ["product launch", "analytics"]
  },
  {
    id: "news-3",
    title: "S&P introduces new Climate API for ESG data integration",
    source: "ESG Investor",
    date: "2024-03-20",
    summary: "S&P Market Intelligence has launched a new Climate Analytics API to enable simplified integration of climate data into financial institutions' systems.",
    url: "#",
    relatedCompetitors: ["sp-market-intelligence"],
    categories: ["technology", "climate data"]
  },
  {
    id: "news-4",
    title: "Clarity AI raises $50 million in Series C",
    source: "Responsible Investor",
    date: "2024-03-18",
    summary: "ESG artificial intelligence startup Clarity AI has announced a $50 million funding round to accelerate its global expansion and develop new AI features.",
    url: "#",
    relatedCompetitors: ["clarity-ai"],
    categories: ["funding", "artificial intelligence"]
  },
  {
    id: "news-5",
    title: "Rimes introduces discounted ESG offering for small institutions",
    source: "KnowESG",
    date: "2024-03-05",
    summary: "Rimes Technologies has launched ESG Core, a new discounted subscription offering targeting small financial institutions looking to integrate ESG data into their processes.",
    url: "#",
    relatedCompetitors: ["rimes"],
    categories: ["pricing", "market access"]
  },
  {
    id: "news-6",
    title: "EU finalizes technical standards for SFDR",
    source: "ESG Dive",
    date: "2024-03-12",
    summary: "The European Commission has published the final version of the regulatory technical standards for the SFDR regulation, bringing more clarity to financial market players.",
    url: "#",
    relatedCompetitors: [],
    categories: ["regulation", "SFDR"]
  }
];

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

export const activityTypes = [
  { value: 'product', label: 'Products & Services', color: 'bg-blue-100 text-blue-800' },
  { value: 'pricing', label: 'Pricing', color: 'bg-green-100 text-green-800' },
  { value: 'partnership', label: 'Partnerships', color: 'bg-purple-100 text-purple-800' },
  { value: 'acquisition', label: 'Acquisitions', color: 'bg-red-100 text-red-800' },
  { value: 'recruitment', label: 'Recruitment', color: 'bg-orange-100 text-orange-800' },
  { value: 'client', label: 'Clients', color: 'bg-teal-100 text-teal-800' },
  { value: 'social', label: 'Social Media', color: 'bg-indigo-100 text-indigo-800' }
];

export const impactColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800'
};
