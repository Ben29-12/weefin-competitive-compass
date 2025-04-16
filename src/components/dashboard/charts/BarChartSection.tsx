
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
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              label={{ 
                value: 'Percentage (%)', 
                position: 'insideBottom', 
                offset: -10,
                style: { textAnchor: 'middle' } 
              }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              type="category"
              dataKey="name"
              width={150}
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
            {data.map((entry, index) => (
              <Bar 
                key={entry.name}
                dataKey="value" 
                fill={colors[index % colors.length]} 
                radius={[0, 4, 4, 0]}
                data={[entry]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
