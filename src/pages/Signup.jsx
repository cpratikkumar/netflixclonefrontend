import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Signup.css";
function Signup() {
  const [secondInput, setSecondInput] = useState("second-input-hide");
  const getStarted = () => {
    setSecondInput("second-input");
  };

  return (
    <section className="signupBody">
      <Header />
      <div className="signup-inside-body">
        <div className="text-body">
          <h1>
            Unlimited movies, TV <br />
            shows and more
          </h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email ro create or restart membership
          </h6>
        </div>
        <div className="form">
          <input type="email" placeholder="Email Address" name="email" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={secondInput}
          />
          {secondInput === "second-input-hide" ? (
            <button onClick={getStarted} className="getStarted-button">
              Get Started
            </button>
          ) : null}
        </div>
        <button className="signup-button">Sign Up</button>
      </div>
    </section>
  );
}

export default Signup;
