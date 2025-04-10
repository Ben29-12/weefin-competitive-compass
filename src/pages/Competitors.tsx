
import { useState } from "react";
import { competitors, activityTypes } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Building, 
  ChevronDown, 
  Filter, 
  MoreHorizontal, 
  Search 
} from "lucide-react";

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
      // Filter activities if an activity filter is applied
      filteredActivities: activityFilter 
        ? competitor.recentActivity.filter(activity => activity.type === activityFilter)
        : competitor.recentActivity
    }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Competitors</h1>
        <p className="text-muted-foreground mt-1">
          List of key competitors and their recent activities
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or description..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {activityFilter 
                ? activityTypes.find(t => t.value === activityFilter)?.label
                : "Filter by activity"}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setActivityFilter(null)}>
              All activities
            </DropdownMenuItem>
            {activityTypes.map(type => (
              <DropdownMenuItem 
                key={type.value}
                onClick={() => setActivityFilter(type.value)}
              >
                {type.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredCompetitors.length > 0 ? (
          filteredCompetitors.map((competitor) => (
            <Card key={competitor.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30 pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{competitor.name}</CardTitle>
                      <CardDescription>{competitor.headquartersLocation}</CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={`/competitor/${competitor.id}`}>
                          View full profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href={competitor.website} target="_blank" rel="noopener noreferrer">
                          Visit website
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <p className="text-sm text-muted-foreground mb-3">
                    {competitor.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {competitor.keyProducts.map((product, index) => (
                      <span key={index} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm font-medium mb-3">
                    Recent Activities 
                    {activityFilter && ` - ${activityTypes.find(t => t.value === activityFilter)?.label}`}
                  </div>
                  {competitor.filteredActivities.length > 0 ? (
                    <div className="space-y-3">
                      {competitor.filteredActivities.slice(0, 3).map((activity) => (
                        <div key={activity.id} className="border-b pb-3 last:border-0">
                          <div className="flex justify-between items-start mb-1">
                            <div className="font-medium text-sm">{activity.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(activity.date).toLocaleDateString('en-US')}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <ActivityBadge type={activity.type} className="text-xs" />
                            {activity.impact && <ImpactBadge impact={activity.impact} className="text-xs" />}
                          </div>
                        </div>
                      ))}
                      {competitor.filteredActivities.length > 3 && (
                        <div className="text-right">
                          <Link 
                            to={`/competitor/${competitor.id}`} 
                            className="text-xs text-primary hover:underline inline-flex items-center"
                          >
                            See {competitor.filteredActivities.length - 3} more activities
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-sm text-muted-foreground">
                      No matching activities found.
                    </div>
                  )}
                </div>

                <div className="p-4 bg-muted/30 border-t">
                  <Link 
                    to={`/competitor/${competitor.id}`} 
                    className="text-sm text-primary font-medium hover:underline flex items-center"
                  >
                    View full profile
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <h3 className="text-lg font-medium">No competitors found</h3>
            <p className="text-muted-foreground mt-1">Adjust your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
