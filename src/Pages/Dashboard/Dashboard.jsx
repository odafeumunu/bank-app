import React, { useMemo, useState } from "react";
import {
  FaBell,
  FaBars,
  FaEye,
  FaEyeSlash,
  FaCopy,
  FaExchangeAlt,
  FaCreditCard,
  FaChartPie,
  FaChevronLeft,
  FaChevronRight,
  FaUniversity,
  FaUserFriends,
  FaWallet,
  FaSearch,
  FaUserShield,
  FaPlusCircle,
  FaMobileAlt,
  FaFileInvoiceDollar,
  FaBuilding,
  FaBolt,
  FaQuestionCircle,
  FaBriefcase,
  FaTimes,
  FaSignOutAlt,
  FaTv,
  FaHistory,
  FaPiggyBank,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import "./Dashboard.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router"; // ✅ fixed import
import promo from "../../assets/promo.jpeg";
import img1 from "../../assets/img1.jpg";
import first from "../../assets/first.png";
import gtb from "../../assets/gtb.png";
import uba from "../../assets/uba.png";
import { EnterTransactionPinModal } from "../../components/EnterTransactionPinModal/EnterTransactionPinModal";
import { BankTransferSidebar } from "../../components/BankTransferSidebar/BankTransferSidebar";

// ────────────────────────────────────────────────────────────────────────────────
// Static Menus & Seed Data
// ────────────────────────────────────────────────────────────────────────────────
const menuItems = [
  { label: "Account Tiers", icon: <FaUserShield size={20} /> },
  { label: "Add Money", icon: <FaPlusCircle size={20} /> },
  { label: "Airtime & Data", icon: <FaMobileAlt size={20} /> },
  { label: "Card", icon: <FaCreditCard size={20} /> },
  { label: "Bills Payment", icon: <FaFileInvoiceDollar size={20} /> },
  { label: "Business Registration", icon: <FaBuilding size={20} /> },
  { label: "Electricity", icon: <FaBolt size={20} /> },
  { label: "Get Help", icon: <FaQuestionCircle size={20} /> },
  { label: "Job Post", icon: <FaBriefcase size={20} /> },
  { label: "Loans", icon: <FaMoneyCheckAlt size={20} /> },
  { label: "Refer & Earn", icon: <FaUserFriends size={20} /> },
  { label: "Savings", icon: <FaPiggyBank size={20} /> },
  { label: "Send Money / Transfer", icon: <FaExchangeAlt size={20} /> },
  { label: "Transaction History", icon: <FaHistory size={20} /> },
  { label: "TV", icon: <FaTv size={20} /> },
  { label: "Logout", icon: <FaSignOutAlt size={20} />, action: "logout" },
];

const recents = [
  { name: "John Doe", account: "0123456789", bank: "First Bank", img: first },
  { name: "Jane Smith", account: "9876543210", bank: "GTBank", img: gtb },
];

const favorites = [
  { name: "Michael", account: "1234567890", bank: "UBA", img: uba },
];

const profileItems = [
  {
    label: "Activate Account",
    icon: <FaUserShield size={20} />,
    small: "Manage your accounts",
  },
  {
    label: "Statements & Reports",
    icon: <FaUserShield size={20} />,
    small: "Download monthly statements",
  },
  {
    label: "Get Help",
    icon: <FaUserShield size={20} />,
    small: "Get supports or send feedback",
  },
  {
    label: "Security",
    icon: <FaUserShield size={20} />,
    small: "Protect yourself from intruders",
  },
  {
    label: "Transaction Limits",
    icon: <FaUserShield size={20} />,
    small: "How much can you spend and receive",
  },
  {
    label: "About Us",
    icon: <FaUserShield size={20} />,
    small: "About our contract with you",
  },
  {
    label: "FAQs",
    icon: <FaUserShield size={20} />,
    small: "Learn more about SecBank",
  },
];

// Utility – currency format
const formatNGN = (n) => `₦${Number(n || 0).toLocaleString()}`;

// ────────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────────
export const Dashboard = () => {
  // UI Toggles
  const [showBalance, setShowBalance] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isTransferHubOpen, setIsTransferHubOpen] = useState(false); // main transfer sidebar
  const [showOtherBankTransfer, setShowOtherBankTransfer] = useState(false);
  const [showSameBankTransfer, setShowSameBankTransfer] = useState(false);
  const [amountPanelOpen, setAmountPanelOpen] = useState(false); // keypad amount panel
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [confirmSendOpen, setConfirmSendOpen] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Core State
  const [balance, setBalance] = useState(100000);
  const [spent, setSpent] = useState(0); // default 0, auto-updates on transfers
  const [earned, setEarned] = useState(0); // default 0, auto-updates on top-ups
  const [accountNumber] = useState("0123456789");

  // Transfer drafting state
  const [activeTab, setActiveTab] = useState("recents");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [accountName, setAccountName] = useState("");
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [amountText, setAmountText] = useState(""); // raw keypad text
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  // ────────────────────────────────────────────────────────────────────────────
  // Derived computed values
  const amountValue = useMemo(() => Number(amountText || 0), [amountText]);
  const canSend = useMemo(
    () => amountValue > 0 && amountValue <= balance,
    [amountValue, balance]
  );
  

  const confirmItems = useMemo(
    () => [
      {
        label: "Transfer from",
        rightText: accountNumber,
        smallText: "Personal Account",
      },
      {
        label: "Beneficiary Account",
        rightText: selectedBeneficiary?.account || "Select a beneficiary",
        smallText: selectedBeneficiary?.name || "",
      },
      {
        label: "Beneficiary Bank",
        rightText: selectedBeneficiary?.bank || "—",
      },
      { label: "Narration", rightText: note || "—" },
      { label: "Transaction fees", rightText: formatNGN(0) },
      { label: "Amount", rightText: formatNGN(amountValue) },
    ],
    [accountNumber, selectedBeneficiary, note, amountValue]
  );

  const handleTransferSuccess = () => {
    // Close modals
    setAmountPanelOpen(false);
    setShowOtherBankTransfer(false);
    setShowSameBankTransfer(false);

    // Trigger reset
    setResetTrigger((prev) => prev + 1);
  };
  

  // ────────────────────────────────────────────────────────────────────────────
  // Helpers
  const resetDraft = () => {
    setSelectedBeneficiary(null);
    setActiveTab("recents");
    setAmountText("");
    setNote("");
  };

  const resetUI = () => {
    setSidebarOpen(false);
    setProfileOpen(false);
    setIsTransferHubOpen(false);
    setShowOtherBankTransfer(false);
    setAmountPanelOpen(false);
    setConfirmOpen(false);
    setPinOpen(false);
    setConfirmSendOpen(false);
  };

  const resetEverything = () => {
    resetUI();
    resetDraft();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    toast.info("Account number copied");
  };

  const handleMenuClick = (item) => {
    if (item.action === "logout") {
      localStorage.removeItem("isAuthenticated");
      toast.info("Logged out successfully!");
      navigate("/login");
    } else {
      toast.info(`You clicked "${item.label}"`);
    }
  };

  const handleKeypadClick = (value) => {
    setAmountPanelOpen(true);
    if (value === "del") return setAmountText((prev) => prev.slice(0, -1));
    // block leading zeros beyond a single zero
    setAmountText((prev) => (prev === "0" ? String(value) : prev + value));
  };

  const openConfirm = () => {
    if (amountValue <= 0) return toast.error("Enter an amount.");
    if (amountValue > balance) return toast.error("Insufficient balance.");
    setConfirmOpen(true);
  };

  const performTransfer = () => {
    // Deduct & record spend
    setBalance((b) => b - amountValue);
    setSpent((s) => s + amountValue);

    // Show success UI
    setConfirmOpen(false);
    setConfirmSendOpen(true);
  };

  const closeSuccessAndReset = () => {
    // Close success screen and reset entire flow/state
    setConfirmSendOpen(false);
    resetEverything();
    toast.success("Transaction successful");
  };

  const quickTopUp = () => {
    const topUp = 5000;
    setBalance((b) => b + topUp);
    setEarned((e) => e + topUp);
    toast.success(`Top up ${formatNGN(topUp)} added`);
  };

  const transferMenu = [
    {
      label: "Send to Other Banks",
      icon: <FaUniversity size={20} />,
      onClick: () => setShowOtherBankTransfer(true),
    },
    {
      label: "Send with my SecBank Account",
      icon: <FaWallet size={20} />,
      onClick: () => setShowSameBankTransfer(true),
    },
    {
      label: "Send to Beneficiary Account",
      icon: <FaUserFriends size={20} />,
      onClick: () => toast.info("Coming soon"),
    },
  ];

  // ────────────────────────────────────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────────────────────────────────────
  return (
    <div className="dashboard">
      {/* SIDEBAR – MAIN MENU */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaChevronLeft size={20} onClick={() => setSidebarOpen(false)} />
          <span>Menu</span>
        </div>

        <div className="sidebar-search">
          <FaSearch size={20} />
          <input type="search" placeholder="Search..." />
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item, idx) => (
            <div
              className="sidebar-item"
              key={idx}
              onClick={() => handleMenuClick(item)}>
              <div className="item-left">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <FaChevronRight />
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR – TRANSFER HUB */}
      <div className={`sidebar ${isTransferHubOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaChevronLeft onClick={() => setIsTransferHubOpen(false)} />
          Transfer Money
        </div>

        <div className="sidebar-menu">
          {transferMenu.map((item, idx) => (
            <div className="sidebar-item" key={idx} onClick={item.onClick}>
              <div className="item-left">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <FaChevronRight />
            </div>
          ))}
        </div>

        {/* Toggle Recents / Favorites */}
        <div className="transfer-toggle">
          <button
            className={activeTab === "recents" ? "active" : ""}
            onClick={() => setActiveTab("recents")}>
            Recent
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            onClick={() => setActiveTab("favorites")}>
            Favorites
          </button>
        </div>

        {/* Beneficiary list */}
        <div className="sidebar-menu">
          {(activeTab === "recents" ? recents : favorites).map((item, idx) => (
            <div
              className={`sidebar-item ${
                selectedBeneficiary?.account === item.account ? "selected" : ""
              }`}
              key={idx}
              onClick={() => setSelectedBeneficiary(item)}>
              <div className="item-left">
                <div className="imageItem">
                  <img src={item.img} alt={item.name} className="avatar-img" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{item.name}</span>
                  <small style={{ fontSize: "0.75rem", color: "#000" }}>
                    {item.bank} | {item.account}
                  </small>
                </div>
              </div>
              <FaChevronRight />
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR – PROFILE */}
      <div className={`sidebar ${profileOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaChevronLeft size={20} onClick={() => setProfileOpen(false)} />
          <span>Profile Account</span>
        </div>

        <div className="profile-top">
          <div className="image-pro">
            <img src={img1} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Michael Akintude</p>
            <small>Show Personal Details</small>
          </div>
        </div>

        <div className="sidebar-menu">
          {profileItems.map((item, idx) => (
            <div className="sidebar-item" key={idx}>
              <div className="item-left">
                {item.icon}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{item.label}</span>
                  <small style={{ fontSize: "0.75rem", color: "#000" }}>
                    {item.small}
                  </small>
                </div>
              </div>
              <FaChevronRight />
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR – AMOUNT & SEND */}
      <div
        className={`sidebar ${amountPanelOpen ? "open" : ""}`}
        style={{ paddingBottom: "200px" }}>
        <div className="sidebar-header">
          <FaChevronLeft size={20} onClick={() => setAmountPanelOpen(false)} />
          <span>Transfer Money</span>
        </div>

        <div className="amount-input-wrapper">
          <input
            type="text"
            className="naira-input"
            readOnly
            value={amountText ? formatNGN(amountValue) : ""}
            placeholder="₦0.00"
          />
          <small className="balance-text">
            NGN Balance: {formatNGN(balance)}
          </small>
        </div>

        <div className="note-input-wrapper">
          <input
            type="text"
            placeholder="Narration (Optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button className="send-btn" disabled={!canSend} onClick={openConfirm}>
          Send Money
        </button>

        {/* KEYPAD */}
        <div className="keypad">
          <div className="keypad-row">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
              <button key={num} onClick={() => handleKeypadClick(num)}>
                {num}
              </button>
            ))}
          </div>
          <div className="keypad-row">
            <button
              style={{ backgroundColor: "#f44336", color: "#fff" }}
              onClick={() => handleKeypadClick("del")}>
              ⌫
            </button>
          </div>
        </div>
      </div>

      {/* SAME BANK TRANSFER FLOW (form lives inside this component) */}
      <BankTransferSidebar
        transferOpen={showSameBankTransfer}
        setTransferOpen={setShowSameBankTransfer}
        accountNum={accountNum}
        setAccountNum={setAccountNum}
        resetTrigger={resetTrigger}
        selectedBank={selectedBank}
        setSelectedBank={setSelectedBank}
        accountName={accountName}
        setAccountName={setAccountName}
        mode="same"
        onSubmit={(beneficiary) => {
          setSelectedBeneficiary(beneficiary);
          setShowOtherBankTransfer(false);
          setAmountPanelOpen(true);
        }}
      />

      {/* OTHER BANK TRANSFER FLOW (form lives inside this component) */}
      <BankTransferSidebar
        transferOpen={showOtherBankTransfer}
        setTransferOpen={setShowOtherBankTransfer}
        accountNum={accountNum}
        setAccountNum={setAccountNum}
        resetTrigger={resetTrigger}
        selectedBank={selectedBank}
        setSelectedBank={setSelectedBank}
        accountName={accountName}
        setAccountName={setAccountName}
        mode="other"
        onSubmit={(beneficiary) => {
          setSelectedBeneficiary(beneficiary);
          setShowOtherBankTransfer(false);
          setAmountPanelOpen(true);
        }}
      />

      {/* CONFIRM PAYMENT */}
      <div className={`payment-cont ${confirmOpen ? "open" : ""}`}>
        <div className="inner">
          <div className="sidebar-header">
            <span style={{ width: "100%", textAlign: "center" }}>
              Confirm Payment
            </span>
            <FaTimes size={20} onClick={() => setConfirmOpen(false)} />
          </div>
          <li>
            <small>{new Date().toLocaleString()}</small>
          </li>

          <div className="sidebar-menu">
            {confirmItems.map((item, idx) => (
              <div className="sidebar-item item-2" key={idx}>
                <div className="item-left">
                  <span>{item.label}</span>
                </div>
                <div
                  className="item-right"
                  style={{ display: "flex", flexDirection: "column" }}>
                  <span>{item.rightText}</span>
                  {item.smallText && (
                    <small style={{ color: "#333", fontSize: "0.7rem" }}>
                      {item.smallText}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="send-btn" onClick={() => setPinOpen(true)}>
            Confirm Payment
          </button>
          <button
            className="send-btn close"
            onClick={() => setConfirmOpen(false)}>
            Cancel
          </button>
        </div>
      </div>

      {/* PIN MODAL */}
      <EnterTransactionPinModal
        open={pinOpen}
        resetTrigger={resetTrigger}
        onClose={() => setPinOpen(false)}
        onSubmit={() => {
          setPinOpen(false);
          performTransfer();
          handleTransferSuccess();
        }}
      />

      {/* SUCCESS MODAL */}
      <div className={`payment-cont ${confirmSendOpen ? "open" : ""}`}>
        <div className="inner inner-2">
          <div className="success-message">
            <div className="checkmark-wrapper">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25" fill="#22c55e" />
                <path
                  className="checkmark-check"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="5"
                  d="M14 27l7 7 17-17"
                />
              </svg>
            </div>
            <h2>Successful</h2>
            <p>Transaction successful</p>
          </div>
          <div className="btn-but">
            <button
              className="send-btn"
              onClick={() => toast.info("Sharing receipt...")}>
              Share Receipt
            </button>
            <button className="send-btn close" onClick={closeSuccessAndReset}>
              Close
            </button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="dashboard-header">
        <div className="cont">
          <div className="dashboard-header-top">
            <div className="left">
              <img
                src={img1}
                alt="profile"
                className="profile-img"
                onClick={() => setProfileOpen(true)}
              />
              <span className="greeting">Hello, Michael</span>
            </div>
            <div className="right">
              <FaBell className="icon" />
              <FaBars className="icon" onClick={() => setSidebarOpen(true)} />
            </div>
          </div>

          <div className="balance-center">
            <div className="main-balance">
              {showBalance ? formatNGN(balance) : "₦••••"}
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
              <h4>{formatNGN(spent)}</h4>
            </div>
            <div>
              <p className="label">Earned</p>
              <h4>{formatNGN(earned)}</h4>
            </div>
          </div>

          <div className="account-row">
            <div className="account-info">
              <span className="account-number">{accountNumber}</span>
              <FaCopy className="copy-icon" onClick={handleCopy} />
            </div>
            <button className="top-up-btn" onClick={quickTopUp}>
              Top up
            </button>
          </div>
        </div>
      </div>

      {/* ACTIVITY SECTION */}
      <div className="activity-section">
        <div className="cont">
          <h3>Activity</h3>
          <div className="activity-icons">
            <div
              className="activity-item"
              onClick={() => setIsTransferHubOpen(true)}>
              <div className="icon-act">
                <FaExchangeAlt size={17} />
              </div>
              <p>Transfer</p>
            </div>
            <div className="activity-item">
              <div className="icon-act">
                <FaCreditCard size={17} />
              </div>
              <p>My Card</p>
            </div>
            <div className="activity-item">
              <div className="icon-act">
                <FaChartPie size={17} />
              </div>
              <p>Insight</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETE VERIFICATION SECTION */}
      <div className="verification-section">
        <div className="cont">
          <h3>Complete Verification</h3>
          <div className="verification-header">
            <strong className="verification-title">75%</strong>
            <small>7 of 10 completed</small>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }} />
          </div>

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
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
};
