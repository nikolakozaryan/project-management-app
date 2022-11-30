import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signup } from './helpers';
import { IData, IState } from './interface';

const initialState: IState = {
  _id: '',
  name: '',
  login: '',
  message: '',
  loading: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignupState: () => initialState,
    resetSignupError: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendSignupData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendSignupData.fulfilled, (state, action) => {
      const { _id, name, login } = action.payload as IData;
      state._id = _id;
      state.login = login;
      state.name = name;
      state.message = '';
      state.loading = false;
    });
    builder.addCase(sendSignupData.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.message = message;
      state.loading = false;
    });
  },
});

export const sendSignupData = createAsyncThunk('signup/send', signup);

export const { resetSignupState, resetSignupError } = signupSlice.actions;

export default signupSlice.reducer;
