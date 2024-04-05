import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Login.css";
function Login() {
  return (
    <section className="loginBody">
      <Header />
      <div className="login-inside-body">
        <div className="login-input">
          <h3>Login</h3>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="email"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="password"
            />
            <button className="login-button">Log In</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
