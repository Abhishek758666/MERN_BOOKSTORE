import React, { createContext, useState } from "react";

export const userContext = createContext();

const Authuser = ({ children }) => {
  const [loggedUser, setloggedUser] = useState(
    JSON.parse(localStorage.getItem("User")) || null
  );

  return (
    <userContext.Provider value={[loggedUser, setloggedUser]}>
      {children}
    </userContext.Provider>
  );
};

export default Authuser;
