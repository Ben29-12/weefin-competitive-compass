
import { useParams, Link } from "react-router-dom";
import { competitors } from "@/data/competitors";
import { CompetitorHeader } from "@/components/competitor-detail/CompetitorHeader";
import { InfoCards } from "@/components/competitor-detail/InfoCards";
import { ActivitiesSection } from "@/components/competitor-detail/ActivitiesSection";
import { ComparisonSection } from "@/components/competitor-detail/ComparisonSection";
import { NotFoundState } from "@/components/competitor-detail/NotFoundState";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CompetitorDetail() {
  const { id } = useParams<{ id: string }>();
  const competitor = competitors.find(c => c.id === id);

  if (!competitor) {
    return <NotFoundState />;
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <Button
          variant="ghost"
          asChild
          className="hover:bg-transparent -ml-2 mb-4"
        >
          <Link to="/competitors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Competitors
          </Link>
        </Button>
      </div>
      <CompetitorHeader competitor={competitor} />
      <InfoCards competitor={competitor} />
      <ActivitiesSection competitor={competitor} />
      <ComparisonSection competitor={competitor} />
    </div>
  );
}
