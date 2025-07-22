import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getDetailGroupApi } from '../apis/groupApi';
import { useEffect } from 'react';

const GroupDetailPage = () => {
  const { groupUuid } = useParams();

  useEffect(() => {
    const getDetailGroup = async (groupUuid) => {
      try {
        const res = await getDetailGroupApi(groupUuid);
      } catch (e) {
        console.error(e);
      }
    };
    getDetailGroup(groupUuid);
  }, []);

  return (
    <div>
      <h1>디테일 페이지 입니다.</h1>
    </div>
  );
};

export default GroupDetailPage;
