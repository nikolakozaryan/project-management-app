export interface IUser {
  _id: string;
  name: string;
  login: string;
}

export interface IState {
  users: IUser[];
  loading: boolean;
  errorMessage: string;
}
