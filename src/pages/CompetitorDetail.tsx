
import { useParams } from "react-router-dom";
import { competitors } from "@/data/mockData";
import { CompetitorHeader } from "@/components/competitor-detail/CompetitorHeader";
import { InfoCards } from "@/components/competitor-detail/InfoCards";
import { ProductsSection } from "@/components/competitor-detail/ProductsSection";
import { ActivitiesSection } from "@/components/competitor-detail/ActivitiesSection";
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
      <ProductsSection competitor={competitor} />
      <ActivitiesSection competitor={competitor} />
    </div>
  );
}
