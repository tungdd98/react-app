import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import { RouteTypes } from "../types";

const PrivateRoute: React.FC<RouteTypes> = ({
  component: Component,
  ...rest
}) => {
  const { isSignIn } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignIn ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
