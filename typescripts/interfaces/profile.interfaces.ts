import { TRootResponse } from './common.interfaces';

export type MyProfileRoot = TRootResponse<ProfileDoc>;
export interface ProfileDoc {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  profilePic: string;
  dob: string;
  isOtpVerified: boolean;
  lastLogin: any;
  twoFactorEnabled: boolean;
  role: string;
  subscriptionStatus: string;
  createdAt: string;
  updatedAt: string;
  socialLinks: string[];
}
