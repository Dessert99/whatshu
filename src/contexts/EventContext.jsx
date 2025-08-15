import { useState, createContext } from 'react';

export const EventContext = createContext(null);

export const EventContextProvider = ({ children }) => {
  //이벤트 상태
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [participants, setParticipants] = useState([]);

  //) 선택된 이벤트
  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  //3) 참가자 조회
  const updateParticipants = (participants) => {
    setParticipants(participants);
  };

  return (
    <>
      <EventContext.Provider
        value={{
          events,
          setEvents,
          selectedEvent,
          participants,
          selectEvent,
          updateParticipants,
        }}>
        {children}
      </EventContext.Provider>
    </>
  );
};
