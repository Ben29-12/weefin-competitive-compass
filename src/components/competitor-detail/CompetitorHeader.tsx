
import { Competitor } from "@/data/types";
import { ExternalLink, Box, Users, Database, BarChart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ActivityBadge } from "@/components/ActivityBadge";
import { ImpactBadge } from "@/components/ImpactBadge";

interface CompetitorHeaderProps {
  competitor: Competitor;
}

export function CompetitorHeader({
  competitor
}: CompetitorHeaderProps) {
  // Find people signals in recent activities
  const peopleSignals = competitor.recentActivity.filter(activity => activity.type === 'people_signals').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-4 mb-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={competitor.logo} alt={`${competitor.name} logo`} />
            <AvatarFallback>{competitor.name[0]}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold tracking-tight">{competitor.name}</h1>
        </div>
        <p className="text-muted-foreground mt-1 max-w-2xl">
          {competitor.description}
        </p>
        
        {peopleSignals.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center mb-2">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              <span className="font-medium text-sm">Recent People Signals:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {peopleSignals.map(signal => (
                <div key={signal.id} className="border rounded-md p-2 text-sm flex-1 min-w-[250px] max-w-md">
                  <div className="font-medium mb-1">{signal.title}</div>
                  <p className="text-muted-foreground text-xs mb-2">{signal.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      {new Date(signal.date).toLocaleDateString()}
                    </div>
                    <div className="flex gap-1">
                      <ActivityBadge type={signal.type} />
                      {signal.impact && <ImpactBadge impact={signal.impact} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {competitor.keyProducts && competitor.keyProducts.length > 0 && (
          <div className="mt-3 flex items-center text-sm text-muted-foreground">
            <Box className="h-4 w-4 mr-2" />
            <span className="font-medium">Key Products:</span>
            <span className="ml-2">{competitor.keyProducts.join(", ")}</span>
          </div>
        )}
      </div>
      <a href={competitor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
        Visit website
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>;
}
