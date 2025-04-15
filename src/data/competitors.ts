
import { Competitor } from './types';
import { financialCompetitors } from './competitors/financial';
import { analyticsCompetitors } from './competitors/analytics';
import { technologyCompetitors } from './competitors/technology';

// Create a helper function to check for duplicate IDs
const ensureUniqueCompetitors = (competitors: Competitor[]): Competitor[] => {
  const uniqueIds = new Set<string>();
  return competitors.filter(competitor => {
    if (uniqueIds.has(competitor.id)) {
      console.warn(`Duplicate competitor ID found: ${competitor.id}. Removing duplicate.`);
      return false;
    }
    uniqueIds.add(competitor.id);
    return true;
  });
};

// Combine and ensure unique competitors
export const competitors: Competitor[] = ensureUniqueCompetitors([
  ...financialCompetitors,
  ...analyticsCompetitors,
  ...technologyCompetitors
]);
