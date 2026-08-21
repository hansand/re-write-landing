import { ImageResponse } from "next/og";

export const alt = "AI Compose Assistant — an AI writing assistant inside every input field on the web.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0B0B0F",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(150,54,129,0.55), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#963681",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M12.6 3.4a.65.65 0 0 1 1.24 0l1.7 5.16a5.6 5.6 0 0 0 3.5 3.5l5.16 1.7a.65.65 0 0 1 0 1.24l-5.16 1.7a5.6 5.6 0 0 0-3.5 3.5l-1.7 5.16a.65.65 0 0 1-1.24 0l-1.7-5.16a5.6 5.6 0 0 0-3.5-3.5L2.24 15a.65.65 0 0 1 0-1.24l5.16-1.7a5.6 5.6 0 0 0 3.5-3.5l1.7-5.16Z" />
            </svg>
          </div>
          <span style={{ color: "#F5F5F7", fontSize: 28, fontWeight: 600 }}>
            AI Compose Assistant
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
          <span
            style={{
              color: "#F5F5F7",
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            An AI writing assistant inside every input field on the web.
          </span>
          <span style={{ color: "#9A9AA8", fontSize: 26, marginTop: 28 }}>
            Your own API key. Nothing stored in the cloud.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
