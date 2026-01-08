import { useQuery } from '@tanstack/react-query';
import { StatsQueryKeys } from '../keys/query-keys';
import { monthlyStats, topCategory } from './stats.func';

export const useMonthlyStats = () => {
  return useQuery({
    queryKey: [StatsQueryKeys.monthly],
    queryFn: monthlyStats,
  });
};

export const useTopCategory = () => {
  return useQuery({
    queryKey: [StatsQueryKeys.topCat],
    queryFn: topCategory,
  });
};
