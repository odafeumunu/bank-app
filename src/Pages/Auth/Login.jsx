// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./Auth.css";
import logo from "../../assets/logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login check
    if (email === "test@gmail.com" && password === "Testing_123") {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/enable-face-verification");
      }, 2000);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="auth">
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="logo">
            <img src={logo} alt="SeaBank logo" />
          </div>
          <p>
            Hello <strong>Michael</strong> 👋
          </p>
          <p className="p-2">Kindly login to your account</p>

          <div className="inps">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inps">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          <p className="optional">
            New User? <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};
