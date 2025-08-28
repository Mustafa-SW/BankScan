// ResultsSection.jsx
import React, { useState } from "react";
import "./ResultsSection.css"; // ✅ Reuse the same styles

export default function ResultsSection({ fileName }) {
  const [scanResults, setScanResults] = useState(null);

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

  // ✅ Status label based on score
  const getStatus = (score) => {
    if (score <= 29) return { label: "✅ Safe", className: "status-safe" };
    if (score <= 59) return { label: "⚠️ Suspicious", className: "status-suspicious" };
    return { label: "❌ Malicious", className: "status-malicious" };
  };

  return (
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

              {/* ✅ Status Indicator */}
              <p className={`status ${getStatus(scanResults.score).className}`}>
                {getStatus(scanResults.score).label}
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
  );
}