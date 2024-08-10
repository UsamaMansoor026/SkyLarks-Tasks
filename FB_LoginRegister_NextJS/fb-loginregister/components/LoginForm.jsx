import React from "react";

const LoginForm = ({ handleShowSignup }) => {
  return (
    <div className="loginForm">
      <form>
        <input
          type="text"
          placeholder="Email address or phone number"
          required
        />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login_btn">
          Login
        </button>

        <p>Forgotten Password?</p>

        <button
          onClick={handleShowSignup}
          type="button"
          className="create_acc_btn"
        >
          Create new account
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
