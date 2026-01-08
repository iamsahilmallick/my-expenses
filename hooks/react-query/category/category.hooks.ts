import { TApiParams } from '@/typescripts/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CategoryQuery } from '../keys/query-keys';
import {
  categoryDelete,
  catStatusChanger,
  createCategory,
  getCategories,
  updateCategory,
} from './category.func';

export const useCreateCategory = () =>
  useMutation({
    mutationFn: createCategory,
    mutationKey: [CategoryQuery.create],
  });

export const useUpdateCategory = () =>
  useMutation({
    mutationFn: ({
      body,
      id,
    }: {
      id: string;
      body: {
        type: string;
        title: string;
        categoryIcon: string;
        description?: string | null;
      };
    }) => updateCategory(id, body),
    mutationKey: [CategoryQuery.update],
  });

export const useGetCategoryList = (params: TApiParams) =>
  useQuery({
    queryKey: [CategoryQuery.list, params],
    queryFn: () => getCategories(params),
    select: res => {
      return res;
    },
  });

export const useCategoryStatusChanger = () =>
  useMutation({
    mutationFn: ({ id, body }: { id: string; body: { isActive: boolean } }) =>
      catStatusChanger(id, body),
    mutationKey: [CategoryQuery.statusChanger],
  });

export const useDeleteCategory = () =>
  useMutation({
    mutationFn: categoryDelete,
    mutationKey: [CategoryQuery.delete],
  });
