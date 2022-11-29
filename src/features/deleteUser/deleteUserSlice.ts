import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteUser } from './helpers';
import { IResponse, IState } from './interface';

const initialState: IState = {
  _id: '',
  name: '',
  login: '',
  errorMessage: '',
  loading: false,
};

export const deleteUserSlice = createSlice({
  name: 'deleteUser',
  initialState,
  reducers: {
    resetDeleteUserState: () => initialState,
    resetDeleteUserError: (state) => {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCurrentUser.fulfilled, (state, action: PayloadAction<IResponse>) => {
      const { _id, name, login } = action.payload;
      state._id = _id;
      state.name = name;
      state.login = login;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(deleteCurrentUser.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });
  },
});

export const deleteCurrentUser = createAsyncThunk('deleteUser/deleteCurrentUser', deleteUser);

export const { resetDeleteUserState, resetDeleteUserError } = deleteUserSlice.actions;

export default deleteUserSlice.reducer;
