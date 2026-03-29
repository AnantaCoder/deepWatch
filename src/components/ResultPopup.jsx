import React from "react";
import { X } from "lucide-react";

export default function ResultPopup({ isOpen, onClose, result }) {
  if (!isOpen) return null;

  const isFake = result?.fakeScore > 40;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        
        {/* Close Button */}
        <button onClick={onClose} style={styles.closeBtn}>
          <X size={24} />
        </button>

        <h2 style={styles.title}>SCAN RESULT</h2>

        <div style={styles.resultBox}>
          <p style={styles.label}>Prediction:</p>
          <p style={{
            ...styles.value,
            color: isFake ? "#FF4D4D" : "#00C853"
          }}>
            {isFake ? "FAKE ⚠️" : "REAL ✅"}
          </p>
        </div>

        <div style={styles.resultBox}>
          <p style={styles.label}>{isFake ? "Fake Score:" : "Real Score:"}</p>
          <p style={styles.value}>
            {isFake 
              ? (result?.fakeScore)?.toFixed(2)
              : (result?.realScore)?.toFixed(2)}%
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  popup: {
    background: "#FFF",
    border: "4px solid #000",
    padding: "2rem",
    width: "90%",
    maxWidth: "400px",
    position: "relative",
    boxShadow: "8px 8px 0px #000",
    textAlign: "center",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  title: {
    fontWeight: 900,
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
  },
  resultBox: {
    marginBottom: "1rem",
  },
  label: {
    fontWeight: 700,
    fontSize: "0.9rem",
    textTransform: "uppercase",
  },
  value: {
    fontWeight: 900,
    fontSize: "1.4rem",
  },
};