import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { editUser } from './helpers';
import { IResponse, IState } from './interface';

const initialState: IState = {
  _id: '',
  name: '',
  login: '',
  errorMessage: '',
  loading: false,
};

export const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    resetEditUserState: () => initialState,
    resetEditUserError: (state) => {
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editCurrentUser.fulfilled, (state, action: PayloadAction<IResponse>) => {
      const { _id, name, login } = action.payload;
      state._id = _id;
      state.name = name;
      state.login = login;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(editCurrentUser.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.errorMessage = message;
      state.loading = false;
    });
  },
});

export const editCurrentUser = createAsyncThunk('editUser/editCurrentUser', editUser);

export const { resetEditUserState, resetEditUserError } = editUserSlice.actions;

export default editUserSlice.reducer;
