import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteTypes } from "../types";

const PrivateRoute: React.FC<RouteTypes> = ({
  component: Component,
  ...rest
}) => {
  const accessToken = useSelector(
    (state: any) => state.authenticate.accessToken
  );
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        accessToken ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
