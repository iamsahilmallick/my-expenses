import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';

// Login function
export const loginFunc = async (body: { provider: string; token: string }) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.auth.login, body);
  return res?.data;
};

// Get profile
export const getProfile = async () => {
  const res = await axiosInstance.get<TCommonRoot>(endpoints.auth.profile);
  return res?.data;
};

// Update profile
export const updateProfile = async (body: FormData) => {
  const res = await axiosInstance.patch<TCommonRoot>(endpoints.auth.profileUpdate, body);
  return res?.data;
};
