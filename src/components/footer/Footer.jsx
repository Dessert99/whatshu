import users from '../../assets/img/users.png';
import calendar from '../../assets/img/calendar.png';
import userCheck from '../../assets/img/userCheck.png';
import helpCircle from '../../assets/img/helpCircle.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--mainBg200);
  display: flex;
  align-items: center;

  //고정
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const IconBox = styled.div``;
const Img = styled.img`
  width: 2.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <IconBox>
          <Link to="/">
            <Img src={users} alt="유저" />
          </Link>
        </IconBox>
        <IconBox>
          <Link to="/calendar">
            <Img src={calendar} alt="일정" />
          </Link>
        </IconBox>
        <IconBox>
          <Link to="/userCheck">
            <Img src={userCheck} alt="친구" />
          </Link>
        </IconBox>
        <IconBox>
          <Link to="/helpCircle">
            <Img src={helpCircle} alt="도움" />
          </Link>
        </IconBox>
      </Wrapper>
    </Container>
  );
};

export default Footer;
