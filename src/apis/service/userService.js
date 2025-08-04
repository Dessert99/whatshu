import * as user from '../api/user';

export const userInfoService = async () => {
  try {
    const data = await user.getUser();
    const { id, name, role } = data.result;
    return { id, name, role };
  } catch (e) {
    console.error(e);
    throw e;
  }
};
