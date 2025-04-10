
import { Competitor } from "@/data/types";
import { ExternalLink } from "lucide-react";

interface CompetitorHeaderProps {
  competitor: Competitor;
}

export function CompetitorHeader({ competitor }: CompetitorHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{competitor.name}</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">
          {competitor.description}
        </p>
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
