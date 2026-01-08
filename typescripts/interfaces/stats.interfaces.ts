import { TRootResponse } from './common.interfaces';

export type TopCategoryRoot = TRootResponse<TopCategoryDoc[]>;
export type MonthlyStatsRoot = TRootResponse<MonthlyStatsDoc>;

export interface TopCategoryDoc {
  categoryTitle: string;
  totalExpense: number;
}

export interface MonthlyStatsDoc {
  totalIncome: number;
  totalExpense: number;
  totalSaving: number;
  annualSaving: number;
}
