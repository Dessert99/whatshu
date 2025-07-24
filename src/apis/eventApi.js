import api from './api';

//이벤트 목록 조회
export const getEventsApi = () => {
  return api.get('/events');
};

//이벤트 상세 조회
export const getDetailEventApi = (eventId) => {
  return api.get(`/events/${eventId}`);
};

//이벤트 추가
export const createEventApi = (data) => {
  return api.post('/events', data);
};

//이벤트 참여자 목록 조회
export const getParticipantsApi = (eventId) => {
  return api.get(`/events/${eventId}/participants`);
};

//이벤트 참여자 추가
export const addParticipantsApi = (eventId) => {
  return api.post(`/events/${eventId}/participants`);
};
