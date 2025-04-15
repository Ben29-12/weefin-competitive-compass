
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";
import { SourcesDistribution } from "@/components/dashboard/SourcesDistribution";
import { RecentNews } from "@/components/dashboard/RecentNews";
import { IndustryTrends } from "@/components/dashboard/IndustryTrends";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <div className="space-y-6">
        <SourcesDistribution />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IndustryTrends />
          <RecentNews />
        </div>
        <RecentActivities />
      </div>
      <CompetitorsOverview />
    </div>
  );
}
