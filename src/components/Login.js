import React from "react";

import Inputs from "./input";

function Login() {
  return (
    <form className="form">
      <Inputs type="text" placeholder = "Username" />
      <Inputs type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
