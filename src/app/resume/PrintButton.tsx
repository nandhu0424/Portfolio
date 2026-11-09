"use client";

export default function PrintButton() {
    return (
        <div className="no-print" style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 50, display: "flex", gap: "0.5rem" }}>
            <button
                onClick={() => window.print()}
                style={{
                    background: "#F94D00",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(249,77,0,0.3)",
                }}
            >
                🖨️ Print / Download PDF
            </button>
            <a
                href="/"
                style={{
                    background: "#fff",
                    color: "#0F172A",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
            >
                ← Back
            </a>
        </div>
    );
}
