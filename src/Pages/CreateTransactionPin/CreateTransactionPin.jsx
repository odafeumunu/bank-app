import React, { useRef, useState } from "react";
import "../../Pages/OtpPage/OtpPage.css";
import "./CreateTransactionPin.css";
import { Link, useNavigate } from "react-router";
import { MdFingerprint } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export const CreateTransactionPin = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleKeypadInput = (val) => {
    if (val === "delete") {
      const lastFilled = [...otp].reverse().findIndex((d) => d !== "");
      if (lastFilled !== -1) {
        const newOtp = [...otp];
        const indexToClear = 3 - lastFilled;
        newOtp[indexToClear] = "";
        setOtp(newOtp);
        inputRefs.current[indexToClear]?.focus();
      }
      return;
    }

    const nextIndex = otp.findIndex((digit) => digit === "");
    if (nextIndex === -1) return;

    const newOtp = [...otp];
    newOtp[nextIndex] = val;
    setOtp(newOtp);
    inputRefs.current[nextIndex]?.focus();

    if (nextIndex === 3) {
      setTimeout(() => navigate("/login"), 100);
    }
  };

  return (
    <>
      <div className="top-bar">
        <Link to="/user-details-3" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">8 / 9</p>
      </div>

      <div className="otp-container">
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "30px",
          }}>
          <p>Create 4-Digits Transaction Pin</p>

          <div className="otp-inputs">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                value={digit}
                readOnly
                ref={(el) => (inputRefs.current[idx] = el)}
              />
            ))}
          </div>

          <div className="keypad-wrapper">
            <div className="custom-keypad">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                <button
                  key={num}
                  className="key-btn"
                  onClick={() => handleKeypadInput(num)}>
                  {num}
                </button>
              ))}

              <button
                className="key-btn"
                onClick={() => alert("Biometric Clicked")}>
                <MdFingerprint size={24} />
              </button>

              <button className="key-btn" onClick={() => handleKeypadInput("0")}>
                0
              </button>

              <button
                className="key-btn"
                onClick={() => handleKeypadInput("delete")}>
                ⌫
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
