import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});
export default api;
