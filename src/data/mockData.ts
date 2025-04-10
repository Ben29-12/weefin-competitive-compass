
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
    description: "Leader global dans les solutions ESG pour les institutions financières avec une large gamme de produits de données et d'analyse.",
    website: "https://example.com/jpm",
    founded: 2012,
    headquartersLocation: "New York, USA",
    employeeCount: "1000-5000",
    keyProducts: ["Portfolio Analytics", "ESG Data Feed", "Risk Assessment Tools"],
    recentActivity: [
      {
        id: "jpm-1",
        type: "product",
        title: "Lancement de JPM ESG Insight 3.0",
        description: "Nouvelle version de leur plateforme phare avec capacités avancées d'analyse et reporting.",
        date: "2024-03-15",
        impact: "high"
      },
      {
        id: "jpm-2",
        type: "partnership",
        title: "Partenariat avec ClimateSync",
        description: "JPM s'associe avec ClimateSync pour intégrer des données climatiques avancées.",
        date: "2024-02-10",
        impact: "medium"
      },
      {
        id: "jpm-3",
        type: "recruitment",
        title: "Recrutement d'un nouveau Chief Data Officer",
        description: "Ancien directeur de données de Google rejoint l'équipe de direction.",
        date: "2024-01-22",
        impact: "medium"
      }
    ]
  },
  {
    id: "bloomberg-esg",
    name: "Bloomberg ESG",
    logo: "placeholder.svg",
    description: "Fournisseur de premier plan de données ESG intégrées au terminal Bloomberg et de solutions analytiques dédiées.",
    website: "https://example.com/bloomberg",
    founded: 2009,
    headquartersLocation: "New York, USA",
    employeeCount: "5000+",
    keyProducts: ["ESG Data Integration", "Sustainability Metrics", "Climate Risk Analytics"],
    recentActivity: [
      {
        id: "bloomberg-1",
        type: "pricing",
        title: "Nouvelle structure tarifaire pour ESG Pro",
        description: "Augmentation de 15% du prix de leur offre premium avec modules supplémentaires en option.",
        date: "2024-03-01",
        impact: "high"
      },
      {
        id: "bloomberg-2",
        type: "acquisition",
        title: "Acquisition de GreenData Solutions",
        description: "Acquisition pour 78M$ d'un spécialiste en données environnementales.",
        date: "2024-02-15",
        impact: "high"
      },
      {
        id: "bloomberg-3",
        type: "client",
        title: "Nouveau client: Banque Nationale de Paris",
        description: "Contrat majeur signé pour l'implémentation de leur suite complète ESG.",
        date: "2024-01-05",
        impact: "medium"
      }
    ]
  },
  {
    id: "sp-market-intelligence",
    name: "S&P Market Intelligence",
    logo: "placeholder.svg",
    description: "Fournisseur majeur de données ESG, d'analyse et d'outils de reporting pour les acteurs financiers.",
    website: "https://example.com/sp",
    founded: 2005,
    headquartersLocation: "Londres, UK",
    employeeCount: "1000-5000",
    keyProducts: ["ESG Risk Assessment", "Corporate Sustainability Scorer", "Regulatory Compliance Suite"],
    recentActivity: [
      {
        id: "sp-1",
        type: "product",
        title: "Lancement de S&P Climate Analytics API",
        description: "Nouvelle API permettant l'intégration directe des données climatiques dans les systèmes clients.",
        date: "2024-03-20",
        impact: "medium"
      },
      {
        id: "sp-2",
        type: "social",
        title: "Campagne LinkedIn sur l'adoption des critères ESG",
        description: "Série de posts très partagés sur l'importance de l'ESG dans le secteur financier.",
        date: "2024-02-18",
        impact: "low"
      },
      {
        id: "sp-3",
        type: "partnership",
        title: "Partenariat avec SustainTech",
        description: "Collaboration pour développer des solutions dédiées aux PME.",
        date: "2024-01-30",
        impact: "medium"
      }
    ]
  },
  {
    id: "factset",
    name: "FactSet",
    logo: "placeholder.svg",
    description: "Plateforme complète d'analyse financière avec une offre ESG en croissance rapide.",
    website: "https://example.com/factset",
    founded: 1998,
    headquartersLocation: "Connecticut, USA",
    employeeCount: "1000-5000",
    keyProducts: ["Portfolio Impact Analysis", "ESG Navigator", "Sustainable Investment Tools"],
    recentActivity: [
      {
        id: "factset-1",
        type: "product",
        title: "Mise à jour majeure de ESG Navigator",
        description: "Intégration de données propriétaires et amélioration de l'interface utilisateur.",
        date: "2024-03-10",
        impact: "medium"
      },
      {
        id: "factset-2",
        type: "recruitment",
        title: "Expansion de l'équipe ESG",
        description: "Recrutement de 15 analystes ESG dans les bureaux européens.",
        date: "2024-02-28",
        impact: "medium"
      },
      {
        id: "factset-3",
        type: "client",
        title: "Nouveau client: Amundi Asset Management",
        description: "L'un des plus grands gestionnaires d'actifs européens adopte leur plateforme ESG.",
        date: "2024-01-15",
        impact: "high"
      }
    ]
  },
  {
    id: "rimes",
    name: "Rimes",
    logo: "placeholder.svg",
    description: "Spécialiste des données ESG et services managés pour l'industrie financière.",
    website: "https://example.com/rimes",
    founded: 2007,
    headquartersLocation: "Londres, UK",
    employeeCount: "500-1000",
    keyProducts: ["ESG Data Service", "Reporting Suite", "Benchmark Analytics"],
    recentActivity: [
      {
        id: "rimes-1",
        type: "pricing",
        title: "Nouveau modèle d'abonnement ESG Core",
        description: "Introduction d'une offre d'entrée de gamme à prix réduit pour les petites institutions.",
        date: "2024-03-05",
        impact: "high"
      },
      {
        id: "rimes-2",
        type: "partnership",
        title: "Alliance avec DataVendor",
        description: "Partenariat pour enrichir leur couverture de données ESG sur les marchés émergents.",
        date: "2024-02-22",
        impact: "medium"
      },
      {
        id: "rimes-3",
        type: "social",
        title: "Webinaire sur la réglementation SFDR",
        description: "Événement en ligne très suivi sur les implications de la nouvelle réglementation.",
        date: "2024-01-25",
        impact: "low"
      }
    ]
  },
  {
    id: "clarity-ai",
    name: "Clarity AI",
    logo: "placeholder.svg",
    description: "Plateforme technologique utilisant l'IA pour l'analyse et la mesure d'impact ESG.",
    website: "https://example.com/clarity",
    founded: 2017,
    headquartersLocation: "Madrid, Espagne",
    employeeCount: "100-500",
    keyProducts: ["Impact Analysis Platform", "AI ESG Scoring", "Sustainable Portfolio Construction"],
    recentActivity: [
      {
        id: "clarity-1",
        type: "product",
        title: "Lancement de Clarity AI for Asset Owners",
        description: "Nouvelle solution spécialement conçue pour les propriétaires d'actifs avec focus sur l'impact.",
        date: "2024-03-25",
        impact: "high"
      },
      {
        id: "clarity-2",
        type: "acquisition",
        title: "Acquisition de GreenMetrics",
        description: "Rachat d'une startup spécialisée dans la mesure d'empreinte carbone.",
        date: "2024-02-05",
        impact: "medium"
      },
      {
        id: "clarity-3",
        type: "recruitment",
        title: "Recrutement d'un VP Engineering",
        description: "Ancien responsable technique de Microsoft rejoint l'équipe de direction.",
        date: "2024-01-10",
        impact: "medium"
      }
    ]
  }
];

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "Bloomberg acquiert GreenData Solutions pour renforcer son offre ESG",
    source: "Financial Times",
    date: "2024-02-15",
    summary: "Bloomberg a annoncé aujourd'hui l'acquisition de GreenData Solutions pour 78 millions de dollars, renforçant considérablement sa capacité à fournir des données environnementales précises à ses clients.",
    url: "#",
    relatedCompetitors: ["bloomberg-esg"],
    categories: ["acquisition", "ESG data"]
  },
  {
    id: "news-2",
    title: "JPMorgan lance une nouvelle plateforme d'analyse ESG",
    source: "ESG Today",
    date: "2024-03-15",
    summary: "JPMorgan Chase a dévoilé aujourd'hui JPM ESG Insight 3.0, une refonte majeure de sa plateforme d'analyse ESG phare, intégrant de nouvelles fonctionnalités avancées de reporting et d'analyse.",
    url: "#",
    relatedCompetitors: ["jpm-fusion"],
    categories: ["product launch", "analytics"]
  },
  {
    id: "news-3",
    title: "S&P présente une nouvelle API Climat pour l'intégration de données ESG",
    source: "ESG Investor",
    date: "2024-03-20",
    summary: "S&P Market Intelligence a lancé une nouvelle API Climate Analytics pour permettre une intégration simplifiée des données climatiques dans les systèmes des institutions financières.",
    url: "#",
    relatedCompetitors: ["sp-market-intelligence"],
    categories: ["technology", "climate data"]
  },
  {
    id: "news-4",
    title: "Clarity AI lève 50 millions $ en série C",
    source: "Responsible Investor",
    date: "2024-03-18",
    summary: "La startup d'intelligence artificielle ESG Clarity AI a annoncé une levée de fonds de 50 millions de dollars pour accélérer son expansion mondiale et développer de nouvelles fonctionnalités d'IA.",
    url: "#",
    relatedCompetitors: ["clarity-ai"],
    categories: ["funding", "artificial intelligence"]
  },
  {
    id: "news-5",
    title: "Rimes introduit une offre ESG à prix réduit pour les petites institutions",
    source: "KnowESG",
    date: "2024-03-05",
    summary: "Rimes Technologies a lancé ESG Core, une nouvelle offre d'abonnement à prix réduit ciblant les petites institutions financières qui souhaitent intégrer des données ESG dans leurs processus.",
    url: "#",
    relatedCompetitors: ["rimes"],
    categories: ["pricing", "market access"]
  },
  {
    id: "news-6",
    title: "L'UE finalise les normes techniques pour SFDR",
    source: "ESG Dive",
    date: "2024-03-12",
    summary: "La Commission européenne a publié la version finale des normes techniques réglementaires pour le règlement SFDR, apportant davantage de clarté aux acteurs du marché financier.",
    url: "#",
    relatedCompetitors: [],
    categories: ["regulation", "SFDR"]
  }
];

