
import { Competitor } from "@/data/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityItem } from "./ActivityItem";
import { activityTypes } from "@/data/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ActivitiesSectionProps {
  competitor: Competitor;
}

export function ActivitiesSection({ competitor }: ActivitiesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest notable developments at {competitor.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <ScrollArea className="w-full">
            <div className="pb-4">
              <TabsList className="flex w-max">
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
            </div>
          </ScrollArea>
          
          <TabsContent value="all" className="space-y-4">
            {competitor.recentActivity.map(activity => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </TabsContent>
          
          {activityTypes.map(type => (
            <TabsContent key={type.value} value={type.value} className="space-y-4">
              {competitor.recentActivity
                .filter(activity => activity.type === type.value)
                .map(activity => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              {competitor.recentActivity.filter(activity => activity.type === type.value).length === 0 && (
                <div className="text-center py-6 text-muted-foreground">
                  No {type.label} activities recorded.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
