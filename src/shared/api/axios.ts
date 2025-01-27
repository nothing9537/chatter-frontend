import axios from 'axios';

export const $API = axios.create({
  baseURL: `${import.meta.env.VITE_API_PROXY_URL}`,
  withCredentials: true,
});
