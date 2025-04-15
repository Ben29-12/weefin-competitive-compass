import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { Globe, Newspaper, Database, GlassWater, FileText, Linkedin } from "lucide-react";

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
      <CardContent className="flex flex-col items-center">
        <div className="w-full">
          <ChartContainer config={{}} className="w-full">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <ChartTooltipContent
                        active={active}
                        payload={payload}
                        label={data.name}
                        className="bg-white p-2 rounded-lg shadow-lg border"
                      >
                        <div className="p-2">
                          <p className="font-medium">{data.name}</p>
                          <p className="text-sm text-muted-foreground">{data.value}% of sources</p>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {data.sources.join(", ")}
                          </div>
                        </div>
                      </ChartTooltipContent>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ChartContainer>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
            {data.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
