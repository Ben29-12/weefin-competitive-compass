
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { industryTrends, competitors } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight, ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Trends() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Industry Trends</h1>
        <p className="text-muted-foreground mt-1">
          Analysis of major trends impacting the financial ESG sector
        </p>
      </div>

      <div className="grid gap-6">
        {industryTrends.map((trend) => (
          <Card key={trend.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    {trend.title}
                  </CardTitle>
                  <CardDescription>
                    Since {new Date(trend.startDate).toLocaleDateString('en-US')}
                  </CardDescription>
                </div>
                <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                  Impact: {trend.impactScore}%
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {trend.description}
              </p>
              
              <div>
                <div className="text-sm font-medium mb-2">Impact</div>
                <Progress value={trend.impactScore} className="h-2 mb-2" />
                <div className="grid grid-cols-3 text-xs text-muted-foreground">
                  <div>Low</div>
                  <div className="text-center">Moderate</div>
                  <div className="text-right">High</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Categories</div>
                <div className="flex flex-wrap gap-2">
                  {trend.categories.map((category) => (
                    <span 
                      key={category} 
                      className="px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {trend.relatedCompetitors.length > 0 && (
                <div>
                  <div className="text-sm font-medium mb-2">Related Competitors</div>
                  <div className="space-y-2">
                    {trend.relatedCompetitors.map((id) => {
                      const competitor = competitors.find(c => c.id === id);
                      if (!competitor) return null;
                      
                      return (
                        <Link 
                          key={id}
                          to={`/competitor/${id}`}
                          className="flex items-center justify-between p-2 border rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <div className="font-medium">{competitor.name}</div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <div className="pt-2">
                <button className="text-primary font-medium inline-flex items-center hover:underline">
                  View full analysis
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
