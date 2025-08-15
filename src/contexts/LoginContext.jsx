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
  return (
    <>
      <LoginContext.Provider value={{ isLogin, userInfo, setLogin, setUserInfo }}>{children}</LoginContext.Provider>
    </>
  );
};
