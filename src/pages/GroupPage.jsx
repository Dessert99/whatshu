import GroupCard from '../components/GroupCard';
import GroupModal from '../components/GroupModal';
import Button from '../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { useGroupQuery } from '../queries/useGroupQuery';

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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { data: groupList = [] } = useGroupQuery(isOpen);
  console.log('groupList', groupList);

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
                participantCount={group.participantCount}
                groupId={group.groupId}
                incompleteEventCount={group.incompleteEventCount}
                completedEventCount={group.completedEventCount}
              />
            );
          })}
        </GroupsWrapper>
      )}

      <GroupModal isOpen={isOpen} onClose={closeModal} />
    </Container>
  );
};

export default GroupPage;
