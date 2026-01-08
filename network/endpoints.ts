import { mediaPaths } from '@/config/constants';

export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/v1`;

export const getMediaUrl = (key: keyof typeof mediaPaths, filename: string) => {
  const path = mediaPaths[key] || 'others';
  return `${baseUrl}/uploads/${path}/${filename}`;
};

export const endpoints = {
  cms: {
    legalOffice: 'legal-offices/category',
  },
  notifications: {
    getAll: 'notifications',
  },
  auth: {
    login: 'users/login',
    register: 'users/register',
    profile: 'users/profile',
    resendOTp: 'users/resend-otp',
    verifyOTp: 'users/verify-otp',
    profileUpdate: 'users/profile/update',
    profileDelete: 'users/profile/delete',
  },
  category: {
    create: 'category/create',
    update: 'category/update',
    list: 'category/get',
    delete: 'category/delete',
    statusChanger: 'category/status-changer',
  },
  stats: {
    topCat: 'stats/top-category-wise',
    monthly: 'stats/monthly',
  },
};

export const successEndpoints = [
  endpoints?.auth?.register,
  endpoints?.auth?.login,
  endpoints?.auth?.resendOTp,
  endpoints?.auth?.verifyOTp,
  endpoints?.auth?.profileUpdate,
  endpoints?.category.create,
  endpoints?.category.delete,
];
