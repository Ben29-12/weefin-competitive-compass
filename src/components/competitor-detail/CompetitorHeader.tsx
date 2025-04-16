
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
        
        {peopleSignals.length > 0 && <div className="mt-4 space-y-2">
            
            <div className="flex flex-wrap gap-2">
              {peopleSignals.map(signal => (
                <Badge key={signal.id} variant="outline" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {signal.title}
                </Badge>
              ))}
            </div>
          </div>}
        
        {competitor.keyProducts && competitor.keyProducts.length > 0 && <div className="mt-4">
            <h3 className="text-sm font-medium">Key Products</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {competitor.keyProducts.map((product, index) => <Badge key={index} variant="secondary" className="text-xs">
                  {product}
                </Badge>)}
            </div>
          </div>}
      </div>
      <a href={competitor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center">
        Visit website
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>;
}
