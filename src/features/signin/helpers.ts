import { API_URL } from '../../constants/API';
import { SIGNIN_DATA } from './interface';
import axios, { AxiosError } from 'axios';

export const signin = (data: SIGNIN_DATA) => {
  const URL = `${API_URL}/auth/signin`;
  return axios.post(URL, data).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};
