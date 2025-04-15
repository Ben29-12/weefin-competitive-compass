
import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface PieChartSectionProps {
  data: Array<{
    name: string;
    value: number;
    sources: string[];
  }>;
  colors: string[];
}

export const PieChartSection = ({ data, colors }: PieChartSectionProps) => {
  return (
    <div className="w-3/5">
      <ChartContainer config={{}} className="w-full h-52">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={60}
            paddingAngle={1}
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
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
    </div>
  );
};
