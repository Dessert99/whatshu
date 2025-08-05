import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import GroupInfo from '../components/detailComponents/GroupInfo';
import SwitchMain from '../components/detailComponents/SwitchMain';
import { useState, useEffect } from 'react';
import { getGroupDetailService } from '../apis/service/groupService';

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

  //그룹 상세 페이지 조회
  useEffect(() => {
    (async () => {
      try {
        const info = await getGroupDetailService(groupId);
        setGroupInfo(info);
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <Container>
      <GroupInfo groupInfo={groupInfo} />
      <SwitchMain groupId={groupId} />
    </Container>
  );
};

export default GroupDetailPage;
