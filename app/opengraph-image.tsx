import { ImageResponse } from "next/og";

export const alt = "VisaTalentUSA — H-1B Sponsor Database";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default Open Graph image for the homepage and every route without its own
// (tools, sponsors index, static pages). 1200x630 so Google Discover and
// social shares can use the large preview.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, marginBottom: 16 }}>
          VisaTalentUSA — H-1B Sponsor Database
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: "bold",
            marginBottom: 32,
            lineHeight: 1.15,
          }}
        >
          Find U.S. Employers That Sponsor H-1B Visas
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Sponsor profiles</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>1,000+</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Data source</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>U.S. DOL LCA</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Coverage</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>FY2024–FY2026</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
