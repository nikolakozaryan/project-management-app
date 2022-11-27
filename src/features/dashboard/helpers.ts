import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';
import { IBoard } from './interface';

export const getBoards = () => {
  const URL = `${API_URL}/boards`;
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

export const addBoard = (data: IBoard) => {
  const URL = `${API_URL}/boards`;
  const token = localStorage.getItem('user_token');

  return axios
    .post(URL, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};
