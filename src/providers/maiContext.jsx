import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [divHeight, setDivHeight] = useState(2777);

  return (
    <MyContext.Provider value={{ divHeight, setDivHeight }}>
      {children}
    </MyContext.Provider>
  );
};
