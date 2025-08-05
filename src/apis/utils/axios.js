import axios from 'axios';

const token = '';

const instance = axios.create({
  baseURL: 'https://api-dev.whatshu.com',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default instance;
