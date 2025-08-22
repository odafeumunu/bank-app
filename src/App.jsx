import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


// Pages
import { HomePage } from "./Pages/HomePage/HomePage";
import { Login } from "./Pages/Auth/Login";
import { SignUp } from "./Pages/Auth/SignUp";
import { OtpPage } from "./Pages/OtpPage/OtpPage";
import { VerifyEmail } from "./Pages/Auth/VerifyEmail";
import { EmailVerification } from "./Pages/EmailVerification/EmailVerification";
import { UserDetails } from "./Pages/Auth/UserDetails";
import { UserDetails2 } from "./Pages/Auth/UserDetails2";
import { UserDetails3 } from "./Pages/Auth/UserDetails3";
import { CreateTransactionPin } from "./Pages/CreateTransactionPin/CreateTransactionPin";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { FaceVerification } from "./Pages/Auth/FaceVerification";
import { EnableFaceVerification } from "./Pages/Auth/EnableFaceVerification";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <ToastContainer style={{zIndex: 99999}} />
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp-verification" element={<OtpPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/user-details-2" element={<UserDetails2 />} />
          <Route path="/user-details-3" element={<UserDetails3 />} />

          <Route
            path="/create-transaction-pin"
            element={<CreateTransactionPin />}
          />

          <Route
            path="/enable-face-verification"
            element={<EnableFaceVerification />}
          />
          <Route path="/face-verification" element={<FaceVerification />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
