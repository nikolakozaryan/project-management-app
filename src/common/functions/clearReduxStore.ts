import { AppDispatch } from '../../app/store';
import { resetBoards } from '../../features/dashboard/dashboardSlice';
import { resetDeleteUserState } from '../../features/deleteUser/deleteUserSlice';
import { resetEditUserState } from '../../features/editUser/editUserSlice';
import { resetSigninState } from '../../features/signin/signinSlice';
import { resetSignupState } from '../../features/signup/signupSlice';
import { resetUsersState } from '../../features/users/usersSlice';

export const clearReduxStore = (dispatch: AppDispatch) => {
  dispatch(resetSignupState());
  dispatch(resetSigninState());
  dispatch(resetUsersState());
  dispatch(resetDeleteUserState());
  dispatch(resetEditUserState());
  dispatch(resetBoards());
};
