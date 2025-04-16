
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChartSection } from "./charts/BarChartSection";

// Original grouped data
const groupedData = [
  { name: "ESG Media", value: 25, sources: ["ESG Investor", "ESG Today", "Net Zero Investor", "KnowESG"] },
  { name: "Financial Press", value: 20, sources: ["Financial Times", "Investment Week", "Responsible Investor"] },
  { name: "Professional Data", value: 15, sources: ["Pitchbook", "Crunchbase"] },
  { name: "Industry Organizations", value: 15, sources: ["UKSIF", "Innovate Finance", "The Investment Association"] },
  { name: "Company Sources", value: 15, sources: ["Company Websites", "Company Social Media"] },
  { name: "LinkedIn", value: 10, sources: ["LinkedIn Company Pages", "LinkedIn Posts"] }
];

// Flatten the data to show individual sources
const flattenedData = groupedData.flatMap(group => 
  group.sources.map(source => {
    // Distribute the group's value evenly among its sources
    const sourceValue = Math.round(group.value / group.sources.length);
    return {
      name: source,
      value: sourceValue,
      category: group.name
    };
  })
);

// Sort the data by value in descending order
const data = flattenedData.sort((a, b) => b.value - a.value);

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#10B981', '#6366F1', 
                '#EC4899', '#F59E0B', '#14B8A6', '#8B5CF6', '#D946EF', '#F97316', 
                '#0EA5E9', '#10B981', '#6366F1', '#EC4899', '#F59E0B'];

export const SourcesDistribution = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Sources Distribution</CardTitle>
        <CardDescription>
          Breakdown of individual data sources used in competitor analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center py-2">
        <BarChartSection data={data} colors={COLORS} />
      </CardContent>
    </Card>
  );
};
