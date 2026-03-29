import React from "react";
import { X, AlertTriangle } from "lucide-react";

export default function ErrorPopup({ isOpen, onClose, errorMessage }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        
        {/* Close Button */}
        <button onClick={onClose} style={styles.closeBtn}>
          <X size={24} />
        </button>

        <AlertTriangle size={48} color="#FF6B6B" style={{ marginBottom: "1rem" }} />

        <h2 style={styles.title}>ERROR</h2>

        <div style={styles.resultBox}>
          <p style={styles.label}>Message:</p>
          <p style={styles.value}>
            {errorMessage || "An unexpected error occurred while communicating with the model."}
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    color: "#FF6B6B",
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
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#333",
  },
};