export const industryTrends: IndustryTrend[] = [
  {
    id: "trend-1",
    title: "Intégration de l'IA dans l'analyse ESG",
    description: "Adoption croissante de l'intelligence artificielle et du machine learning pour améliorer la précision et la profondeur de l'analyse ESG, en particulier pour les données non structurées.",
    impactScore: 85,
    startDate: "2023-06-01",
    categories: ["technology", "artificial intelligence", "data analytics"],
    relatedCompetitors: ["clarity-ai", "bloomberg-esg"]
  },
  {
    id: "trend-2",
    title: "Standardisation des données ESG",
    description: "Mouvement vers une plus grande standardisation et comparabilité des données et métriques ESG, soutenu par les initiatives réglementaires comme SFDR et CSRD en Europe.",
    impactScore: 90,
    startDate: "2023-01-01",
    categories: ["regulation", "data standards", "reporting"],
    relatedCompetitors: ["sp-market-intelligence", "bloomberg-esg", "factset"]
  },
  {
    id: "trend-3",
    title: "Focus sur les données de biodiversité",
    description: "Intérêt croissant pour les données liées à la biodiversité et au capital naturel, dépassant les simples métriques climatiques et carbone.",
    impactScore: 75,
    startDate: "2023-08-01",
    categories: ["biodiversity", "natural capital", "environmental data"],
    relatedCompetitors: ["jpm-fusion", "clarity-ai"]
  },
  {
    id: "trend-4",
    title: "Consolidation du marché des fournisseurs de données ESG",
    description: "Vague d'acquisitions et de fusions parmi les fournisseurs de données ESG, avec les grandes institutions financières et fournisseurs de données acquérant des spécialistes ESG.",
    impactScore: 80,
    startDate: "2023-03-01",
    categories: ["market consolidation", "acquisition", "industry structure"],
    relatedCompetitors: ["bloomberg-esg", "sp-market-intelligence"]
  },
  {
    id: "trend-5",
    title: "Démocratisation des outils ESG",
    description: "Développement d'offres plus accessibles pour les petites institutions et gestionnaires de patrimoine, élargissant l'adoption des outils ESG au-delà des grands acteurs institutionnels.",
    impactScore: 70,
    startDate: "2023-10-01",
    categories: ["market access", "pricing", "technology adoption"],
    relatedCompetitors: ["rimes", "clarity-ai"]
  }
];

export const activityTypes = [
  { value: 'product', label: 'Produits & Services', color: 'bg-blue-100 text-blue-800' },
  { value: 'pricing', label: 'Tarification', color: 'bg-green-100 text-green-800' },
  { value: 'partnership', label: 'Partenariats', color: 'bg-purple-100 text-purple-800' },
  { value: 'acquisition', label: 'Acquisitions', color: 'bg-red-100 text-red-800' },
  { value: 'recruitment', label: 'Recrutements', color: 'bg-orange-100 text-orange-800' },
  { value: 'client', label: 'Clients', color: 'bg-teal-100 text-teal-800' },
  { value: 'social', label: 'Réseaux Sociaux', color: 'bg-indigo-100 text-indigo-800' }
];

export const impactColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800'
};
