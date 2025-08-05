import * as user from '../api/user';

export const userInfoService = async () => {
  const data = await user.getUser();
  const { id, name, role } = data.result;
  return { id, name, role };
};
