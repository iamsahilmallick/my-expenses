import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { CategoryRoot } from '@/typescripts/interfaces/category.interfaces';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';
import { TApiParams } from '@/typescripts/types';

export const createCategory = async (body: {
  type: string;
  title: string;
  categoryIcon: string;
  description?: string | null;
}) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.category.create, body);
  return res?.data;
};

export const getCategories = async (params: TApiParams) => {
  const res = await axiosInstance.get<CategoryRoot>(endpoints.category.list, {
    params,
  });
  return res?.data;
};
export const catStatusChanger = async (id: string, body: { isActive: boolean }) => {
  const res = await axiosInstance.post<CategoryRoot>(
    `${endpoints.category.statusChanger}/${id}`,
    body
  );
  return res?.data;
};
export const categoryDelete = async (id: string) => {
  const res = await axiosInstance.delete<TCommonRoot>(`${endpoints.category.delete}/${id}`);
  return res?.data;
};

export const updateCategory = async (
  id: string,
  body: {
    type: string;
    title: string;
    categoryIcon: string;
    description?: string | null;
  }
) => {
  const res = await axiosInstance.put<TCommonRoot>(`${endpoints.category.update}/${id}`, body);
  return res?.data;
};
