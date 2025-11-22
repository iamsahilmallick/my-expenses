import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalStateInterface } from '../interfaces/interfaces';

const initialState: GlobalStateInterface = {
  open: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = globalSlice.actions;

export default globalSlice.reducer;
