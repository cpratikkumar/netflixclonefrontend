import React from "react";
import brandicon from "../assets/logo.png";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-body">
      <img src={brandicon} alt="brand-icon" />
      {location.pathname === "/login" ? (
        <button
          className="signup-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      ) : (
        <button
          className="login-button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default Header;
