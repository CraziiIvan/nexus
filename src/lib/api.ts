import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crypto-wallet-django.up.railway.app/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/api/token/refresh/', { refreshToken });

        localStorage.setItem('accessToken', response.data.access);

        return api(originalRequest);
      } catch (error) {
        console.error('Refresh token error:', error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;