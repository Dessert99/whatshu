import { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  //로그인 여부
  const [isLogin, setLogin] = useState(false);

  //권한 정보

  //로그인 세팅?  이게 뭐지

  //권한 정보 세팅

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setLogin }}>{children}</LoginContext.Provider>
    </>
  );
};
