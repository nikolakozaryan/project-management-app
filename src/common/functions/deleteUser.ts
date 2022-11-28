import { API_URL } from '../../constants/API';
import axios from 'axios';

export const deleteUser = (id: string) => {
  const URL = `${API_URL}/users/${id}`;
  const token = localStorage.getItem('user_token');

  axios.delete(URL, { headers: { Authorization: `Bearer ${token}` } });
};
