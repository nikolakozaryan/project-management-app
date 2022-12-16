import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';
import { SIGNIN_DATA, SIGNUP_DATA } from './interface';

export const login = (data: SIGNIN_DATA) => {
  const URL = `${API_URL}/auth/signin`;
  return axios.post(URL, data).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};

export const register = (data: SIGNUP_DATA) => {
  const URL = `${API_URL}/auth/signup`;
  return axios.post(URL, data).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};
