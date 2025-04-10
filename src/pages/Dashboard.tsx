
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { IndustryTrends } from "@/components/dashboard/IndustryTrends";
import { RecentNews } from "@/components/dashboard/RecentNews";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <RecentActivities />
        <UpcomingEvents />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <IndustryTrends />
        <RecentNews />
      </div>

      <CompetitorsOverview />
    </div>
  );
}
