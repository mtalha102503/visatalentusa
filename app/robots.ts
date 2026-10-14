import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next.js RSC flight-data URLs (_rsc param) — these are
        // duplicate payload requests that waste crawl budget. The canonical
        // pages without the param are what should be indexed.
        disallow: ["/*?_rsc=", "/*&_rsc="],
      },
    ],
    sitemap: "https://visatalentusa.com/sitemap.xml",
  };
}
