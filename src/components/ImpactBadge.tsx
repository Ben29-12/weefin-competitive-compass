
import { impactColors } from "@/data/mockData";

interface ImpactBadgeProps {
  impact: 'low' | 'medium' | 'high';
  className?: string;
}

export function ImpactBadge({ impact, className = "" }: ImpactBadgeProps) {
  const color = impactColors[impact] || 'bg-gray-100 text-gray-800';
  const label = {
    low: 'Faible',
    medium: 'Moyen',
    high: 'Élevé'
  }[impact] || impact;
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color} ${className}`}>
      {label}
    </span>
  );
}
