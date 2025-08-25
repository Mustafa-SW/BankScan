// FraudAlerts.jsx
import React from 'react';
import "./FraudAlerts.css";

const alerts = [
  {
    title: "Water Bill Update.apk Scam",
    description:
      "Victim in Chhatrapati Sambhajinagar lost ₹53.8 lakh after installing a fake Water Bill Update.apk via WhatsApp.",
  },
  {
    title: "Fake Banking Apps in Lucknow",
    description:
      "Two individuals created fake bank sites and apps; one victim lost ₹1.6 lakh after being lured via SMS/WhatsApp.",
  },
  {
    title: "Cheque Verification APK Scam in Dhanbad",
    description:
      "A malicious APK disguised as bounced cheque verification installed via WhatsApp caused a loss of ₹10.6 lakh.",
  },
  {
    title: "HDFC Bank APK Fraud Warning",
    description:
      "HDFC Bank cautions customers about APK scams impersonating officials for KYC, tax refund, or traffic fine updates.",
  },
  {
    title: "Traffic Fine APK Scam in Andhra Pradesh",
    description:
      "Users in Vizag and Vijayawada lost money after installing fake traffic fine APKs received via WhatsApp/SMS.",
  },
  {
    title: "Fake SBI REWARDZ.apk Malware Alert",
    description:
      "Rajasthan Police warn against the SBI REWARDZ.apk scam, which steals sensitive data via fake rewards app.",
  },
];

export default function FraudAlerts() {
  return (
    <div className="fraud-alerts-container">
      <h2>Recent Fake-APK Banking Fraud Alerts</h2>
      {alerts.map((alert, idx) => (
        <div key={idx} className="fraud-alert">
          <strong>{alert.title}</strong>
          <p>{alert.description}</p>
        </div>
      ))}
    </div>
  );
}
