export interface IState extends IResponse {
  errorMessage: string;
  loading: boolean;
}

export interface IResponse {
  _id: string;
  name: string;
  login: string;
}

export interface IData {
  name: string;
  login: string;
  password: string;
}
