
import { Competitor } from "@/data/types";
import { ExternalLink, Box } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CompetitorHeaderProps {
  competitor: Competitor;
}

export function CompetitorHeader({ competitor }: CompetitorHeaderProps) {
  return (
    <div className="flex justify-between items-start">
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
        {competitor.keyProducts && competitor.keyProducts.length > 0 && (
          <div className="mt-3 flex items-center text-sm text-muted-foreground">
            <Box className="h-4 w-4 mr-2" />
            <span className="font-medium">Key Products:</span>
            <span className="ml-2">{competitor.keyProducts.join(", ")}</span>
          </div>
        )}
      </div>
      <a
        href={competitor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center"
      >
        Visit website
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}
