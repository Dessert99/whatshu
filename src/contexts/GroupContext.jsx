import { createContext, useState } from 'react';

export const GroupContext = createContext(null);

export const GroupContextProvider = ({ children }) => {
  
  return (
    <>
      <GroupContext.Provider>{children}</GroupContext.Provider>
    </>
  );
};
