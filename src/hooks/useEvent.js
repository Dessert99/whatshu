import * as eventApi from '../apis/eventApi';
import { EventContext } from '../contexts/EventContext';
import { useContext } from 'react';

export const useEvent = () => {
  const { updateEvents, selectEvent } = useContext(EventContext);

  const getEvents = async () => {
    const response = await eventApi.getEventsApi();
    updateEvents(response.data.result);
  };

  const getDetailEvent = async (eventId) => {
    const response = await eventApi.getDetailEventApi(eventId);
    selectEvent(response.data.result);
  };

  const createEvent = async (data) => {
    const response = await eventApi.createEventApi(data);
    return response.status; // TODO: 스웨거 보고 이벤트 생성 로직을 만들지 그냥 조회를 할지 결정
  };

  return {
    getEvents,
    getDetailEvent,
    createEvent,
  };
};
