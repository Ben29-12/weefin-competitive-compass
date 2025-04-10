
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, BarChart, LineChart, Clock } from "lucide-react";

export default function Industry() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Industry Analysis</h1>
        <p className="text-muted-foreground mt-1">
          Overview of the financial ESG landscape and market dynamics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Market Size</CardTitle>
            <CardDescription>Global ESG Solutions Market</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">$15.6B</div>
            <div className="text-sm text-muted-foreground">
              2024 Estimate
            </div>
            <div className="flex items-center space-x-1 text-emerald-600 text-sm mt-2">
              <span className="font-medium">+18.4%</span>
              <span>vs. previous year</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Expected Growth</CardTitle>
            <CardDescription>5-year CAGR</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">16.8%</div>
            <div className="text-sm text-muted-foreground">
              2024-2029
            </div>
            <div className="h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <div>Low estimate: 12.5%</div>
              <div>High estimate: 22.3%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Regulation</CardTitle>
            <CardDescription>Regulatory Impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">High</div>
            <div className="text-sm text-muted-foreground">
              Last update: March 2024
            </div>
            <div className="flex items-center space-x-1 text-amber-600 text-sm mt-2">
              <Clock className="h-4 w-4" />
              <span>New EU guidelines expected Q3 2024</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Market Share</CardTitle>
              <PieChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardDescription>
              Estimated market distribution for ESG solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Market share chart (placeholder)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Growth by Segment</CardTitle>
              <BarChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <CardDescription>
              Growth rates by ESG solution type
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Growth by segment chart (placeholder)
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Investment Trends</CardTitle>
            <LineChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardDescription>
            Investment flows in ESG technologies (2018-2024)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            Investment trends chart (placeholder)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market Segments</CardTitle>
          <CardDescription>
            Key ESG solution categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "ESG Data", growth: 22.4, description: "Collection and provision of raw ESG data" },
              { name: "Analysis & Scoring", growth: 19.8, description: "ESG evaluation and rating solutions" },
              { name: "Reporting & Compliance", growth: 25.6, description: "Tools for regulatory reporting" },
              { name: "Portfolio Integration", growth: 18.2, description: "ESG integration solutions for asset management" },
              { name: "Impact Measurement", growth: 14.5, description: "Impact and footprint measurement tools" },
              { name: "Risk Management", growth: 17.3, description: "ESG risk management solutions" },
            ].map((segment, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="font-medium mb-1">{segment.name}</div>
                <p className="text-sm text-muted-foreground mb-2">{segment.description}</p>
                <div className="flex items-center space-x-1 text-emerald-600 text-sm">
                  <span className="font-medium">+{segment.growth}%</span>
                  <span>CAGR</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
