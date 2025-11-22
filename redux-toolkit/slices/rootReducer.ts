import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import authSlice from './authSlice';
import globalSlice from './globalSlice';

const rootReducer = combineReducers({
  global: globalSlice,
  auth: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const combinedReducer = (state: RootState | undefined, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return rootReducer(state, action);
};

export default combinedReducer;
