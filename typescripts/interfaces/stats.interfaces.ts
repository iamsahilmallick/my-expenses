import { TRootResponse } from './common.interfaces';

export type TopCategoryRoot = TRootResponse<TopCategoryDoc[]>;
export type MonthlyStatsRoot = TRootResponse<MonthlyStatsDoc>;

export interface TopCategoryDoc {
  categoryId: string;
  categoryTitle: string;
  totalAmount: number;
  type: string;
}

export interface MonthlyStatsDoc {
  totalIncome: number;
  totalExpense: number;
  walletBalance: number;
  annualSaving: number;
}
