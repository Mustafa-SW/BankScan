// App.jsx
import React, { useState, useRef } from "react";
import "./App.css";
import FraudAlerts from "./components/FraudAlerts"; // ✅ Import the FraudAlerts component

export default function App() {
  const [fileName, setFileName] = useState(null);
  const [scanResults, setScanResults] = useState(null); // ✅ To store fake scan results
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setScanResults(null); // reset results on new upload
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  // ✅ Fake scan logic
  const handleScan = () => {
    const fakeScore = Math.floor(Math.random() * 101); // 0–100
    const fakeReasons = [
      "Suspicious permissions requested",
      "Unverified developer signature",
      "APK size unusually small",
      "Embedded URLs found",
      "High risk of data theft",
    ];
    const selectedReasons = fakeReasons
      .sort(() => 0.5 - Math.random())
      .slice(0, 2); // pick 2 random reasons

    setScanResults({ score: fakeScore, reasons: selectedReasons });
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

          {/* Result Section */}
          <div className="result">
            <h2>Results</h2>
            {fileName ? (
              <>
                <p className="file-name">Selected: {fileName}</p>

                {/* ✅ Show Scan button when file is uploaded */}
                <button className="scan-btn" onClick={handleScan}>
                  Scan File
                </button>

                {/* ✅ Show fake results once scan is done */}
                {scanResults && (
                  <div className="scan-results">
                    <p>
                      <strong>Risk Score:</strong> {scanResults.score}/100
                    </p>
                    <p>
                      <strong>Reasons:</strong>
                    </p>
                    <ul>
                      {scanResults.reasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p>No file uploaded yet.</p>
            )}
          </div>
        </div>

        {/* ✅ Fraud Alerts Section on the right */}
        <FraudAlerts />
      </div>
    </>
  );
}
