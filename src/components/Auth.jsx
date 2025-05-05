import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth-container">
      <h1>Login / Sign Up</h1>
      <button>Login</button>
      <button>Sign Up</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Auth;
