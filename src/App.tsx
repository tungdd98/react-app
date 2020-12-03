import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "features/Home/pages/Home";
import Login from "features/Auth/pages/Login/Login";
import Register from "features/Auth/pages/Register/Register";
import AuthContextProvider from "features/Auth/components/Auth";
import PrivateRoute from "features/Auth/components/PrivateRoute";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Suspense>
    </AuthContextProvider>
  );
};

export default App;
