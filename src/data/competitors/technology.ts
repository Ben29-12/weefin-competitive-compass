import { Competitor } from '../types';

export const technologyCompetitors: Competitor[] = [
  {
    id: "rimes",
    name: "Rimes",
    logo: "/lovable-uploads/7a00eae3-1dd4-40cf-bba3-53a130e598e5.png",
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
        type: "social_mentions",
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
    logo: "/lovable-uploads/a340d1eb-a93c-42cc-8935-3891aa7c9ee0.png",
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
        type: "people_signals",
        title: "Recruitment of a VP Engineering",
        description: "Former Microsoft technical manager joins the management team.",
        date: "2024-01-10",
        impact: "medium",
        source: "/sources/clarity-vp-engineering"
      }
    ]
  }
];
