import { tokenDuration } from '@/config/constants';
import { parseDuration } from '@/lib/common/commonUtils';
import { configureStore } from '@reduxjs/toolkit';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import { authSlice } from '../slices/authSlice';
import rootReducer from '../slices/rootReducer';

const makeStore = wrapMakeStore(() => {
  const maxAge = parseDuration(tokenDuration);
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware({
        serializableCheck: false,
      }).prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: `auth`,
              cookieName: `_my_expense_dt`,
              defaultState: authSlice.getInitialState(),
              compress: true,
              maxAge,
            },
          ],
          secure: false,
          sameSite: false,
        })
      );
      return middleware;
    },
    devTools: process.env.NODE_ENV === 'development',
  });
  return store;
});

export const wrapper = createWrapper(makeStore);

type Store = ReturnType<typeof makeStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
