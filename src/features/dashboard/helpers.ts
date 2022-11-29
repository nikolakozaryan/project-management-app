import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';
import { IBoard, IBoardWithId } from './interface';

export const getBoards = () => {
  const user = localStorage.getItem('user_id');
  const URL = `${API_URL}/boardsSet/${user}`;
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

export const changeBoard = (data: IBoardWithId) => {
  const URL = `${API_URL}/boards/${data.id}`;
  const token = localStorage.getItem('user_token');
  return axios
    .put(URL, data.data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};

export const deleteBoard = (id: string) => {
  const URL = `${API_URL}/boards/${id}`;
  const token = localStorage.getItem('user_token');

  return axios
    .delete(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};
