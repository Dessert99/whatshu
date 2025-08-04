import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import GroupInfo from '../components/detailComponents/GroupInfo';
import SwitchMain from '../components/detailComponents/SwitchMain';
import { getDetailGroup } from '../apis/api/group';
import { useState, useEffect, useCallback } from 'react';
const Container = styled.div`
  height: calc(100vh - 10.5rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GroupDetailPage = () => {
  const { groupId } = useParams();
  const [groupInfo, setGroupInfo] = useState({
    'groupId': '',
    'name': '',
    'description': '',
    'participantCount': '',
    'completedEventCount': '',
    'incompleteEventCount': '',
  });

  //TODO: 나중에 이름 바꿔야 함
  const getDetailGrouppp = useCallback(async () => {
    try {
      const res = await getDetailGroup(groupId);
      setGroupInfo(res.data.result);
    } catch (e) {
      console.error(e);
    }
  }, [groupId]);

  useEffect(() => {
    getDetailGrouppp();
  }, [getDetailGrouppp]);

  return (
    <Container>
      <GroupInfo groupInfo={groupInfo} />
      <SwitchMain groupId={groupId} />
    </Container>
  );
};

export default GroupDetailPage;
