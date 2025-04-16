
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface BarChartSectionProps {
  data: Array<{
    name: string;
    value: number;
    sources: string[];
  }>;
  colors: string[];
}

export const BarChartSection = ({ data, colors }: BarChartSectionProps) => {
  return (
    <div className="w-full h-64">
      <ChartContainer config={{}} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={70}
              tick={{ fontSize: 12 }} 
            />
            <YAxis 
              label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
              tick={{ fontSize: 12 }}
            />
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
            {data.map((entry, index) => (
              <Bar 
                key={entry.name}
                dataKey="value" 
                stackId="a"
                fill={colors[index % colors.length]} 
                radius={[4, 4, 0, 0]}
                data={[entry]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
