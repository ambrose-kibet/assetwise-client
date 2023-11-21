import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://assetwise.onrender.com/api/v1',
  withCredentials: true,
});
