
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
        <div className="w-full flex justify-center">
          <img 
            src="/lovable-uploads/3610223b-33ab-4e49-8d4b-13d78ba366c2.png" 
            alt="Data Sources Distribution Chart"
            className="max-w-full h-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Distribution of signals by data source type
        </div>
      </CardContent>
    </Card>
  );
};
