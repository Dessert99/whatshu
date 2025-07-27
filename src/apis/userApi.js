import api from './api';

export const loginApi = () => {
  return api.get('/me');
};

export const authUpgradeApi = (data) => {
  return api.post('/auth/up', data);
};

export const logoutApi = () => {
  return api.post('/auth/logout', {});
};
