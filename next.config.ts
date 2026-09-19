import type { NextConfig } from "next";

// Deployed as a GitHub Pages *project* site at
// https://avramovicbane.github.io/cv/ — everything lives under the
// "/cv" sub-path, so basePath/assetPrefix must match the repo name.
// If you ever rename the repo, update BASE_PATH in lib/site-config.ts too.
const BASE_PATH = "/cv";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
