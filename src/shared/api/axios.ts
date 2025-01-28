import axios from 'axios';

import { useUser } from '@/entities/user';

import { AuthToken } from '../lib/utils/auth-token-utils';

export const $API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});

$API.interceptors.request.use((config) => {
  if (config.headers) {
    const token = useUser.getState().authToken || AuthToken.getToken();

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
