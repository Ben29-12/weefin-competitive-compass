
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";
import { SourcesDistribution } from "@/components/dashboard/SourcesDistribution";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <div className="grid gap-6 md:grid-cols-2">
        <SourcesDistribution />
        <RecentActivities />
      </div>
      
      <CompetitorsOverview />
    </div>
  );
}
