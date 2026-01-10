import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';
import { ExpenseRoot, IncomeRoot } from '@/typescripts/interfaces/incomeExpense.interfaces';
import { TApiParams } from '@/typescripts/types';

export const createExpense = async (body: {
  amount: string;
  title: string;
  categoryId: string;
  expenseDate: string;
  paymentMethod: string;
  description?: string | null;
}) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.expense.create, body);
  return res?.data;
};

export const getExpenses = async (params: TApiParams) => {
  const res = await axiosInstance.get<ExpenseRoot>(endpoints.expense.list, {
    params,
  });
  return res?.data;
};

export const expenseDelete = async (id: string) => {
  const res = await axiosInstance.delete<TCommonRoot>(`${endpoints.expense.delete}/${id}`);
  return res?.data;
};

export const updateExpense = async (
  id: string,
  body: {
    amount: string;
    title: string;
    categoryId: string;
    expenseDate: string;
    paymentMethod: string;
    description?: string | null;
  }
) => {
  const res = await axiosInstance.put<TCommonRoot>(`${endpoints.expense.update}/${id}`, body);
  return res?.data;
};
