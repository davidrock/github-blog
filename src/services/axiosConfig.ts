import axios from 'axios';

export const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Authorization: import.meta.env.GH_TOKEN },
});

service.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_AUTH_TOKEN;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
