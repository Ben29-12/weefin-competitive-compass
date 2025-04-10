
import { activityTypes } from "@/data/constants";

interface ActivityBadgeProps {
  type: string;
  className?: string;
}

export function ActivityBadge({ type, className = "" }: ActivityBadgeProps) {
  const activityType = activityTypes.find(a => a.value === type);
  
  if (!activityType) return null;
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activityType.color} ${className}`}>
      {activityType.label}
    </span>
  );
}
