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
    return response.status;
  };

  return {
    getEvents,
    getDetailEvent,
    createEvent,
  };
};
