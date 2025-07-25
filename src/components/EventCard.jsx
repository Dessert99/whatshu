import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.article`
  border: solid var(--grey);
  border-radius: 10px;

  padding: 1rem;
`;
const Title = styled.header`
  margin-bottom: 1rem;
`;
const Name = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
`;
const Description = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;
const TimeBox = styled.div`
  margin-bottom: 1rem;
`;
const Start = styled.p`
  font-size: 1rem;
  margin: 0px;
`;
const End = styled.p`
  font-size: 1rem;
  margin: 0px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;

  color: var(--white);
  font-size: 1rem;

  border-radius: 10px;
  border: 1px solid var(--grey);

  &:hover {
    background-color: var(--mainBg100);
  }
`;

const EventCard = (props) => {
  return (
    <Container>
      <Title>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Title>
      <TimeBox>
        <Start>{props.startAt}</Start>
        <End>{props.endAt}</End>
      </TimeBox>
      <ButtonBox>
        <Link to={`/events/${props.eventId}`}>
          <Button>이벤트 상세 보기</Button>
        </Link>
      </ButtonBox>
    </Container>
  );
};

export default EventCard;
