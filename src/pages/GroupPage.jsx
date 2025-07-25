import GroupCard from '../components/groupCard/GroupCard';
import GroupModal from '../components/GroupModal';
import Button from '../components/Button';
import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import * as api from '../apis/groupApi';

const Container = styled.div`
  padding-bottom: 5rem;
`;
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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //그룹 조회 함수
  const getGroups = useCallback(async () => {
    try {
      const res = await api.getGroupsApi();
      setGroupList(res.data.result);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getGroups();
  }, [getGroups]);

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
        <GroupsWrapper>
          {groupList.map((group) => {
            return (
              <GroupCard
                key={group.groupId}
                name={group.name}
                description={group.description}
                memberCount={1}
                groupId={group.groupId}
                todoCount={50}
                doneCount={40}
              />
            );
          })}
        </GroupsWrapper>
      )}

      <GroupModal isOpen={isOpen} onClose={closeModal} getGroups={getGroups} />
    </Container>
  );
};

export default GroupPage;
