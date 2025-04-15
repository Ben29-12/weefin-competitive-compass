
import { Competitor } from '../types';

export const financialCompetitors: Competitor[] = [
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
        type: "people_signals",
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
  }
];
