import { APP_API_URL } from "@/config/env";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/app-api/v1/:path*",
        destination: `${APP_API_URL}/api/:path*`,
      },
    ];
  },
  experimental: {
    viewTransition: true,
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.ts",
        },
      },
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
