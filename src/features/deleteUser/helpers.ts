import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';

export const deleteUser = (id: string) => {
  const URL = `${API_URL}/users/${id}`;
  const token = localStorage.getItem('user_token');

  return axios.delete(URL, { headers: { Authorization: `Bearer ${token}` } }).then(
    (resp) => resp.data,
    (err: AxiosError) => Promise.reject(err.response?.data)
  );
};
