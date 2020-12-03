import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import cookie from "js-cookie";
import AuthenticateApi from "../../apis/authenticate";
import { AuthContext } from "../../AuthProvider";

interface LoginProps {}

const Login: React.FC = (props: LoginProps) => {
  const accessToken = useSelector(
    (state: any) => state.authenticate.accessToken
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSignin } = useContext(AuthContext);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
  };

  if (isSignin) {
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

export default Login;
