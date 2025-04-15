import { useState } from "react";
import { competitors } from "@/data/competitors";
import { activityTypes } from "@/data/constants";
import { SearchAndFilter } from "@/components/competitors/SearchAndFilter";
import { CompetitorsList } from "@/components/competitors/CompetitorsList";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function Competitors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activityFilter, setActivityFilter] = useState<string | null>(null);

  const sortedCompetitors = [...competitors].sort((a, b) => {
    if (a.name === "Clarity AI") return -1;
    if (b.name === "Clarity AI") return 1;
    return a.name.localeCompare(b.name);
  });

  const filteredCompetitors = sortedCompetitors
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tracked Competitors</h1>
          <p className="text-muted-foreground mt-1">
            List of key competitors and their recent activities
          </p>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">{competitors.length}</span>
          <Badge variant="secondary">Active</Badge>
        </div>
      </div>

      <SearchAndFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activityFilter={activityFilter}
        setActivityFilter={setActivityFilter}
        activityTypes={activityTypes}
      />

      <div className="w-full">
        <CompetitorsList 
          competitors={filteredCompetitors} 
          activityFilter={activityFilter} 
        />
      </div>
    </div>
  );
}
