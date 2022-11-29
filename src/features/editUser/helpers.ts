import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';
import { IData } from './interface';

export const editUser = (data: IData) => {
  const token = localStorage.getItem('user_token');
  const id = localStorage.getItem('user_id');
  const URL = `${API_URL}/users/${id}`;

  return axios.put(URL, data, { headers: { Authorization: `Bearer ${token}` } }).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};
