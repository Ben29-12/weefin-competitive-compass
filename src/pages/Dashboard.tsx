
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <RecentActivities />
      
      <CompetitorsOverview />
    </div>
  );
}
