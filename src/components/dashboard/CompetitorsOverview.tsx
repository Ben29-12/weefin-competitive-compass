
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { competitors } from "@/data/competitors";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const CompetitorsOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitors Overview</CardTitle>
        <CardDescription>
          Major players in our competitive ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {competitors.map((competitor) => (
            <div key={competitor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={competitor.logo} alt={`${competitor.name} logo`} />
                  <AvatarFallback>{competitor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{competitor.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {competitor.headquartersLocation}
                  </div>
                </div>
              </div>
              <div className="text-sm line-clamp-2 mb-3 text-muted-foreground">
                {competitor.description}
              </div>
              <div className="mb-3">
                <div className="text-xs text-muted-foreground mb-1">Key products:</div>
                <div className="flex flex-wrap gap-1">
                  {competitor.keyProducts.slice(0, 2).map((product) => (
                    <span key={product} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                      {product}
                    </span>
                  ))}
                  {competitor.keyProducts.length > 2 && (
                    <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                      +{competitor.keyProducts.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Link 
                  to={`/competitor/${competitor.id}`} 
                  className="text-sm text-primary font-medium hover:underline flex items-center"
                >
                  View full profile
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
