import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // MapLibre GL uses browser-only WebGL APIs — exclude from server bundle
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "maplibre-gl",
      ];
    }
    return config;
  },
};

export default nextConfig;
