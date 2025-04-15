import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { competitors } from "@/data/competitors";
import { news } from "@/data/news";

export const RecentNews = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent News</CardTitle>
        <CardDescription>
          Latest articles relevant to our monitoring
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news.slice(0, 4).map(item => (
            <div key={item.id} className="border-b pb-3 last:border-0">
              <div className="font-medium mb-1">{item.title}</div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">{item.source}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(item.date).toLocaleDateString('en-US')}
                </div>
              </div>
              {item.relatedCompetitors.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.relatedCompetitors.map(id => {
                    const comp = competitors.find(c => c.id === id);
                    return comp ? (
                      <span key={id} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {comp.name}
                      </span>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          ))}
          <div className="text-right">
            <Link to="/news" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              View all news
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
