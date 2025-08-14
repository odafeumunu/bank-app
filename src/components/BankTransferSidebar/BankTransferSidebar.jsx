import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaBuilding } from "react-icons/fa";

const banks = [
  { value: "", label: "--Select Bank--" },
  { value: "Access", label: "Access Bank" },
  { value: "FBN", label: "First Bank of Nigeria" },
  { value: "UBA", label: "United Bank for Africa" },
  { value: "GTB", label: "Guaranty Trust Bank" },
  { value: "Zenith", label: "Zenith Bank" },
  { value: "FCMB", label: "First City Monument Bank" },
  { value: "Union", label: "Union Bank" },
  { value: "Sterling", label: "Sterling Bank" },
  { value: "Fidelity", label: "Fidelity Bank" },
  { value: "Wema", label: "Wema Bank" },
  { value: "Heritage", label: "Heritage Bank" },
  { value: "Keystone", label: "Keystone Bank" },
  { value: "Polaris", label: "Polaris Bank" },
  { value: "Unity", label: "Unity Bank" },
  { value: "Providus", label: "Providus Bank" },
  { value: "SunTrust", label: "SunTrust Bank" },
  { value: "Jaiz", label: "Jaiz Bank" },
  { value: "Taj", label: "Taj Bank" },
];

export const BankTransferSidebar = ({
  transferOpen,
  setTransferOpen,
  onSubmit,
  accountNum,
  setAccountNum,
  selectedBank,
  setSelectedBank,
  accountName,
  setAccountName,
  resetTrigger,
  mode = "other",
}) => {
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (mode === "same") {
      setSelectedBank("SecBank");
    }
  }, [mode, setSelectedBank]);

  useEffect(() => {
    if (resetTrigger) {
      setAccountNum("");
      setAccountName("");
      setSelectedBank(mode === "same" ? "SecBank" : "");
    }
  }, [resetTrigger, mode, setAccountNum, setAccountName, setSelectedBank]);

 const handleVerify = () => {
   if (accountNum.length === 10 && selectedBank !== "") {
     setIsVerifying(true);
     setTimeout(() => {
       setAccountName("Michael Johnson"); // mock verified name
       setIsVerifying(false);
     }, 500);
   } else {
     setAccountName("");
   }
 };

  useEffect(() => {
    handleVerify();
  }, [accountNum, selectedBank]);

  const isFormValid =
    accountNum.length === 10 && selectedBank !== "" && accountName;


  return (
    <div
      className={`sidebar ${transferOpen ? "open" : ""}`}
      style={{ paddingBottom: "200px" }}>
      <div className="sidebar-header">
        <FaChevronLeft size={20} onClick={() => setTransferOpen(false)} />
        <span>
          Transfer to {mode === "same" ? "SecBank Account" : "Other Banks"}
        </span>
      </div>

      <div className="note-input-wrapper">
        <label htmlFor="account_number">Account Number</label>
        <input
          type="text"
          id="account_number"
          value={accountNum}
          onChange={(e) =>
            setAccountNum(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          placeholder="Enter 10-digit account number"
        />
      </div>

      <div className="note-input-wrapper">
        <label htmlFor="bank">Bank</label>
        {mode === "other" ? (
          <select
            id="bank"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}>
            {banks.map((bank) => (
              <option key={bank.value} value={bank.value}>
                {bank.label}
              </option>
            ))}
          </select>
        ) : (
          <input type="text" value="SecBank" readOnly />
        )}
      </div>

      {isVerifying ? (
        <p style={{ fontStyle: "italic", color: "#888" }}>
          Verifying account...
        </p>
      ) : (
        accountName && (
          <p style={{ color: "#22c55e", fontWeight: "bold", marginTop: "5px" }}>
            {accountName} ✅
          </p>
        )
      )}

      <div className="sidebar-menu" style={{ marginTop: "20px" }}>
        <div className="sidebar-item">
          <div className="item-left">
            <FaBuilding />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Check Bank Transfer Efficiency</span>
            </div>
          </div>
          <FaChevronRight />
        </div>
      </div>

      <button
        className="send-btn"
        style={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={() => {
          onSubmit({
            account: accountNum,
            name: accountName,
            bank: mode === "same" ? "SecBank" : selectedBank,
          });
          setTransferOpen(false);
        }}>
        Proceed
      </button>
    </div>
  );
};
