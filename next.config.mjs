/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Enables static export for `next export`

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ✅ Required for static export if using <Image />
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
