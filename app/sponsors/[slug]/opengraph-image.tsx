import { ImageResponse } from "next/og";
import { getSponsor } from "@/lib/data";

export const alt = "H-1B Visa Sponsorship Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getSponsor(slug);
  const y = s?.years["2026"];

  const name = s?.display_name ?? "H-1B Sponsor";
  const filings = y?.total_cases?.toLocaleString() ?? "—";
  const approval =
    y?.approval_rate != null ? `${(y.approval_rate * 100).toFixed(1)}%` : "—";
  const salary =
    y?.median_wage_annual != null
      ? `$${Math.round(y.median_wage_annual).toLocaleString()}`
      : "—";

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
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, marginBottom: 16 }}>
          VisaTalentUSA — H-1B Sponsorship Data 2026
        </div>
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 32 }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <div>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Filings</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{filings}</div>
          </div>
          <div>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Approval rate</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{approval}</div>
          </div>
          <div>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Median salary</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{salary}</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
