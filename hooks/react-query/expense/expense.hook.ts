import { TApiParams } from '@/typescripts/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ExpenseQuery } from '../keys/query-keys';
import { createExpense, expenseDelete, getExpenses, updateExpense } from './expense.func';

export const useCreateExpense = () =>
  useMutation({
    mutationFn: createExpense,
    mutationKey: [ExpenseQuery.create],
  });

export const useUpdateExpense = () =>
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
        expenseDate: string;
        paymentMethod: string;
        description?: string | null;
      };
    }) => updateExpense(id, body),
    mutationKey: [ExpenseQuery.update],
  });

export const useGetExpenseList = (params: TApiParams) =>
  useQuery({
    queryKey: [ExpenseQuery.list, params],
    queryFn: () => getExpenses(params),
    select: res => {
      return res;
    },
  });

export const useDeleteExpense = () =>
  useMutation({
    mutationFn: expenseDelete,
    mutationKey: [ExpenseQuery.delete],
  });
