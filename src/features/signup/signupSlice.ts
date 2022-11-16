import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signup } from './helpers';

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    _id: '',
    name: '',
    login: '',
    statusCode: '',
    error: '',
    loading: false,
  },
  reducers: {
    setID: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setStatusCode: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state._id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(send.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(send.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(send.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const send = createAsyncThunk('signup/send', signup);

export const {} = signupSlice.actions;

export default signupSlice.reducer;
