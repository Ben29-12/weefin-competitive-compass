
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { ArrowUpRight, Link2, Database } from "lucide-react";
import { competitors } from "@/data/competitors";
import { activityTypes } from "@/data/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export const RecentActivities = () => {
  // Map activity types to their data sources
  const getDataSource = (type: string) => {
    switch (type) {
      case 'product':
        return 'Company Sources';
      case 'pricing':
        return 'Professional Data';
      case 'partnership':
        return 'Financial Press';
      case 'acquisition':
        return 'Financial Press';
      case 'people_signals':
        return 'LinkedIn';
      case 'client':
        return 'Industry Organizations';
      case 'social_mentions':
        return 'LinkedIn';
      case 'technologies':
        return 'Company Sources';
      case 'marketing':
        return 'ESG Media';
      default:
        return 'Other Sources';
    }
  };

  const activityTypeValues = activityTypes.map(type => type.value);

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
    <Card className="min-w-[600px]">
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
          <div className="relative w-full pb-4">
            <ScrollArea className="w-full">
              <TabsList className="flex w-max min-w-full">
                <TabsTrigger value="all" className="px-3 py-1.5 text-sm">All</TabsTrigger>
                {activityTypes.map(type => (
                  <TabsTrigger 
                    key={type.value} 
                    value={type.value}
                    className="px-3 py-1.5 text-sm whitespace-nowrap"
                  >
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          
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
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-2">
                      <ActivityBadge type={activity.type} />
                      {activity.impact && <ImpactBadge impact={activity.impact} />}
                    </div>
                    {activity.source && (
                      <Link 
                        to={activity.source} 
                        className="inline-flex items-center text-xs text-muted-foreground hover:text-primary ml-2"
                      >
                        <Link2 className="h-3 w-3 mr-1" />
                        Source <span className="ml-1 italic">'{getDataSource(activity.type)}'</span>
                      </Link>
                    )}
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
          
          {activityTypeValues.map(typeValue => (
            <TabsContent key={typeValue} value={typeValue} className="space-y-5">
              {allActivities
                .filter(activity => activity.type === typeValue)
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
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-2">
                          <ActivityBadge type={activity.type} />
                          {activity.impact && <ImpactBadge impact={activity.impact} />}
                        </div>
                        {activity.source && (
                          <Link 
                            to={activity.source} 
                            className="inline-flex items-center text-xs text-muted-foreground hover:text-primary ml-2"
                          >
                            <Link2 className="h-3 w-3 mr-1" />
                            Source <span className="ml-1 italic">'{getDataSource(activity.type)}'</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              {allActivities.filter(activity => activity.type === typeValue).length === 0 && (
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

