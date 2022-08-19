import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState("0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788");

  useEffect(() => {
    setAccountAddress("0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788");
  }, [accountAddress]);

  return (
    <MyContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
