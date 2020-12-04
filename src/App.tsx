import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cookie from "js-cookie";
import { setAccessToken } from "features/Auth/authSlice";
import store from "store";
import Home from "features/Home/pages/Home";
import Login from "features/Auth/pages/Login/Login";
import Register from "features/Auth/pages/Register/Register";
import PrivateRoute from "features/Auth/components/PrivateRoute";

store.dispatch(setAccessToken(cookie.get("token") || null));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
