import { AppDispatch } from '../../app/store';
import { resetAuthentificationState } from '../../features/authentification/authentificationSlice';
import { resetBoards } from '../../features/dashboard/dashboardSlice';
import { resetDeleteUserState } from '../../features/deleteUser/deleteUserSlice';
import { resetEditUserState } from '../../features/editUser/editUserSlice';
import { resetUsersState } from '../../features/users/usersSlice';

export const clearReduxStore = (dispatch: AppDispatch) => {
  dispatch(resetAuthentificationState());
  dispatch(resetUsersState());
  dispatch(resetDeleteUserState());
  dispatch(resetEditUserState());
  dispatch(resetBoards());
};
