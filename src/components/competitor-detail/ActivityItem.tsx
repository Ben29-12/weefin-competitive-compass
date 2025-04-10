
import { CompetitorActivity } from "@/data/types";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";

interface ActivityItemProps {
  activity: CompetitorActivity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="font-medium">{activity.title}</div>
        <div className="text-sm text-muted-foreground">
          {new Date(activity.date).toLocaleDateString('en-US')}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">
        {activity.description}
      </p>
      <div className="flex items-center justify-between">
        <ActivityBadge type={activity.type} />
        {activity.impact && <ImpactBadge impact={activity.impact} />}
      </div>
    </div>
  );
}
