import axiosInstance from '@/network/axiosClient';
import { endpoints } from '@/network/endpoints';
import { TCommonRoot } from '@/typescripts/interfaces/common.interfaces';

// Login function
export const loginFunc = async (body: { email: string; password: string }) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.auth.login, body);
  return res?.data;
};

export const signUpFunc = async (body: {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.auth.register, body);
  return res?.data;
};

export const resendOtpFunc = async (body: { email: string }) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.auth.resendOTp, body);
  return res?.data;
};

export const verifyOtpFunc = async (body: { email: string; otp: string }) => {
  const res = await axiosInstance.post<TCommonRoot>(endpoints.auth.verifyOTp, body);
  return res?.data;
};
