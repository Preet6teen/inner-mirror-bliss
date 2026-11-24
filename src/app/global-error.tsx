"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0C0517", color: "#FAF7F2", fontFamily: "sans-serif", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ maxWidth: "480px", textAlign: "center", border: "1px solid rgba(212, 175, 55, 0.3)", borderRadius: "1rem", padding: "2rem", backgroundColor: "#180B2E" }}>
          <p style={{ color: "#D4AF37", fontSize: "0.875rem", letterSpacing: "2px" }}>|| श्री स्वामी समर्थ ||</p>
          <h1 style={{ fontSize: "1.75rem", margin: "1rem 0" }}>System Reset</h1>
          <p style={{ color: "#C4B5FD", fontSize: "0.95rem", lineHeight: "1.6" }}>An unexpected system state occurred. Please refresh to restore peace.</p>
          <button
            onClick={() => reset()}
            style={{ marginTop: "1.5rem", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", backgroundColor: "#D4AF37", color: "#0C0517", fontWeight: "600", border: "none", cursor: "pointer" }}
          >
            Restart Application
          </button>
        </div>
      </body>
    </html>
  );
}
