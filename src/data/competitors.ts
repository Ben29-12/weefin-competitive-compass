import { Competitor } from './types';

export const competitors: Competitor[] = [
  {
    id: "jpm-fusion",
    name: "JPM Fusion Sustainable Investment Data Solutions",
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
        impact: "high",
        source: "/sources/jpm-esg-insight"
      },
      {
        id: "jpm-2",
        type: "partnership",
        title: "Partnership with ClimateSync",
        description: "JPM partners with ClimateSync to integrate advanced climate data.",
        date: "2024-02-10",
        impact: "medium",
        source: "/sources/jpm-climate-sync"
      },
      {
        id: "jpm-3",
        type: "recruitment",
        title: "Recruitment of a new Chief Data Officer",
        description: "Former Google data director joins the management team.",
        date: "2024-01-22",
        impact: "medium",
        source: "/sources/jpm-cdo-recruitment"
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
        impact: "high",
        source: "/sources/bloomberg-esg-pricing"
      },
      {
        id: "bloomberg-2",
        type: "acquisition",
        title: "Acquisition of GreenData Solutions",
        description: "$78M acquisition of an environmental data specialist.",
        date: "2024-02-15",
        impact: "high",
        source: "/sources/bloomberg-esg-acquisition"
      },
      {
        id: "bloomberg-3",
        type: "client",
        title: "New client: Banque Nationale de Paris",
        description: "Major contract signed for the implementation of their complete ESG suite.",
        date: "2024-01-05",
        impact: "medium",
        source: "/sources/bloomberg-esg-client"
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
        impact: "medium",
        source: "/sources/sp-climate-analytics"
      },
      {
        id: "sp-2",
        type: "social",
        title: "LinkedIn Campaign on ESG Adoption",
        description: "Series of widely shared posts on the importance of ESG in the financial sector.",
        date: "2024-02-18",
        impact: "low",
        source: "/sources/sp-social-campaign"
      },
      {
        id: "sp-3",
        type: "partnership",
        title: "Partnership with SustainTech",
        description: "Collaboration to develop solutions dedicated to SMEs.",
        date: "2024-01-30",
        impact: "medium",
        source: "/sources/sp-partnership"
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
        impact: "medium",
        source: "/sources/factset-esg-navigator"
      },
      {
        id: "factset-2",
        type: "recruitment",
        title: "Expansion of the ESG team",
        description: "Recruitment of 15 ESG analysts in European offices.",
        date: "2024-02-28",
        impact: "medium",
        source: "/sources/factset-esg-recruitment"
      },
      {
        id: "factset-3",
        type: "client",
        title: "New client: Amundi Asset Management",
        description: "One of the largest European asset managers adopts their ESG platform.",
        date: "2024-01-15",
        impact: "high",
        source: "/sources/factset-esg-client"
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
        impact: "high",
        source: "/sources/rimes-esg-core"
      },
      {
        id: "rimes-2",
        type: "partnership",
        title: "Alliance with DataVendor",
        description: "Partnership to enrich their ESG data coverage in emerging markets.",
        date: "2024-02-22",
        impact: "medium",
        source: "/sources/rimes-datavendor-partnership"
      },
      {
        id: "rimes-3",
        type: "social",
        title: "Webinar on SFDR regulation",
        description: "Highly followed online event on the implications of the new regulation.",
        date: "2024-01-25",
        impact: "low",
        source: "/sources/rimes-sfdr-webinar"
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
        impact: "high",
        source: "/sources/clarity-asset-owners"
      },
      {
        id: "clarity-2",
        type: "acquisition",
        title: "Acquisition of GreenMetrics",
        description: "Purchase of a startup specializing in carbon footprint measurement.",
        date: "2024-02-05",
        impact: "medium",
        source: "/sources/clarity-greenmetrics"
      },
      {
        id: "clarity-3",
        type: "recruitment",
        title: "Recruitment of a VP Engineering",
        description: "Former Microsoft technical manager joins the management team.",
        date: "2024-01-10",
        impact: "medium",
        source: "/sources/clarity-vp-engineering"
      }
    ]
  }
];
