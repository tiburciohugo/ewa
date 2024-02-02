/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: "/assets/thumbnails/:path*",
        destination: "/public/assets/thumbnails/:path*",
      },
    ];
  },
};

export default nextConfig;
