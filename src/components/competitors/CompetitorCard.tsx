
import { Competitor } from "@/data/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Building, 
  MoreHorizontal,
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface CompetitorCardProps {
  competitor: Competitor & {
    filteredActivities: Competitor['recentActivity'];
  };
  activityFilter: string | null;
}

export function CompetitorCard({ competitor, activityFilter }: CompetitorCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-200"
    >
      <CardHeader className="bg-muted/30 pb-3 hover:bg-blue-50/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                {competitor.name}
              </CardTitle>
              <CardDescription>{competitor.headquartersLocation}</CardDescription>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-blue-50"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/competitor/${competitor.id}`}>
                  View full profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={competitor.website} target="_blank" rel="noopener noreferrer">
                  Visit website
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 border-b">
          <p className="text-sm text-muted-foreground mb-3">
            {competitor.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {competitor.keyProducts.map((product, index) => (
              <span key={index} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                {product}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="text-sm font-medium mb-3">
            Recent Activities 
            {activityFilter && ` - ${activityFilter}`}
          </div>
          {competitor.filteredActivities.length > 0 ? (
            <div className="space-y-3">
              {competitor.filteredActivities.slice(0, 3).map((activity) => (
                <div key={activity.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-sm">{activity.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <ActivityBadge type={activity.type} className="text-xs" />
                    {activity.impact && <ImpactBadge impact={activity.impact} className="text-xs" />}
                  </div>
                </div>
              ))}
              {competitor.filteredActivities.length > 3 && (
                <div className="text-right">
                  <Link 
                    to={`/competitor/${competitor.id}`} 
                    className="text-xs text-primary hover:underline inline-flex items-center"
                  >
                    See {competitor.filteredActivities.length - 3} more activities
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4 text-sm text-muted-foreground">
              No matching activities found.
            </div>
          )}
        </div>

        <div className="p-4 bg-muted/30 border-t">
          <Link 
            to={`/competitor/${competitor.id}`} 
            className="text-sm text-primary font-medium hover:underline flex items-center"
          >
            View full profile
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
