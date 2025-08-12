// EnableFaceVerification.jsx
import React from "react";
import { useNavigate } from "react-router";
import "./FacePrompt.css";
import faceSvg from "../../assets/face.gif";

export const EnableFaceVerification = () => {
  const navigate = useNavigate();

  const handleEnable = () => {
    navigate("/face-verification");
  };

  return (
    <div className="face-prompt">
      <div className="popup">
        <div className="cont">
          <img src={faceSvg} alt="Face Scan" className="face-svg" />
          <h2>Enable Facial Verification</h2>
          <p>Secure your login with a quick face scan.</p>
          <button className="btn" onClick={handleEnable}>
            Enable Now
          </button>
        </div>
      </div>
    </div>
  );
};
