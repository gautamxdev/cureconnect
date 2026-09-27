import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: staticExport
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
