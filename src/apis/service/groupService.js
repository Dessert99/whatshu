import * as group from '../api/group';

export const getGroupService = async () => {
  try {
    const data = await group.getGroups();
    return data.result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postGroupService = async () => {};
