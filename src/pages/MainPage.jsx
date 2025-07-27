import styled from 'styled-components';
import myIcon from '../assets/img/myIcon.png';
import { useEffect, useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { loginApi, logoutApi } from '../apis/userApi';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: calc(100vh - 10.5rem);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div``;
const MyInfoBox = styled.div`
  text-align: center;
`;
const Img = styled.img``;
const Name = styled.p`
  margin: 0;
`;
const Description = styled.p`
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.6;
`;

const LoginButton = styled.button`
  width: 9rem;
  height: 50px;
  background-color: var(--subBg200);
  border-radius: 20px;
  font-family: var(--buttonFont);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  width: 13rem;
  height: 2rem;
  background-color: var(--mainBg500);
  border-radius: 30px;
  font-family: var(--buttonFont);
  font-weight: bold;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const MainPage = () => {
  const { userInfo, isLogin, setLogin, setUserInfo } = useContext(LoginContext);

  useEffect(() => {
    const login = async () => {
      try {
        const res = await loginApi();
        const { id, name, role } = res.data.result;
        setUserInfo({
          'id': id,
          'name': name,
          'role': role,
        });
        setLogin(true);
      } catch (e) {
        console.error(e);
      }
    };
    login();
  }, [setUserInfo, setLogin]);

  const handleLogout = async () => {
    try {
      const res = await logoutApi();
      console.log(res);
      setUserInfo(null);
      setLogin(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          {isLogin ? (
            <>
              <MyInfoBox>
                <Img src={myIcon} />
                <Name>
                  {userInfo.name}님
                  <br /> 안녕하세요!
                </Name>
              </MyInfoBox>
              <Description>{userInfo.role}으로 로그인 되었습니다.</Description>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>
          ) : (
            <Link to="/login">
              <LoginButton>로그인 해주세요</LoginButton>
            </Link>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default MainPage;
