import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { MonthlyStatsRoot, TopCategoryRoot } from '@/typescripts/interfaces/stats.interfaces';

export const monthlyStats = async () => {
  const res = await axiosInstance.get<MonthlyStatsRoot>(endpoints.stats.monthly);
  return res?.data?.data;
};

export const topCategory = async () => {
  const res = await axiosInstance.get<TopCategoryRoot>(endpoints.stats.topCat);
  return res?.data;
};
