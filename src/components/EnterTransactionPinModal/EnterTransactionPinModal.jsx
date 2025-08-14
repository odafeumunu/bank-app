import React, { useRef, useState, useEffect } from "react";
import "./EnterTransactionPinModal.css";
import { toast } from "react-toastify";

export const EnterTransactionPinModal = ({
  open,
  onClose,
  onSubmit,
  resetTrigger,
}) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Reset when modal opens OR resetTrigger changes
  useEffect(() => {
    if (open || resetTrigger) {
      setOtp(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  }, [open, resetTrigger]);

  const handleInput = (val) => {
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
      const finalPin = newOtp.join("");
      if (finalPin === "1234") {
        onSubmit?.();
      } else {
        toast.error("Incorrect Pin");
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }
  };

  if (!open) return null;

  return (
    <div className={`payment-cont open`}>
      <div className="inner inner-2">
        <div className="success-message">
          <h2>Enter Transaction Pin</h2>
          <p>Enter your 4-digit transaction pin to continue</p>
          <div className="otp-inputs">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="password"
                value={digit}
                readOnly
                ref={(el) => (inputRefs.current[idx] = el)}
              />
            ))}
          </div>
        </div>

        <div className="keypad-wrapper">
          <div className="custom-keypad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                className="key-btn"
                onClick={() => handleInput(num)}>
                {num}
              </button>
            ))}
            <button className="key-btn" onClick={() => handleInput("0")}>
              0
            </button>
            <button className="key-btn" onClick={() => handleInput("delete")}>
              ⌫
            </button>
          </div>
        </div>

        <div className="btn-but">
          <button className="send-btn close" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
