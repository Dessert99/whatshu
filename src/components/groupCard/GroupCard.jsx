import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.article`
  border: solid var(--grey);
  border-radius: 10px;
  margin-top: 1rem;
`;
const Header = styled.header`
  margin-left: 1rem;
`;
const Name = styled.p`
  font-size: 1.5rem;

  margin-top: 1rem;
  margin-bottom: 0px;
`;
const Description = styled.p`
  font-size: 1rem;
  margin-top: 0px;
`;
const InfoWrapper = styled.section`
  display: flex;
  margin: 1rem;
  gap: 1rem;
`;
const Infor = styled.div``;
const InfoLabel = styled.p`
  font-size: 1rem;
  margin: 0px;
`;
const InfoValue = styled.p`
  font-size: 1.5rem;
  margin: 0px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 100%;
  background-color: transparent;

  padding: 1rem;
  margin: 1rem;

  color: var(--white);
  font-size: 1rem;

  border-radius: 10px;
  border: 1px solid var(--grey);

  &:hover {
    background-color: var(--mainBg100);
  }
`;

const GroupCard = (props) => {
  return (
    <Container>
      <Header>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Header>
      <InfoWrapper>
        <Infor>
          <InfoLabel>그룹원</InfoLabel>
          <InfoValue>{props.memberCount}</InfoValue>
        </Infor>
        <Infor>
          <InfoLabel>미 완료 이벤트</InfoLabel>
          <InfoValue>{props.todoCount}</InfoValue>
        </Infor>
        <Infor>
          <InfoLabel>완료 이벤트</InfoLabel>
          <InfoValue>{props.doneCount}</InfoValue>
        </Infor>
      </InfoWrapper>
      <Footer>
        <Link to={`/group/${props.groupUuid}`}>
          <Button>그룹 상세 보기</Button>
        </Link>
      </Footer>
    </Container>
  );
};

export default GroupCard;
