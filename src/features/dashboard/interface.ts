export interface IBoard {
  _id?: string;
  title: string;
  owner: string;
  users: string[];
}

export interface IState {
  boards: IBoard[];
  errorMessage: string;
  loading: boolean;
}
