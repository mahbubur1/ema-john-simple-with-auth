import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "../Login/Login.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

    const navigate= useNavigate();
    if(user){
      navigate('/shop');
    }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password and confirm password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="from-container">
      <div>
        <h3 className="from-title">Sign Up</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error}</p>
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="link-paragraph">
          Already have an Account?
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
