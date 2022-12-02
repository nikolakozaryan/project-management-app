import { API_URL } from '../../constants/API';
import axios, { AxiosError } from 'axios';
import { IColumnCreateData, Identificators, IEditColumnData } from './interface';

export const getColumnsList = (boardId: string) => {
  const token = localStorage.getItem('user_token');
  const URL = `${API_URL}/boards/${boardId}/columns`;

  return axios
    .get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => {
        console.log(resp, 'resp');
        return resp.data;
      },
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};
export const changeColumnsList = (id: string) => {
  const token = localStorage.getItem('user_token');
  const URL = `${API_URL}/columnsSet?userId=${id}`;

  return axios
    .patch(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => {
        console.log(resp, 'resp');
        return resp.data;
      },
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};

export const createNewColumn = (data: IColumnCreateData) => {
  const token = localStorage.getItem('user_token');
  const { order, title } = data;
  const URL = `${API_URL}/boards/${data.boardId}/columns`;

  return axios
    .post(
      URL,
      { order, title },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};

export const deleteOneColumn = (ids: Identificators) => {
  const token = localStorage.getItem('user_token');
  const { boardId, columnId } = ids;
  const URL = `${API_URL}/boards/${boardId}/columns/${columnId}`;

  return axios
    .delete(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};

export const editOneColumn = (data: IEditColumnData) => {
  const token = localStorage.getItem('user_token');
  const { boardId, columnId, order, title } = data;
  const URL = `${API_URL}/boards/${boardId}/columns/${columnId}`;

  return axios
    .put(
      URL,
      { title, order },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then(
      (resp) => resp.data,
      (err: AxiosError) => Promise.reject(err.response?.data)
    );
};
