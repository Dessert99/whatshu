import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.whatshu.com',
  withCredentials: true,
});
export default api;
