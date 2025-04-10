
import { ActivityType, ImpactColors } from './types';

export const activityTypes: ActivityType[] = [
  { value: 'product', label: 'Products & Services', color: 'bg-blue-100 text-blue-800' },
  { value: 'pricing', label: 'Pricing', color: 'bg-green-100 text-green-800' },
  { value: 'partnership', label: 'Partnerships', color: 'bg-purple-100 text-purple-800' },
  { value: 'acquisition', label: 'Acquisitions', color: 'bg-red-100 text-red-800' },
  { value: 'recruitment', label: 'Recruitment', color: 'bg-orange-100 text-orange-800' },
  { value: 'client', label: 'Clients', color: 'bg-teal-100 text-teal-800' },
  { value: 'social', label: 'Social Media', color: 'bg-indigo-100 text-indigo-800' }
];

export const impactColors: ImpactColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800'
};
