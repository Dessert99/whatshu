import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsc2poMTIzNEBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsInVzZXJJZCI6MiwiZXhwIjoxNzU0MjkyNjM5fQ.KxgNNMjstJmqjHNgd3MhL6mNArKGxXuI8yDr2OxLaQo';

const instance = axios.create({
  baseURL: 'https://api-dev.whatshu.com',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default instance;
