
import { Competitor } from '../types';

export const analyticsCompetitors: Competitor[] = [
  {
    id: "sp-market-intelligence",
    name: "S&P Market Intelligence",
    logo: "/lovable-uploads/5233d3ea-9dea-4763-bc66-23358e92b575.png",
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
        type: "social_mentions",
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
      },
      {
        id: "sp-4",
        type: "marketing",
        title: "Global ESG Conference Sponsorship",
        description: "Major sponsor of the 2024 Global ESG Investment Summit.",
        date: "2024-03-15",
        impact: "high",
        source: "/sources/sp-conference"
      },
      {
        id: "sp-5",
        type: "technologies",
        title: "AI Integration in ESG Scoring",
        description: "Implementation of machine learning for more accurate ESG assessments.",
        date: "2024-02-28",
        impact: "high",
        source: "/sources/sp-ai-integration"
      },
      {
        id: "sp-6",
        type: "pricing",
        title: "New Tiered Pricing Model",
        description: "Introduction of flexible pricing options for different market segments.",
        date: "2024-03-01",
        impact: "medium",
        source: "/sources/sp-pricing"
      }
    ]
  },
  {
    id: "factset",
    name: "FactSet",
    logo: "/lovable-uploads/9b03414d-30e9-4f49-be0c-903662832abe.png",
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
        type: "people_signals",
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
      },
      {
        id: "factset-4",
        type: "marketing",
        title: "ESG Integration Webinar Series",
        description: "Launch of educational webinar series for investment professionals.",
        date: "2024-03-05",
        impact: "medium",
        source: "/sources/factset-webinar"
      },
      {
        id: "factset-5",
        type: "technologies",
        title: "Cloud Infrastructure Upgrade",
        description: "Major enhancement of cloud-based data processing capabilities.",
        date: "2024-02-10",
        impact: "high",
        source: "/sources/factset-cloud"
      },
      {
        id: "factset-6",
        type: "acquisition",
        title: "Acquisition of ESG Data Provider",
        description: "Strategic acquisition to enhance ESG data coverage.",
        date: "2024-01-20",
        impact: "high",
        source: "/sources/factset-acquisition"
      }
    ]
  }
];
