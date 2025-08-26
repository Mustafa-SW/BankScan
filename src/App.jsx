// App.jsx
import React, { useState, useRef } from "react";
import "./App.css";
import FraudAlerts from "./components/FraudAlerts";
import ResultsSection from "./components/ResultsSection"; 

export default function App() {
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h1>BankScan</h1>
        <h3>Fake Banking APK Detector</h3>
      </div>

      {/* ✅ Main Layout */}
      <div className="main-layout">
        {/* Left side → Upload + Results */}
        <div className="left-side">
          {/* Upload Section */}
          <div className="upload-box" onClick={handleBoxClick}>
            <p>Click here or drag & drop an APK file to upload</p>
            <input
              type="file"
              accept=".apk"
              onChange={handleFileUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>

          {/* ✅ Results Section in separate file */}
          <ResultsSection fileName={fileName} />
        </div>

        {/* ✅ Fraud Alerts Section on the right */}
        <FraudAlerts />
      </div>
    </>
  );
}
