import React, { useState } from "react";
import "./App.css";

function ResultsSection({ uploadedFile }) {
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScan = () => {
    // Fake scan results generator
    const fakeScore = Math.floor(Math.random() * 101); // 0-100
    const fakeReasons = [
      "Suspicious permissions requested",
      "APK is not signed properly",
      "Detected use of obfuscated code",
      "Unusual network activity patterns",
      "Embedded trackers found",
    ];

    // Randomly select 2–3 reasons
    const selectedReasons = fakeReasons.sort(() => 0.5 - Math.random()).slice(0, 3);

    setScanResult({
      score: fakeScore,
      reasons: selectedReasons,
    });
    setScanned(true);
  };

  return (
    <div className="results-section">
      <h2>Results Section</h2>
      {uploadedFile ? (
        <>
          {!scanned ? (
            <button className="scan-btn" onClick={handleScan}>
              Scan File
            </button>
          ) : (
            <div className="scan-results">
              <h3>Scan Results for {uploadedFile.name}</h3>
              <p><strong>Reward Points:</strong> {scanResult.score} / 100</p>
              <ul>
                {scanResult.reasons.map((reason, index) => (
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

export default ResultsSection;
