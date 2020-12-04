import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import cookie from "js-cookie";
import AuthApi from "../../apis/auth";
import { LoginType } from "../../types";

const Login: React.FC<LoginType> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = useSelector(
    (state: any) => state.authenticate.accessToken
  );

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    const res = await AuthApi.login({ email, password });
    if (res.success) {
      cookie.set("token", res.token || "");
    }
  };

  if (accessToken) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
