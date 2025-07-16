import { useState, createContext, useEffect } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  // 상태1) 로그인 여부
  const [isLogin, setLogin] = useState(false);

  // 상태2) 유저 정보
  const [userInfo, setUserInfo] = useState({});

  // 상태3) 권한 정보
  const [roles, setRoles] = useState();

  // 로그인
  const login = () => {};

  // 로그아웃
  const logout = () => {};

  //로그인 세팅
  const loginSetting = (userData) => {};

  //로그아웃 세팅

  //권한 정보 세팅

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setLogin }}>{children}</LoginContext.Provider>
    </>
  );
};
