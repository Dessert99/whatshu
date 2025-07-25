import styled from 'styled-components';
import Button from '../Button';
import EventModal from '../EventModal';
import { useState, useContext, useEffect, useCallback } from 'react';
import EventCard from '../EventCard';
import { EventContext } from '../../contexts/EventContext';
import { getEventsApi } from '../../apis/eventApi';

const Container = styled.div`
  padding-bottom: 5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NoMemberWrapper = styled.div`
  height: calc(100vh - 30rem);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoMember = styled.p`
  opacity: 0.6;
`;

const EventPanel = (props) => {
  const { events, setEvents } = useContext(EventContext);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // 이벤트 조회 함수
  const getEvents = useCallback(async () => {
    try {
      const res = await getEventsApi();
      setEvents(res.data.result);
    } catch (e) {
      console.error(e);
    }
  }, [setEvents]);
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={openModal}>+ 새 이벤트</Button>
      </ButtonWrapper>

      {events.every((event) => event.groupId !== Number(props.groupId)) ? (
        //TODO: every 활용 메모
        <NoMemberWrapper>
          <NoMember>이벤트 추가해 주세요</NoMember>
        </NoMemberWrapper>
      ) : (
        <EventWrapper>
          {events
            .filter((event) => event.groupId === Number(props.groupId))
            .map((event) => (
              <EventCard
                key={event.id}
                name={event.name}
                description={event.description}
                startAt={event.startAt}
                endAt={event.endAt}
                eventId={event.id}
              />
            ))}
        </EventWrapper>
      )}
      <EventModal isOpen={isOpen} onClose={closeModal} getEvents={getEvents} groupId={props.groupId} />
    </Container>
  );
};

export default EventPanel;
