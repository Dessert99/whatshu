import * as eventApi from '../apis/eventApi';
import { EventContext } from '../contexts/EventContext';
import { useContext } from 'react';

export const useParticipant = () => {
  const { updateParticipants } = useContext(EventContext);

  const getParticipants = async (eventId) => {
    const response = await eventApi.getParticipantsApi(eventId);
    updateParticipants(response.data.result);
  };

  const addParticipants = async (eventId) => {
    const response = await eventApi.addParticipantsApi(eventId);
    return response.status; //TODO: EventContext에 참가자 추가 로직을 만들지 고민
  };
  return { getParticipants, addParticipants };
};
