
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { ArrowUpRight } from "lucide-react";
import { competitors } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RecentActivities = () => {
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
  
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Recent Competitor Activities</CardTitle>
          <CardDescription>
            Latest actions and significant developments
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4 inline-flex w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            {activityTypes.map(type => (
              <TabsTrigger key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="space-y-5">
            {allActivities.slice(0, 5).map((activity) => (
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
          </TabsContent>
          
          {activityTypes.map(type => (
            <TabsContent key={type} value={type} className="space-y-5">
              {allActivities
                .filter(activity => activity.type === type)
                .slice(0, 5)
                .map(activity => (
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
              {allActivities.filter(activity => activity.type === type).length === 0 && (
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
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
