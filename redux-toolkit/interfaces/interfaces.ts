import { ProfileDoc } from '@/typescripts/interfaces/profile.interfaces';

export interface GlobalStateInterface {
  open: boolean;
  logoutModal: boolean;
}

export interface userSliceData {
  isLoggedIn: boolean;
  userProfile: ProfileDoc | null;
}
