import { ImageResponse } from "next/og";

export const alt = "State of H-1B 2026 — VisaTalentUSA data report";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static Open Graph image for the State of H-1B 2026 report page.
// Same-segment file convention supplies og:image for this route.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, opacity: 0.8, marginBottom: 20 }}>
            VisaTalentUSA Data Report
          </div>
          <div style={{ fontSize: 64, fontWeight: "bold", lineHeight: 1.18 }}>
            State of H-1B 2026
          </div>
          <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9 }}>
            Filings fell 7%. Pay rose. Consulting pulled back.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 24, opacity: 0.75 }}>
            Real U.S. Department of Labor data
          </div>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>
            visatalentusa.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
