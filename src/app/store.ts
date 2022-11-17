import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import languageSlice from '../redux/reducers/languageReducer';

export const store = configureStore({
  reducer: {
    language: languageSlice,
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
