import axios from 'axios';
import { useUser } from '@/entities/user';

export const $API = axios.create({
  baseURL: `${import.meta.env.VITE_API_PROXY_URL}`,
  withCredentials: true,
});

$API.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${useUser.getState().authToken}`;
  }

  return config;
});
