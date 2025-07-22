import GroupCard from '../components/groupCard/GroupCard';
import GroupModal from '../components/GroupModal';
import Button from '../components/Button';
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import * as api from '../apis/groupApi';
import { EventContext } from '../contexts/EventContext';
import { getEventsApi } from '../apis/eventApi';

const Container = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const GroupsWrapper = styled.div``;
const NoMemberWrapper = styled.div`
  height: calc(100vh - 20rem);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoMember = styled.p`
  opacity: 0.6;
`;

const GroupPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const { events, setEvents } = useContext(EventContext);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const res = await api.getGroupsApi();
        setGroupList(res.data.result);
      } catch (e) {
        console.error(e);
      }
    };
    getGroups();
  }, []);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await getEventsApi();
        setEvents(res.data.result);
      } catch (e) {
        console.error(e);
      }
    };
    getEvents();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={openModal}>+ 새 그룹</Button>
      </ButtonWrapper>

      {groupList.length === 0 ? (
        <NoMemberWrapper>
          <NoMember>그룹을 추가해 주세요</NoMember>
        </NoMemberWrapper>
      ) : (
        <GroupsWrapper>{groupList.map((group) => {})}</GroupsWrapper>
      )}

      <GroupModal isOpen={isOpen} onClose={closeModal} />
    </Container>
  );
};

export default GroupPage;
