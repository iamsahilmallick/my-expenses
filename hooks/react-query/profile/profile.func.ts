import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';
import { MyProfileRoot } from '@/typescripts/interfaces/profile.interfaces';

// Get profile
export const profileFunc = async () => {
  const res = await axiosInstance.get<MyProfileRoot>(endpoints.auth.profile);
  return res?.data?.data;
};

// Update profile
export const updateProfile = async (body: FormData) => {
  const res = await axiosInstance.patch<TCommonRoot>(endpoints.auth.profileUpdate, body);
  return res?.data;
};
