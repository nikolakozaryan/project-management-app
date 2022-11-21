export interface IData {
  _id: string;
  name: string;
  login: string;
  message: string;
}

export interface IState extends IData {
  loading: boolean;
}

export type SIGNUP_DATA = {
  name: string;
  login: string;
  password: string;
};
