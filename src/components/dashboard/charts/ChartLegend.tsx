
interface ChartLegendProps {
  data: Array<{
    name: string;
    value: number;
    sources: string[];
  }>;
  colors: string[];
}

export const ChartLegend = ({ data, colors }: ChartLegendProps) => {
  return (
    <div className="w-2/5 flex flex-col gap-1">
      {data.map((item, index) => (
        <div key={item.name} className="flex items-center gap-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors[index % colors.length] }}
          />
          <div className="flex flex-col">
            <span className="text-xs text-foreground">{item.name}</span>
            <span className="text-[0.6rem] text-muted-foreground">{item.value}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};
