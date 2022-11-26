import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin } from './helpers';
import { IData, IState, ParsedData } from './interface';
import jwt_decode from 'jwt-decode';

const initialState: IState = {
  _id: localStorage.getItem('user_id') || '',
  login: localStorage.getItem('user_login') || '',
  message: '',
  loading: false,
};

export const signupSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    resetSigninState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(sendSigninData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendSigninData.fulfilled, (state, action) => {
      const { token } = action.payload as IData;
      const data = jwt_decode(token) as ParsedData;
      localStorage.setItem('user_token', token);
      localStorage.setItem('user_id', data.id);
      localStorage.setItem('user_login', data.login);
      state._id = data.id;
      state.login = data.login;
      state.message = '';
      state.loading = false;
    });
    builder.addCase(sendSigninData.rejected, (state, action) => {
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

export const sendSigninData = createAsyncThunk('signin/send', signin);

export const { resetSigninState } = signupSlice.actions;

export default signupSlice.reducer;
