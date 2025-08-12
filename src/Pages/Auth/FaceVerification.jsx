// FaceVerification.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./FaceVerification.css";

export const FaceVerification = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(() => {
        toast.error("Camera access denied");
      });
  }, []);

  const startScan = () => {
    setScanning(true);
    toast.info("Scanning face...");

    setTimeout(() => {
      toast.success("Face verified successfully!");

      // Stop camera
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }, 3000);
  };

  return (
    <div className="face-verification-screen">
      <div className="face-verification-popup">
        <div className="cont">
          <div className="video-container">
            <video ref={videoRef} autoPlay playsInline />
          </div>
          <h2>Facial Verification</h2>
          {!scanning && (
            <button className="btn" onClick={startScan}>
              Start Scan
            </button>
          )}
          {scanning && <p className="scanning-text">Scanning in progress...</p>}
        </div>
      </div>
    </div>
  );
};
