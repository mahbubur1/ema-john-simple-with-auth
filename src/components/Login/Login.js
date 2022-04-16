import React from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    signInWithEmailAndPassword(email,password)
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = event => {
    event.preventDefault();
  }
  return (
    <div className="from-container">
      <div>
        <h3 className="from-title">Login</h3>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            <p style={{color: 'red'}}>{error?.message}</p>
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p className="link-paragraph">
          New to Ema-John?
          <Link className="form-link" to="/signUp">
            Create New Account
          </Link>
        </p>
        <div className="line">
            <div className="line-color"></div>
            <p>Or</p>
            <div className="line-color"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
