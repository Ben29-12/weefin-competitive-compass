import { useParams } from "react-router-dom";
import { competitors } from "@/data/competitors";
import { CompetitorHeader } from "@/components/competitor-detail/CompetitorHeader";
import { InfoCards } from "@/components/competitor-detail/InfoCards";
import { ActivitiesSection } from "@/components/competitor-detail/ActivitiesSection";
import { ComparisonSection } from "@/components/competitor-detail/ComparisonSection";
import { NotFoundState } from "@/components/competitor-detail/NotFoundState";

export default function CompetitorDetail() {
  const { id } = useParams<{ id: string }>();
  const competitor = competitors.find(c => c.id === id);

  if (!competitor) {
    return <NotFoundState />;
  }

  return (
    <div className="space-y-6">
      <CompetitorHeader competitor={competitor} />
      <InfoCards competitor={competitor} />
      <ActivitiesSection competitor={competitor} />
      <ComparisonSection competitor={competitor} />
    </div>
  );
}
