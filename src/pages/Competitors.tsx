
import { useState } from "react";
import { competitors, activityTypes } from "@/data/mockData";
import { SearchAndFilter } from "@/components/competitors/SearchAndFilter";
import { CompetitorsList } from "@/components/competitors/CompetitorsList";

export default function Competitors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activityFilter, setActivityFilter] = useState<string | null>(null);

  const filteredCompetitors = competitors
    .filter(competitor => 
      competitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      competitor.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(competitor => ({
      ...competitor,
      filteredActivities: activityFilter 
        ? competitor.recentActivity.filter(activity => activity.type === activityFilter)
        : competitor.recentActivity
    }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tracked Competitors</h1>
        <p className="text-muted-foreground mt-1">
          List of key competitors and their recent activities
        </p>
      </div>

      <SearchAndFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activityFilter={activityFilter}
        setActivityFilter={setActivityFilter}
        activityTypes={activityTypes}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <CompetitorsList 
          competitors={filteredCompetitors} 
          activityFilter={activityFilter} 
        />
      </div>
    </div>
  );
}
