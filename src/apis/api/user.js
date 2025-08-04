import instance from '../utils/axios';

export const getUser = async () => {
  try {
    const res = await instance.get('/me');
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
export const postAuthUpgrade = async (data) => {
  try {
    const res = await instance.post('/auth/up', data);
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postLogout = async () => {
  try {
    const res = await instance.post('/auth/logout', {});
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
