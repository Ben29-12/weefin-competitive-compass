
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { ArrowUpRight } from "lucide-react";
import { competitors } from "@/data/mockData";

export const RecentActivities = () => {
  // Get latest activities across all competitors
  const recentActivities = competitors
    .flatMap(competitor => 
      competitor.recentActivity.map(activity => ({
        ...activity,
        competitorId: competitor.id,
        competitorName: competitor.name
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Competitor Activities</CardTitle>
        <CardDescription>
          Latest actions and significant developments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {recentActivities.map((activity) => (
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
          ))}
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
