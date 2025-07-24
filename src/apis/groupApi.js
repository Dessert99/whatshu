import api from './api';

//전체 그룹 조회
export const getGroupsApi = () => {
  return api.get('/groups');
};

// 신규 그룹 생성
export const createGroupApi = (data) => {
  return api.post('/groups', data);
};

// 그룹 초대 링크 생성
export const createGroupInviteLinkApi = (groupUuid) => {
  return api.post(`/groups/${groupUuid}/invites`);
};

// 그룹 상세 조회
export const getDetailGroupApi = (groupUuid) => {
  return api.get(`/groups/${groupUuid}`);
};
