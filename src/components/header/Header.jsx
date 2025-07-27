import logo from '../../assets/img/logo.png';
import setting from '../../assets/img/setting.png';
import notification from '../../assets/img/notification.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//관리자
// import { useContext } from 'react';
// import { LoginContext } from '../../contexts/LoginContext';
// import { authUpgradeApi } from '../../apis/userApi';

const Container = styled.div`
  background-color: var(--mainBg200);
  height: 5rem;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  height: 3rem;
`;
const IconBox = styled.div``;

const Font = styled.span`
  font-size: 2rem;
  font-family: var(--titleFont);
`;

const Img = styled.img`
  width: 2.5rem;
`;

const Header = () => {
  //관리자
  // const { userInfo, setUserInfo } = useContext(LoginContext);

  return (
    <Container>
      <Wrapper>
        <IconBox>
          <Img src={setting} alt="set" />
        </IconBox>
        <Link to="/">
          <IconBox>
            <Img src={logo} alt="로고" />
            <Font>WhatShu</Font>
          </IconBox>
        </Link>
        <IconBox>
          <Img src={notification} alt="알림" />
        </IconBox>
      </Wrapper>
    </Container>
  );
};

export default Header;
