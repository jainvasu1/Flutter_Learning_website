import { networkInterfaces } from "node:os";

// Where the Next.js server forwards /api/* requests (server-side only).
// 127.0.0.1 (not "localhost") avoids Node resolving to IPv6 ::1 on Windows.
const BACKEND_URL = process.env.BACKEND_URL ?? "http://127.0.0.1:5000";

/** This computer's local network IPv4 addresses, e.g. 192.168.0.114. */
const localNetworkHosts = Object.values(networkInterfaces())
  .flat()
  .filter((net) => net && net.family === "IPv4" && !net.internal)
  .map((net) => net.address);

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  // Let phones/other devices on the same Wi-Fi use the dev server.
  allowedDevOrigins: localNetworkHosts,

  // Proxy API calls through Next.js, so the browser only ever talks to one
  // address. Works from any device and avoids CORS.
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${BACKEND_URL}/api/:path*` }];
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
