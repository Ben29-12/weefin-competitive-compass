
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { ArrowUpRight, Filter } from "lucide-react";
import { competitors } from "@/data/mockData";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export const RecentActivities = () => {
  const [activityFilter, setActivityFilter] = useState<string>("all");

  // Get all activity types for the filter options
  const activityTypes = Array.from(
    new Set(
      competitors.flatMap(competitor => 
        competitor.recentActivity.map(activity => activity.type)
      )
    )
  );

  // Get latest activities across all competitors
  const allActivities = competitors
    .flatMap(competitor => 
      competitor.recentActivity.map(activity => ({
        ...activity,
        competitorId: competitor.id,
        competitorName: competitor.name
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Apply the filter
  const recentActivities = activityFilter === "all" 
    ? allActivities.slice(0, 5)
    : allActivities
        .filter(activity => activity.type === activityFilter)
        .slice(0, 5);

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Competitor Activities</CardTitle>
            <CardDescription>
              Latest actions and significant developments
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select
              value={activityFilter}
              onValueChange={setActivityFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                {activityTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity) => (
              <div key={activity.id} className="border-b pb-4 last:border-0">
                <div className="flex items-start justify-between mb-1">
                  <div className="font-medium">{activity.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString('en-US')}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {activity.description}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-primary">
                    {activity.competitorName}
                  </div>
                  <div className="flex space-x-2">
                    <ActivityBadge type={activity.type} />
                    {activity.impact && <ImpactBadge impact={activity.impact} />}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No activities found for this filter.
            </div>
          )}
          <div className="text-right">
            <Link to="/competitors" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              View all activities
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
