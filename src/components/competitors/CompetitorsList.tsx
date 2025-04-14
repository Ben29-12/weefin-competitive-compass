
import { Competitor } from "@/data/types";
import { CompetitorCard } from "./CompetitorCard";

interface CompetitorsListProps {
  competitors: (Competitor & {
    filteredActivities: Competitor['recentActivity'];
  })[];
  activityFilter: string | null;
}

export function CompetitorsList({ competitors, activityFilter }: CompetitorsListProps) {
  if (competitors.length === 0) {
    return (
      <div className="col-span-2 text-center py-12">
        <h3 className="text-lg font-medium">No competitors found</h3>
        <p className="text-muted-foreground mt-1">Adjust your search criteria</p>
      </div>
    );
  }

  return (
    <>
      {competitors.map((competitor) => (
        <CompetitorCard 
          key={competitor.id} 
          competitor={competitor} 
          activityFilter={activityFilter} 
        />
      ))}
    </>
  );
}
