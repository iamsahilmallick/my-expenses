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
    setProfileData: (state, { payload }: { payload: unknown | null }) => {
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
      destroyCookie(null, '_user_storage', { path: '/' });
      destroyCookie(null, '_vejen_til_jura', { path: '/' });
      window.location.href = '/';
    },
  },
});

export const { setProfileData, setLogout } = authSlice.actions;

export default authSlice.reducer;
