
import { Competitor } from '../types';
import { clarityAiCompetitor } from './clarity-ai';
import { spMarketIntelligenceCompetitor } from './sp-market-intelligence';
import { factsetCompetitor } from './factset';

export const analyticsCompetitors: Competitor[] = [
  clarityAiCompetitor,
  spMarketIntelligenceCompetitor,
  factsetCompetitor
];
