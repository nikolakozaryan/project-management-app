import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageSlice from '../features/language/languageSlice';
import signinSlice from '../features/signin/signinSlice';
import signupSlice from '../features/signup/signupSlice';

export const store = configureStore({
  reducer: {
    language: languageSlice,
    signup: signupSlice,
    signin: signinSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
