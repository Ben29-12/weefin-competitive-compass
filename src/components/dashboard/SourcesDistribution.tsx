
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChartSection } from "./charts/BarChartSection";

const data = [
  { name: "ESG Media", value: 25, sources: ["ESG Investor", "ESG Today", "Net Zero Investor", "KnowESG"] },
  { name: "Financial Press", value: 20, sources: ["Financial Times", "Investment Week", "Responsible Investor"] },
  { name: "Professional Data", value: 15, sources: ["Pitchbook", "Crunchbase"] },
  { name: "Industry Organizations", value: 15, sources: ["UKSIF", "Innovate Finance", "The Investment Association"] },
  { name: "Company Sources", value: 15, sources: ["Company Websites", "Company Social Media"] },
  { name: "LinkedIn", value: 10, sources: ["LinkedIn Company Pages", "LinkedIn Posts"] }
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#10B981', '#6366F1'];

export const SourcesDistribution = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Sources Distribution</CardTitle>
        <CardDescription>
          Breakdown of information sources used in competitor analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center py-2">
        <BarChartSection data={data} colors={COLORS} />
      </CardContent>
    </Card>
  );
};
