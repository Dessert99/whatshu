import styled from 'styled-components';
const Container = styled.article`
  margin: 0;
  padding: 0;
`;
const Header = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
const Name = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;
const Description = styled.p`
  font-size: 1rem;
  margin-top: 0px;
`;
const InfoWrapper = styled.section`
  display: flex;
  gap: 3rem;
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

const GroupInfo = () => {
  return (
    <Container>
      <Header>
        <Name>GDG</Name>
        <Description>개발동아리</Description>
      </Header>
      <InfoWrapper>
        <Infor>
          <InfoLabel>그룹원</InfoLabel>
          <InfoValue>1</InfoValue>
        </Infor>
        <Infor>
          <InfoLabel>미 완료 이벤트</InfoLabel>
          <InfoValue>20</InfoValue>
        </Infor>
        <Infor>
          <InfoLabel>완료 이벤트</InfoLabel>
          <InfoValue>30</InfoValue>
        </Infor>
      </InfoWrapper>
    </Container>
  );
};

export default GroupInfo;
