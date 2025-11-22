import { mediaPaths } from '@/config/constants';

export const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/v1`;

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
    login: 'auth/login',
    profile: 'users/profile',
    profileUpdate: 'users/profile',
    profileDelete: 'users/profile',
    emailTrigger: 'users/email-trigger',
  },
  legalOffices: {
    category: 'legal-offices/category',
    register: 'legal-offices/register',
    getoffices: 'legal-offices',
    getDetails: 'legal-offices',
    updateDetails: 'legal-offices',
    deleteOffices: 'legal-offices',
    officeApproval: 'legal-offices/request',
    imgDelete: 'legal-offices',
    searchOffice: 'legal-offices/search',
  },
  cases: {
    create: 'cases',
    get: 'cases',
    getDetails: 'cases',
    updateCase: 'cases',
  },
};

export const successEndpoints = [endpoints?.legalOffices?.register];
