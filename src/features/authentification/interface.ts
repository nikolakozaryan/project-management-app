export type SIGNIN_DATA = {
  login: string;
  password: string;
};

export type SIGNUP_DATA = {
  name: string;
  login: string;
  password: string;
};

export interface IData {
  token: string;
  _id: string;
  name: string;
  login: string;
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
