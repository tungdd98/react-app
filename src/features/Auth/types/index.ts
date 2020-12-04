import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

export type AuthContextType = {
  isSignIn: boolean;
};

export type AuthContextProviderType = {
  children: JSX.Element;
};

export type RouteTypes = {
  path: string;
  component: ComponentType<RouteComponentProps>;
  exact?: boolean;
  private?: boolean;
};

export type SignInType = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
  success: boolean;
  message: string;
};

export type LoginType = {
  history: History;
};
