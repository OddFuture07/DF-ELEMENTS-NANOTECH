import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dfelements.com.au",
      lastModified: new Date(),
    },
  ];
}

