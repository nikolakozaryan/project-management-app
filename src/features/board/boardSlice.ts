import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  changeColumnsList,
  createNewColumn,
  deleteOneColumn,
  editOneColumn,
  getColumnsList,
} from './helpers';
import { IColumn, IState } from './interface';

const initialState: IState = {
  columns: [],
  tasks: [],
  errorMessage: '',
  loading: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    resetColumns: () => initialState,
  },
  extraReducers: (builder) => {
    //GET COLUMNS
    builder.addCase(getColumns.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getColumns.fulfilled, (state, action: PayloadAction<IColumn[]>) => {
      const sortedColumns = action.payload.sort((a, b) => a.order - b.order);
      state.columns = sortedColumns;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(getColumns.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });

    //CREATE COLUMN
    builder.addCase(createColumn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createColumn.fulfilled, (state, action: PayloadAction<IColumn>) => {
      const sortedColumns = [...state.columns, action.payload].sort((a, b) => a.order - b.order);
      state.columns = sortedColumns;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(createColumn.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });

    //DELETE COLUMN
    builder.addCase(deleteColumn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteColumn.fulfilled, (state, action: PayloadAction<IColumn>) => {
      state.columns = state.columns.filter((column) => column._id !== action.payload._id);
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(deleteColumn.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });

    //EDIT COLUMN
    builder.addCase(editColumn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editColumn.fulfilled, (state, action: PayloadAction<IColumn>) => {
      state.columns = [
        ...state.columns.filter((column) => column._id !== action.payload._id),
        action.payload,
      ].sort((a, b) => a.order - b.order);
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(editColumn.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });

    //CHANGE ALL COLUMNS
    builder.addCase(changeAllColumns.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeAllColumns.fulfilled, (state, action: PayloadAction<IColumn[]>) => {
      state.columns = action.payload;
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(changeAllColumns.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });
  },
});

export const getColumns = createAsyncThunk('board/getColumns', getColumnsList);
export const createColumn = createAsyncThunk('board/createColumn', createNewColumn);
export const deleteColumn = createAsyncThunk('board/deleteColumn', deleteOneColumn);
export const editColumn = createAsyncThunk('board/editColumn', editOneColumn);
export const changeAllColumns = createAsyncThunk('board/changeAllColumns', changeColumnsList);

export const { resetColumns } = boardSlice.actions;

export default boardSlice.reducer;
