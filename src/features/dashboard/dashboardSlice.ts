import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBoard, getBoards } from './helpers';
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
  },
});

export const getBoardsList = createAsyncThunk('dashboard/getBoards', getBoards);
export const createBoard = createAsyncThunk('dashboard/addBoard', addBoard);

export const { resetBoards } = dashboardSlice.actions;

export default dashboardSlice.reducer;
