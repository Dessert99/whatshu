import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.whatshu.com',
  timeout: 5000,
  withCredentials: true,
});
export default api;
