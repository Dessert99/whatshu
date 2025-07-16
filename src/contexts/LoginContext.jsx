import { useState, createContext, useEffect } from 'react';

export const LoginContext = createContext({ value: 'default' });

export const LoginContextProvider = ({ children }) => {
  // 상태
  const [isLogin, setLogin] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const [roles, setRoles] = useState();

  //세팅
  const loginSetting = (userData) => {};

  const logoutSetting = (userData) => {};

  //권한 정보 세팅

  return (
    <>
      <LoginContext.Provider value={{ isLogin }}>{children}</LoginContext.Provider>
    </>
  );
};
