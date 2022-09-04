import { useContext } from "react";
import { UserContext } from "../context";
import { NavLink } from "react-router-dom";
import * as React from 'react';

function LoginButton() {
  const ctx = useContext(UserContext);

  const handleLogout = (() => {
    const elementIndex = ctx.users.findIndex(
      (item) => item.email === "" && item.password === ""
    );
    ctx.users.splice(elementIndex, 1);
    ctx.users.splice(0, 0, {
      name: "",
      email: "",
      password: "",
      balance: null,
    });
    ctx.log = false;
  },[]);

  return ctx.log ? (
    <NavLink
      to="/logout"
      onClick={() => handleLogout()}
      className="btn btn-primary rounded-pill ms-4"
    >
      Logout
    </NavLink>
  ) : (
    <NavLink to="/login" className="btn btn-primary rounded-pill ms-4">
      Login
    </NavLink>
  );
}

export default LoginButton;
