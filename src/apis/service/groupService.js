import * as group from '../api/group';

export const getGroupService = async () => {
  const { result } = await group.getGroups();
  return result;
};

export const postGroupService = async (info) => {
  const data = await group.postGroup(info);
  const isSuccess = data.isSuccess;
  return isSuccess;
};

export const getGroupDetailService = async (groupId) => {
  const data = await group.getDetailGroup(groupId);
  const result = data.result;
  return result;
};
