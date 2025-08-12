import React from "react";
import "./Auth.css";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.png";


export const VerifyEmail = () => {
  return (
    <>
      <div className="top-bar">
        <Link to="/otp-verification" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">3 / 9</p>
      </div>
      <div className="auth">
        <div className="container">
          <form>
            <div className="logo">
              <img src={logo} alt="SeaBank logo" />
            </div>
            <p>Hello 👋</p>
            <p className="p-2">Kindly provide your email for verification</p>

            <div className="inps" style={{ marginBottom: "50px" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <Link to="/email-verification">
              <button className="btn">Proceed</button>
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
