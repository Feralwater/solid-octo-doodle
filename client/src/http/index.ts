import axios from 'axios';
import { refresh } from 'services/AuthService';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  } else {
    request.headers = {
      ...request.headers,
      Authorization: '',
    };
  }
  return request;
});

api.interceptors.response.use((response) => response, async (error) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/refresh-token`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return await api.request(originalRequest);
    } catch (e) {
      console.log(e);
    }
  }
  throw error;
});

export default api;
