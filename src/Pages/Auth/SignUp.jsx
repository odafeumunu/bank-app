// SignUp.jsx
import React from "react";
import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import "./Auth.css";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API logic here if needed
    navigate("/otp-verification");
  };

  return (
    <>
      <div className="top-bar">
        <span></span>
        <p className="steps">1/ 9</p>
      </div>
      <div className="auth">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="logo">
              <img src={logo} alt="SeaBank logo" />
            </div>
            <p>Hello 👋</p>
            <p className="p-2">
              Kindly provide your details to create an account
            </p>

            <div className="inps" style={{ marginBottom: "50px" }}>
              <label htmlFor="phone">Mobile No.</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="08000000000"
              />
            </div>

            <Link to="/otp-verification">
              <button type="submit" className="btn">
                Proceed
              </button>
            </Link>

            <p className="optional">
              Already a user? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
