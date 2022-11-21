import { API_URL } from '../../constants/API';
import { SIGNUP_DATA } from './interface';
import axios, { AxiosError } from 'axios';

export const signup = (data: SIGNUP_DATA) => {
  const URL = `${API_URL}/auth/signup`;
  return axios.post(URL, data).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};
