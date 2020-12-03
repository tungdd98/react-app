import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import cookie from "js-cookie";
import axios from "utils/axios";
import { AuthContextType, AuthContextProviderType } from "../types";

export const AuthContext = createContext<AuthContextType>({
  isSignIn: false,
});

const AuthContextProvider = (props: AuthContextProviderType) => {
  const history = useHistory();
  axios(history);

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
