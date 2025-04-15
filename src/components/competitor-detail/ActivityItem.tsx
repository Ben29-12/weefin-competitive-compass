
import { CompetitorActivity } from "@/data/types";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="flex items-center gap-2">
          <ActivityBadge type={activity.type} />
          {activity.impact && <ImpactBadge impact={activity.impact} />}
        </div>
        {activity.source && (
          <Link 
            to={activity.source} 
            className="inline-flex items-center text-xs text-muted-foreground hover:text-primary"
          >
            <Link2 className="h-3 w-3 mr-1" />
            Source
          </Link>
        )}
      </div>
    </div>
  );
}
