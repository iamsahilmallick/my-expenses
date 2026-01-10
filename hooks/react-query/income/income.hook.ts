import { TApiParams } from '@/typescripts/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IncomeQuery } from '../keys/query-keys';
import { createIncome, getIncomes, incomeDelete, updateIncome } from './income.func';

export const useCreateIncome = () =>
  useMutation({
    mutationFn: createIncome,
    mutationKey: [IncomeQuery.create],
  });

export const useUpdateIncome = () =>
  useMutation({
    mutationFn: ({
      body,
      id,
    }: {
      id: string;
      body: {
        amount: string;
        title: string;
        categoryId: string;
        incomeDate: string;
        paymentMethod: string;
        description?: string | null;
      };
    }) => updateIncome(id, body),
    mutationKey: [IncomeQuery.update],
  });

export const useGetIncomeList = (params: TApiParams) =>
  useQuery({
    queryKey: [IncomeQuery.list, params],
    queryFn: () => getIncomes(params),
    select: res => {
      return res;
    },
  });

export const useDeleteIncome = () =>
  useMutation({
    mutationFn: incomeDelete,
    mutationKey: [IncomeQuery.delete],
  });
