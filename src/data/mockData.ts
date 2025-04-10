
// This file re-exports all data for backward compatibility
import { Competitor, CompetitorActivity, NewsItem, IndustryTrend } from './types';
import { competitors } from './competitors';
import { news } from './news';
import { industryTrends } from './industryTrends';
import { activityTypes, impactColors } from './constants';

export { 
  competitors,
  news,
  industryTrends,
  activityTypes,
  impactColors
};

export type { 
  Competitor,
  CompetitorActivity,
  NewsItem,
  IndustryTrend
};
