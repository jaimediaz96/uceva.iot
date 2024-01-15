import { createContext, useEffect, useState } from "react";

const UcevaIotContext = createContext();

function UcevaIotProvider({ children }) {
  const [account, setAccount] = useState({});

  useEffect(() => {

  }, []);

  return (
    <UcevaIotContext.Provider value={{
      account,
      setAccount
    }}>
      {children}
    </UcevaIotContext.Provider>
  );
}

export { UcevaIotProvider, UcevaIotContext };