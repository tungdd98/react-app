import React from "react";
import { LayoutType } from "./types";

const DefaultLayout: React.FC<LayoutType> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default DefaultLayout;
