// import GroupCard from '../components/groupCard/GroupCard';
import GroupModal from '../components/GroupModal';
import Button from '../components/Button';
import styled from 'styled-components';
import { useState } from 'react';

// const dummy = [
//   {
//     title: 'GDG on Campus HUFS',
//     subTitle: '한국외대의 GDGoC',
//     memberCount: 50,
//     todoCount: 0,
//     doneCount: 0,
//   },
//   {
//     title: 'HUFS N-CUBE 학회',
//     subTitle: '한국외대 컴공 소속 학회',
//     memberCount: 30,
//     todoCount: 30,
//     doneCount: 2,
//   },
//   {
//     title: '차세대 보안리더 양성 프로그램',
//     subTitle: '한국정보기술연구원',
//     memberCount: 100,
//     todoCount: 1232515,
//     doneCount: 1,
//   },
//   {
//     title: '대한민국',
//     subTitle: '대한민국?',
//     memberCount: 50000000000,
//     todoCount: 100,
//     doneCount: 2,
//   },
// ];
const Container = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const GroupList = styled.div``;

const GroupPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={openModal}>+ 새 그룹</Button>
      </ButtonWrapper>
      <GroupList></GroupList>

      <GroupModal isOpen={isOpen} onClose={closeModal} />
    </Container>
  );
};

export default GroupPage;
