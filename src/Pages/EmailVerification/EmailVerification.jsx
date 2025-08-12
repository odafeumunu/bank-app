import React, { useRef, useState, useEffect } from "react";
import "../../Pages/OtpPage/OtpPage.css";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

export const EmailVerification = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  // Handle OTP change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      setTimeout(() => {
        navigate("/user-details");  
      }, 100);
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="top-bar">
        <Link to="/verify-email" className="back-icon">
          <IoIosArrowBack size={24} />
        </Link>
        <p className="steps">4 / 9</p>
      </div>

      <div className="otp-container">
        <div className="container">
          <p>We sent an OTP to example@gmail.com</p>

          <div className="otp-inputs">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                ref={(el) => (inputRefs.current[idx] = el)}
              />
            ))}
          </div>

          <div className="timer">
            {timer > 0 ? (
              <p>Expires in 00:{timer < 10 ? `0${timer}` : timer}</p>
            ) : (
              <p style={{ color: "red" }}>OTP expired</p>
            )}
          </div>

          <div className="footer">
            <small>
              Didn’t receive OTP? <Link to="/user-details">Click here</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
