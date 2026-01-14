import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';
import { IncomeRoot } from '@/typescripts/interfaces/incomeExpense.interfaces';
import { TApiParams } from '@/typescripts/types';

export const createIncome = async (body: {
  amount: string;
  title: string;
  categoryId: string;
  incomeDate: string;
  paymentMethod: string;
  description?: string | null;
}) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.income.create, body);
  return res?.data;
};

export const getIncomes = async (params: TApiParams) => {
  const res = await axiosInstance.get<IncomeRoot>(endpoints.income.list, {
    params,
  });
  return res?.data;
};

export const incomeDelete = async (id: string) => {
  const res = await axiosInstance.delete<TCommonRoot>(`${endpoints.income.delete}/${id}`);
  return res?.data;
};

export const updateIncome = async (
  id: string,
  body: {
    amount: string;
    title: string;
    categoryId: string;
    incomeDate: string;
    paymentMethod: string;
    description?: string | null;
  }
) => {
  const res = await axiosInstance.put<TCommonRoot>(`${endpoints.income.update}/${id}`, body);
  return res?.data;
};

export const updatePaymentStatus = async (
  id: string,
  body: {
    paymentStatus: string;
  }
) => {
  const res = await axiosInstance.put<TCommonRoot>(`${endpoints.income.paymentStatus}/${id}`, body);
  return res?.data;
};
