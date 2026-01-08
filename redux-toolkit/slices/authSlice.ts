import { _projectToken, _reduxAuthStorage } from '@/config/keys.constants';
import { ProfileDoc } from '@/typescripts/interfaces/profile.interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { destroyCookie } from 'nookies';
import { userSliceData } from '../interfaces/interfaces';

const initialState: userSliceData = {
  isLoggedIn: false,
  userProfile: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setProfileData: (state, { payload }: { payload: ProfileDoc | null }) => {
      if (!payload) {
        state.userProfile = null;
        state.isLoggedIn = false;
        return;
      }
      state.isLoggedIn = true;
      state.userProfile = payload;
    },
    setLogout: state => {
      state.isLoggedIn = false;
      state.userProfile = null;
      localStorage.clear();
      sessionStorage.clear();
      destroyCookie(null, _reduxAuthStorage, { path: '/' });
      destroyCookie(null, _projectToken, { path: '/' });
      window.location.href = '/auth/login';
    },
  },
});

export const { setProfileData, setLogout } = authSlice.actions;

export default authSlice.reducer;
