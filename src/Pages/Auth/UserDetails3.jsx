import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.png";

export const UserDetails3 = () => {
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleToggle = () => setBiometricEnabled(!biometricEnabled);

  return (
    <>
      <div className="top-bar">
        <Link to="/user-details-2" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">7 / 9</p>
      </div>

      <div className="auth">
        <div className="container">
          <form>
            <div className="logo">
              <img src={logo} alt="SeaBank logo" />
            </div>
            <p>Told you, you are done... 😁</p>
            <p className="p-2">Kindly input your password</p>

            {/* Password */}
            <div className="inps">
              <label htmlFor="password-1">Create Password</label>
              <input
                type="password"
                name="password-1"
                id="password-1"
                placeholder="XXXXXXXXX"
              />
            </div>

            {/* Confirm Password */}
            <div className="inps">
              <label htmlFor="password-2">Confirm Password</label>
              <input
                type="password"
                name="password-2"
                id="password-2"
                placeholder="XXXXXXXXX"
              />
            </div>

            {/* Biometric Toggle */}
            <div
              className="inps"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}>
              <label>Enable Fingerprints/Face ID</label>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={biometricEnabled}
                  onChange={handleToggle}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* Agreement Checkbox */}
            <div
              className="inps"
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}>
              <input
                type="checkbox"
                id="agreement"
                style={{
                  fontSize: "0.8rem",
                  width: "fit-content",
                }}
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label
                htmlFor="agreement"
                style={{
                  fontSize: "0.8rem",
                }}>
                I have read and agreed to the <Link to="/terms">terms</Link> and{" "}
                <Link to="">privacy policy</Link>
              </label>
            </div>

            <Link to="/create-transaction-pin">
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
