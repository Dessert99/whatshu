import instance from '../utils/axios';

//전체 그룹 조회
export const getGroups = async () => {
  const res = await instance.get('/groups');
  return res.data;
};

// 신규 그룹 생성
export const postGroup = async (data) => {
  const res = await instance.post('/groups', data);
  return res.data;
};

// 그룹 초대 링크 생성 //TODO:계층분리
export const createGroupInviteLinkApi = async (groupUuid) => {
  try {
    const res = await instance.post(`/groups/${groupUuid}/invites`);
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// 그룹 상세 조회
export const getDetailGroup = async (groupId) => {
  const res = await instance.get(`/groups/${groupId}`);
  return res.data;
};
