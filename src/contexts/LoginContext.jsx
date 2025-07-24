import { createContext } from 'react';
import { useState } from 'react';

export const LoginContext = createContext(null);

export const LoginContextProvider = ({ children }) => {
  // // 상태
  const [isLogin, setLogin] = useState(false);

  const [userInfo, setUserInfo] = useState({
    'id': '???',
    'name': '???',
    'role': '???',
  });

  // 로그인세팅

  // const logoutSetting = (userData) => {};

  return (
    <>
      <LoginContext.Provider value={{ isLogin, userInfo, setLogin, setUserInfo }}>{children}</LoginContext.Provider>
    </>
  );
};
