import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/*',
        search: '',
      },
    ],
  }
};

/* https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg */

export default nextConfig;
