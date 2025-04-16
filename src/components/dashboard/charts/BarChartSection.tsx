
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface BarChartSectionProps {
  data: Array<{
    name: string;
    value: number;
    category?: string;
  }>;
  colors: string[];
}

export const BarChartSection = ({ data, colors }: BarChartSectionProps) => {
  return (
    <div className="w-full h-[400px]">
      <ChartContainer config={{}} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              dataKey="name"
              tick={{ fontSize: 12, textAnchor: 'end', transform: "rotate(-45)" }}
              height={80}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              label={{ 
                value: 'Percentage (%)', 
                position: 'insideLeft', 
                angle: -90,
                style: { textAnchor: 'middle' },
                offset: 0
              }}
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
                        {data.category && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Category: {data.category}
                          </p>
                        )}
                      </div>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="value" 
              fill={colors[0]} 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
