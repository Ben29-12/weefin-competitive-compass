
import { Competitor } from './types';
import { financialCompetitors } from './competitors/financial';
import { analyticsCompetitors } from './competitors/analytics';
import { technologyCompetitors } from './competitors/technology';

export const competitors: Competitor[] = [
  ...financialCompetitors,
  ...analyticsCompetitors,
  ...technologyCompetitors
];
