
import { Competitor } from "@/data/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityItem } from "./ActivityItem";
import { activityTypes } from "@/data/constants";

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
          <TabsList className="mb-4 inline-flex w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            {activityTypes.map(type => (
              <TabsTrigger key={type.value} value={type.value}>
                {type.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
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
