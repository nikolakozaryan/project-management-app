import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';

export const getUsers = () => {
  const URL = `${API_URL}/users`;
  const token = localStorage.getItem('user_token');

  return axios
    .get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};
