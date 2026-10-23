import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog";

export const alt = "VisaTalentUSA Blog — H-1B guides, data and tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Per-post Open Graph image: the article title on the brand gradient.
// Gives every blog post the large (1200x630) image Google Discover and
// social shares need — posts previously had no og:image at all.
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "H-1B Guides, Data & Tools";
  const tag = post?.tags?.[0];
  const fontSize = title.length > 70 ? 50 : title.length > 45 ? 58 : 66;

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
            {tag ? `VisaTalentUSA Blog — ${tag}` : "VisaTalentUSA Blog"}
          </div>
          <div style={{ fontSize, fontWeight: "bold", lineHeight: 1.18 }}>
            {title}
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
