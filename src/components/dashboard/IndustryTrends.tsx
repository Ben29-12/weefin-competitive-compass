
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { industryTrends } from "@/data/industryTrends";

export const IndustryTrends = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry Trends</CardTitle>
        <CardDescription>
          Major developments in the financial ESG sector
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {industryTrends.slice(0, 3).map(trend => (
            <div key={trend.id} className="border-b pb-3 last:border-0">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium">{trend.title}</div>
                <div className="text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  Impact: {trend.impactScore}%
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {trend.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {trend.categories.map(category => (
                  <span key={category} className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="text-right">
            <Link to="/trends" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              View all trends
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
