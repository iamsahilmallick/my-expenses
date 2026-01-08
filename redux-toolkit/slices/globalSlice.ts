import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalStateInterface } from '../interfaces/interfaces';

const initialState: GlobalStateInterface = {
  open: false,
  logoutModal: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setLogoutModal: (state, action: PayloadAction<boolean>) => {
      console.log('action', action);
      state.logoutModal = action.payload;
    },
  },
});

export const { setOpen, setLogoutModal } = globalSlice.actions;

export default globalSlice.reducer;
