import React, { createContext, useState, useEffect } from "react";
import cookie from "js-cookie";
import { AuthContextType, AuthContextProviderType } from "../types";

export const AuthContext = createContext<AuthContextType>({
  isSignIn: false,
});

const AuthContextProvider = (props: AuthContextProviderType) => {
  const [isSignIn, setSignIn] = useState(false);

  useEffect(() => {
    setSignIn(cookie.get("token") ? true : false);
  }, []);

  return (
    <AuthContext.Provider value={{ isSignIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
