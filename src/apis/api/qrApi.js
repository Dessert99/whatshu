import instance from '../utils/axios';

export const createQRToken = (eventId) => {
  return instance.post(`/events/${eventId}/qrcode`, {});
};
