import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authentificationSlice from '../features/authentification/authentificationSlice';
import boardSlice from '../features/board/boardSlice';
import dashboardSlice from '../features/dashboard/dashboardSlice';
import deleteUserSlice from '../features/deleteUser/deleteUserSlice';
import editUserSlice from '../features/editUser/editUserSlice';
import languageSlice from '../features/language/languageSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    language: languageSlice,
    authentification: authentificationSlice,
    dashboard: dashboardSlice,
    users: usersSlice,
    deleteUser: deleteUserSlice,
    editUser: editUserSlice,
    board: boardSlice,
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
