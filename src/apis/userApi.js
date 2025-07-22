import api from './api';

export const loginApi = () => {
  return api.get('/me');
};
