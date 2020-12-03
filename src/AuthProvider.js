import React, { createContext, useEffect, useState } from "react";
import cookie from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    setIsSignin(cookie.get("token") ? true : false);
  }, []);
  return (
    <AuthContext.Provider value={{ isSignin }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
