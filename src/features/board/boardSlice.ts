import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoard } from '../dashboard/interface';
import {
  createNewColumn,
  createNewTask,
  deleteOneColumn,
  deleteOneTask,
  editOneColumn,
  editOneTask,
  getBoardTasks,
  getColumnsList,
  getUsersBoardList,
  getUsersListTask,
  updateColumnsOrder,
  updateTasksOrder,
} from './helpers';
import { IColumn, IState, ITask } from './interface';

const initialState: IState = {
  columns: [],
  tasks: [],
  errorMessage: '',
  loading: false,
  users: [],
  usersTasks: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    resetState: () => initialState,
    stopLoading: (state) => {
      state.loading = false;
    },
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
    });
    builder.addCase(getColumns.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });
    // GET USER LIST
    builder.addCase(getUsersList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersList.fulfilled, (state, action: PayloadAction<IBoard>) => {
      const userList = action.payload.users;
      console.log(userList);
      state.users = userList;
      state.errorMessage = 'success';
    });
    builder.addCase(getUsersList.rejected, (state) => {
      state.errorMessage = 'Server error. Try later, please.';
      state.loading = false;
    });
    // GET USER TASK LIST
    builder.addCase(getUsersListTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersListTasks.fulfilled, (state, action: PayloadAction<IBoard>) => {
      const list = action.payload.users;
      state.usersTasks = list;
      state.errorMessage = 'success';
    });
    builder.addCase(getUsersListTasks.rejected, (state) => {
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
    builder.addCase(editColumn.fulfilled, (state, action: PayloadAction<IColumn>) => {
      state.columns = [
        ...state.columns.filter((column) => column._id !== action.payload._id),
        action.payload,
      ].sort((a, b) => a.order - b.order);
      state.errorMessage = 'success';
    });
    builder.addCase(editColumn.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
    });

    //EDIT COLUMNS ORDER
    builder.addCase(editColumnsOrder.fulfilled, (state, action: PayloadAction<IColumn[]>) => {
      const updatedColumns = action.payload;
      const boardId = updatedColumns[0].boardId;
      const filteredColumns = state.columns.filter((column) => column.boardId !== boardId);

      state.columns = [...filteredColumns, ...updatedColumns];
      state.errorMessage = 'success';
    });
    builder.addCase(editColumnsOrder.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
    });

    //GET BOARD TASKS
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload.sort((a, b) => a.order - b.order);

      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });

    //CREATE TASK
    builder.addCase(createTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];

      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });

    //DELETE TASK
    builder.addCase(deleteTask.fulfilled, (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload._id);
      state.errorMessage = 'success';
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
    });

    //UPDATE TASKS ORDER
    builder.addCase(editTasksOrder.fulfilled, (state, action: PayloadAction<ITask[]>) => {
      const updatedTasks = action.payload;
      const columnId = updatedTasks[0].columnId;

      state.tasks = [...state.tasks.filter((task) => task.columnId !== columnId), ...updatedTasks];
    });
    builder.addCase(editTasksOrder.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
    });

    //EDIT TASK
    builder.addCase(editTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editTask.fulfilled, (state, action: PayloadAction<ITask>) => {
      const editedTask = action.payload;
      const { _id } = editedTask;

      state.tasks = [...state.tasks.filter((task) => task._id !== _id), editedTask];
      state.errorMessage = 'success';
      state.loading = false;
    });
    builder.addCase(editTask.rejected, (state, action) => {
      state.errorMessage = action.error.message || 'Server error. Try later, please.';
      state.loading = false;
    });
  },
});

export const getUsersList = createAsyncThunk('board/getUsersList', getUsersBoardList);
export const getUsersListTasks = createAsyncThunk('board/getUsersListTask', getUsersListTask);

export const getColumns = createAsyncThunk('board/getColumns', getColumnsList);
export const createColumn = createAsyncThunk('board/createColumn', createNewColumn);
export const deleteColumn = createAsyncThunk('board/deleteColumn', deleteOneColumn);
export const editColumn = createAsyncThunk('board/editColumn', editOneColumn);
export const editColumnsOrder = createAsyncThunk('board/editColumnsOrder', updateColumnsOrder);

export const getTasks = createAsyncThunk('board/getTasks', getBoardTasks);
export const createTask = createAsyncThunk('board/createTask', createNewTask);
export const editTask = createAsyncThunk('board/editTask', editOneTask);
export const deleteTask = createAsyncThunk('board/deleteTask', deleteOneTask);
export const editTasksOrder = createAsyncThunk('board/editTasksOrder', updateTasksOrder);

export const { resetState, stopLoading } = boardSlice.actions;

export default boardSlice.reducer;
