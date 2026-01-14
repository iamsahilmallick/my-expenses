import { TRootResponse } from './common.interfaces';

export type IncomeRoot = TRootResponse<IIncomeDoc[]>;
export type ExpenseRoot = TRootResponse<IExpenseDoc[]>;

export interface IIncomeDoc {
  _id: string;
  userId: string;
  categoryId?: ICatDetails;
  title: string;
  amount: number;
  description: string;
  incomeDate: string;
  paymentMethod: string;
  paymentStatus: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
export interface IExpenseDoc {
  _id: string;
  userId: string;
  categoryId?: ICatDetails;
  title: string;
  amount: number;
  description: string;
  expenseDate: string;
  paymentMethod: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ICatDetails {
  _id: string;
  title: string;
  categoryIcon: string;
}
