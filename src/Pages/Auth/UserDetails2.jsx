import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router";
import FaceIcon from '../../assets/face.gif'
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../assets/logo.png";

export const UserDetails2 = () => {
  const [showFace, setShowFace] = useState(false);

  const handleFacialCapture = () => {
    setShowFace(true);
  };

  return (
    <>
      <div className="top-bar">
        <Link to="/user-details" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">6 / 9</p>
      </div>
      <div className="auth">
        <div className="container">
          <form>
            <div className="logo">
              <img src={logo} alt="SeaBank logo" />
            </div>
            <p>Nearly there... 😉</p>
            <p className="p-2">Kindly provide your details to creat account</p>

            {/* Facial Recognition */}
            <div className="inps">
              <label>Facial Recognition</label>
              {!showFace ? (
                <div
                  className="facial-input-wrapper"
                  onClick={handleFacialCapture}
                  style={{ position: "relative", cursor: "pointer" }}>
                  <input
                    type="text"
                    placeholder="Tap to scan face"
                    readOnly
                    style={{ paddingRight: "40px" }}
                  />
                  {/* Use the face scan icon */}
                  <img
                    src={FaceIcon}
                    alt="Face scan"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </div>
              ) : (
                <div className="captured-face" style={{ textAlign: "center" }}>
                  <img
                    src="https://i.pravatar.cc/60"
                    alt="User face"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "8px",
                    }}
                  />
                  <Link to="#" style={{ display: "block", color: "blue" }}>
                    Capture your facial recognition
                  </Link>
                </div>
              )}
            </div>

            {/* Residential Address */}
            <div className="inps">
              <label htmlFor="address">Residential Address</label>
              <textarea
                name="address"
                id="address"
                cols={100}
                placeholder="Enter your address"></textarea>
            </div>

            {/* State */}
            <div className="inps">
              <label htmlFor="state">State</label>
              <select id="state" name="state">
                <option value="">Select state</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
                {/* Add more as needed */}
              </select>
            </div>

            {/* LGA */}
            <div className="inps">
              <label htmlFor="lga">LGA</label>
              <select id="lga" name="lga">
                <option value="">Select LGA</option>
                <option value="ikeja">Ikeja</option>
                <option value="garki">Garki</option>
                {/* Add more as needed */}
              </select>
            </div>

            {/* Residency Type */}
            <div className="inps">
              <label htmlFor="residency">Residency Type (optional)</label>
              <select id="residency" name="residency">
                <option value="">Select residency type</option>
                <option value="owner">Home Owner</option>
                <option value="tenant">Tenant</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Link to="/user-details-3">
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
