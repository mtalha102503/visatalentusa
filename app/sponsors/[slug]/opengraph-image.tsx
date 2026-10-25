import { ImageResponse } from "next/og";
import indexData from "@/public/data/index.json";

export const alt = "H-1B Visa Sponsorship Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface IndexEntry {
  slug: string;
  name: string;
  cases: number;
  approval_rate: number | null;
  median_wage: number | null;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // index.json is bundled at build time — no fs, no network, works in edge runtime.
  const entries = indexData as IndexEntry[];
  const e = entries.find((x) => x.slug === slug);

  const name = e?.name ?? "H-1B Sponsor";
  const filings = e?.cases?.toLocaleString() ?? "—";
  const approval =
    e?.approval_rate != null ? `${(e.approval_rate * 100).toFixed(1)}%` : "—";
  const salary =
    e?.median_wage != null
      ? `$${Math.round(e.median_wage).toLocaleString()}`
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Filings</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{filings}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>DOL certified %</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{approval}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.7 }}>Median salary</div>
            <div style={{ fontSize: 48, fontWeight: "bold" }}>{salary}</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
