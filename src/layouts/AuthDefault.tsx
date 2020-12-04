import React from "react";
import { LayoutType } from "./types";

const AuthDefault: React.FC<LayoutType> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default AuthDefault;
