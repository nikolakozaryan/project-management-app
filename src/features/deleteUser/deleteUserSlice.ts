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
  name: 'editUser',
  initialState,
  reducers: {
    resetDeleteUserState: () => initialState,
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
      state.loading = false;
    });
    builder.addCase(deleteCurrentUser.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });
  },
});

export const deleteCurrentUser = createAsyncThunk('deleteUser/deleteCurrentUser', deleteUser);

export const { resetDeleteUserState } = deleteUserSlice.actions;

export default deleteUserSlice.reducer;
