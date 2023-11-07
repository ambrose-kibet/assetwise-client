import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  withCredentials: true,
});
