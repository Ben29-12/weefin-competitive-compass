
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";
import { SourcesDistribution } from "@/components/dashboard/SourcesDistribution";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <SourcesDistribution />
        </div>
        <div className="col-span-4">
          <RecentActivities />
        </div>
      </div>
      <CompetitorsOverview />
    </div>
  );
}
