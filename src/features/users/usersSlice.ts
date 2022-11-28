import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from './helpers';
import { IState, IUser } from './interface';

const initialState: IState = {
  users: [],
  loading: false,
  errorMessage: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateLocalUser: (state, action: PayloadAction<IUser>) => {
      const user = action.payload;
      const { _id } = user;
      state.users = [...state.users.filter((user) => user._id !== _id), user];
    },
    deleteLocalUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user._id !== id);
    },
    resetUsersState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
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

export const fetchUsers = createAsyncThunk('users/getUsers', getUsers);

export const { resetUsersState, updateLocalUser, deleteLocalUser } = usersSlice.actions;

export default usersSlice.reducer;
