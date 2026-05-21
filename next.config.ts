import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Prevent Mapbox GL worker from being bundled server-side
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mapbox uses browser APIs — exclude from server bundle
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "mapbox-gl",
      ];
    }
    return config;
  },
};

export default nextConfig;
