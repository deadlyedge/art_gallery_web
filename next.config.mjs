/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file.zick.me",
        port: "",
        pathname: "/s/**",
      },
    ],
  },
}

export default nextConfig
