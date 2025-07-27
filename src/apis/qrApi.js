import api from './api';

export const createQRToken = (eventId) => {
  return api.post(`/events/${eventId}/qrcode`, {});
};
