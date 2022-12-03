import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBoard, getBoards, deleteBoard, changeBoard } from './helpers';
import { IBoard, IState } from './interface';

const initialState: IState = {
  boards: [],
  errorMessage: '',
  loading: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetBoards: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getBoardsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBoardsList.fulfilled, (state, action) => {
      const boards = action.payload as IBoard[];
      state.boards = boards;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(getBoardsList.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });
    builder.addCase(createBoard.fulfilled, (state, action) => {
      const newBoard = action.payload as IBoard;
      state.boards = [...state.boards, newBoard];
      state.errorMessage = 'success';
    });
    builder.addCase(createBoard.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.errorMessage = message;
    });
    builder.addCase(removeBoard.fulfilled, (state, action) => {
      state.boards = state.boards.filter((el) => (el._id !== action.payload._id ? true : false));
      state.errorMessage = 'success';
    });
    builder.addCase(removeBoard.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.errorMessage = message;
    });
    builder.addCase(editBoard.fulfilled, (state, action) => {
      const index = state.boards.findIndex((item) => item._id === action.payload._id);
      const item = state.boards[index];
      Object.keys(item).forEach((key) => {
        item[key as keyof typeof item] = action.payload[key];
      });
      state.errorMessage = 'success';
    });
    builder.addCase(editBoard.rejected, (state, action) => {
      const message = (
        action.error.message === 'Rejected'
          ? 'Server error. Try later, please.'
          : action.error.message
      ) as string;

      state.errorMessage = message;
    });
  },
});

export const getBoardsList = createAsyncThunk('dashboard/getBoards', getBoards);
export const createBoard = createAsyncThunk('dashboard/addBoard', addBoard);
export const removeBoard = createAsyncThunk('dashboard/deleteBoard', deleteBoard);
export const editBoard = createAsyncThunk('dashboard/editBoards', changeBoard);

export const { resetBoards } = dashboardSlice.actions;

export default dashboardSlice.reducer;
