import { API_URL } from '../../common/constants';
import axios from 'axios';

type SIGNUP_DATA = {
  name: string;
  login: string;
  password: string;
};

export const signup = async (data: SIGNUP_DATA) => {
  const URL = `${API_URL}/auth/signup`;
  try {
    const response = await axios.post(URL, data);
    return response;
  } catch (error) {
    return error;
  }
};
