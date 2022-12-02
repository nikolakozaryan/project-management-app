export interface IColumn {
  _id: string;
  title: string;
  order: number;
  boardId: string;
}

export interface ICreateTask {
  title: string;
  order: number;
  boardId: string;
  columnId: string;
  description: string;
  userId: string;
  users: string[];
}

export interface ITask extends ICreateTask {
  _id: string;
}

export interface IState {
  columns: IColumn[];
  tasks: ITask[];
  errorMessage: string;
  loading: boolean;
}

export interface IColumnCreateData {
  title: string;
  order: number;
  boardId: string;
}

export interface Identificators {
  columnId: string;
  boardId: string;
}

export interface IEditColumnData extends Identificators {
  title: string;
  order: number;
}

export interface IEditColumnOrderData {
  order: number;
  _id: string;
}
