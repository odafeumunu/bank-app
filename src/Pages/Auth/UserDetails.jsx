import React from "react";
import "./Auth.css";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.png";

export const UserDetails = () => {
  return (
    <>
      <div className="top-bar">
        <Link to="/email-verification" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">5 / 9</p>
      </div>
      <div className="auth">
        <div className="container">
          <form>
            <div className="logo">
              <img src={logo} alt="SeaBank logo" />
            </div> 
            <p>Nearly there... 😉</p>
            <p className="p-2">
              Ensure the information you provide is linked with your BVN
            </p>

            <div className="inps">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div className="inps">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>

            <div className="inps">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Select your date of birth"
              />
            </div>

            <div className="inps">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="inps">
              <label htmlFor="referral">Referral Code (optional)</label>
              <input
                type="text"
                id="referral"
                name="referral"
                placeholder="Enter referral code"
              />
            </div>

            <Link to="/user-details-2">
              <button className="btn" style={{ marginTop: "30px" }}>
                Proceed
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
