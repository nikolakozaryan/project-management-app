import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from './helpers';
import { IData, IState, ParsedData } from './interface';
import jwt_decode from 'jwt-decode';

const initialState: IState = {
  _id: localStorage.getItem('user_id') || '',
  login: localStorage.getItem('user_login') || '',
  message: '',
  loading: false,
};

export const authentificationSlice = createSlice({
  name: 'authentification',
  initialState,
  reducers: {
    resetAuthentificationState: () => initialState,
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.loading = false;
    },
    resetError: (state) => {
      state.message = '';
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // SIGN UP
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.message = '';
    });
    builder.addCase(signup.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.message = message;
      state.loading = false;
    });

    // SIGN IN
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
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
    builder.addCase(signin.rejected, (state, action) => {
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

export const signin = createAsyncThunk('authentification/signin', login);
export const signup = createAsyncThunk('authentification/signup', register);

export const { resetAuthentificationState, resetError, setError, stopLoading } =
  authentificationSlice.actions;

export default authentificationSlice.reducer;
