import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import GroupInfo from '../components/detailComponents/GroupInfo';
import SwitchMain from '../components/detailComponents/SwitchMain';
// import { getDetailGroupApi } from '../apis/groupApi';
// import { useEffect } from 'react';
const Container = styled.div`
  height: calc(100vh - 10.5rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GroupDetailPage = () => {
  const { groupId } = useParams();

  // useEffect(() => {
  //   const getDetailGroup = async (groupUuid) => {
  //     try {
  //       const res = await getDetailGroupApi(groupUuid);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   getDetailGroup(groupUuid);
  // }, []);

  return (
    <Container>
      <GroupInfo />
      <SwitchMain groupId={groupId} />
    </Container>
  );
};

export default GroupDetailPage;
