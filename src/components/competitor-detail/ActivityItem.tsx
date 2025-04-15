
import { CompetitorActivity } from "@/data/types";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { Link2, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ActivityItemProps {
  activity: CompetitorActivity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  // Map activity types to their likely data sources based on the dashboard diagram
  const getDataSource = (type: CompetitorActivity['type']) => {
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
          <Badge variant="outline" className="flex items-center gap-1">
            <Database className="h-3 w-3" />
            {getDataSource(activity.type)}
          </Badge>
        </div>
        {activity.source && (
          <Link 
            to={activity.source} 
            className="inline-flex items-center text-xs text-muted-foreground hover:text-primary"
          >
            <Link2 className="h-3 w-3 mr-1" />
            Source <span className="ml-1 italic">'{getDataSource(activity.type)}'</span>
          </Link>
        )}
      </div>
    </div>
  );
}
