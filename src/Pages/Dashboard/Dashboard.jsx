// Dashboard.jsx
import React, { useState } from "react";
import {
  FaBell,
  FaBars,
  FaEye,
  FaEyeSlash,
  FaCopy,
  FaExchangeAlt,
  FaCreditCard,
  FaChartPie,
} from "react-icons/fa";
import "./Dashboard.css";
import { Link } from "react-router";
import promo from "../../assets/promo.jpeg"
import img1 from "../../assets/img1.jpg";

export const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 7234;
  const accountNumber = "0123456789";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied!");
  };

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div className="cont">
          <div className="dashboard-header-top">
            <div className="left">
              <img src={img1} alt="profile" className="profile-img" />
              <span className="greeting">Hello, Michael</span>
            </div>
            <div className="right">
              <FaBell className="icon" />
              <FaBars className="icon" />
            </div>
          </div>

          <div className="balance-center">
            <div className="main-balance">
              {showBalance ? `₦${balance.toLocaleString()}` : "₦••••"}
              <span
                onClick={() => setShowBalance(!showBalance)}
                className="eye-icon">
                {showBalance ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <p className="balance-label">Available balance</p>
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="dashboard-card">
        <div className="cont">
          <div className="balance-overview">
            <div>
              <p className="label">Spent</p>
              <h4>₦2,340</h4>
            </div>
            <div>
              <p className="label">Earned</p>
              <h4>₦4,560</h4>
            </div>
          </div>

          <div className="account-row">
            <div className="account-info">
              <span className="account-number">{accountNumber}</span>
              <FaCopy className="copy-icon" onClick={handleCopy} />
            </div>
            <button className="top-up-btn">Top up</button>
          </div>
        </div>
      </div>

      {/* ACTIVITY SECTION */}
      <div className="activity-section">
        <div className="cont">
          <h3>Activity</h3>
          <div className="activity-icons">
            <div className="activity-item">
              <FaExchangeAlt size={37} />
              <p>Transfer</p>
            </div>
            <div className="activity-item">
              <FaCreditCard size={37} />
              <p>My Card</p>
            </div>
            <div className="activity-item">
              <FaChartPie size={37} />
              <p>Insight</p>
            </div>
          </div>
        </div>

        {/* COMPLETE VERIFICATION SECTION */}
        <div className="verification-section">
          <div className="cont">
            <h3>Complete Verification</h3>
            <div className="verification-header">
              <div className="verification-title">75%</div>
              <small>7 of 10 completed</small>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }} />
            </div>

            {/* Item: Personal Information */}
            <div className="verification-item">
              <div className="icon-wrapper">
                <FaCreditCard size={15} />
              </div>
              <div className="item-text">
                <strong>Personal Information</strong>
                <p>Update your basic personal info</p>
                <Link to="/dashboard">Continue</Link>
              </div>
            </div>
            <hr />

            {/* Item: Verification */}
            <div className="verification-item">
              <div className="icon-wrapper">
                <FaChartPie size={15} />
              </div>
              <div className="item-text">
                <strong>Verification</strong>
                <p>Upload a valid government-issued ID</p>
              </div>
            </div>
            <hr />

            {/* Item: Confirm Email */}
            <div className="verification-item">
              <div className="icon-wrapper">
                <FaExchangeAlt size={15} />
              </div>
              <div className="item-text">
                <strong>Confirm Email</strong>
                <p>Verify your email address</p>
              </div>
            </div>
          </div>
        </div>

        {/* NEWS AND PROMOS */}
        <div className="promos-section">
          <div className="cont">
            <h3>News & Promos</h3>
            <img src={promo} alt="promo banner" className="promo-banner" />
            <div className="invite-box">
              <h4>Invite your friends</h4>
              <p>Refer your friends and earn ₦500 for each referral!</p>
              <Link to="/dashboard">Invite Now</Link>
            </div>
          </div>
        </div>

        <div className="cont">
          <hr
            style={{
              border: "3px solid blue",
              maxWidth: "150px",
              borderRadius: "5px",
              margin: "30px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};
