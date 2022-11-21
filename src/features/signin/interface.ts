export interface IData {
  token: string;
  message: string;
}

export type ParsedData = {
  id: string;
  login: string;
};

export interface IState {
  _id: string;
  login: string;
  message: string;
  loading: boolean;
}

export type SIGNIN_DATA = {
  login: string;
  password: string;
};
