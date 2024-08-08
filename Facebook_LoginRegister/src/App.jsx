import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import FB from "./assets/fb.svg";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignup = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <div className="app">
        <div className="left_protion">
          <div className="img_wrapper">
            <img src={FB} alt="" />
          </div>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right_portion">
          <LoginForm
            showSignUp={showSignUp}
            handleShowSignup={handleShowSignup}
          />
          <p>
            <a href="/">Create a page</a> for a celebrity, brand or business
          </p>
        </div>
      </div>

      {/*  */}
      {showSignUp && <SignUpForm handleShowSignup={handleShowSignup} />}
    </>
  );
};

export default App;
