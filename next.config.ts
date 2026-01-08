import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compress: true,
  devIndicators: {
    position: 'bottom-right',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'myexpense-api.vercel.app', pathname: '/**' },
      { protocol: 'http', hostname: 'localhost:4500', pathname: '/**' },
      { protocol: 'https', hostname: 'd1g8oinzeo7bqw.cloudfront.net', pathname: '/**' },
    ],
  },

  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    NEXT_APP_PROJECT_NAME: process.env.NEXT_APP_PROJECT_NAME,
    NEXT_APP_TOKEN_NAME: process.env.NEXT_APP_TOKEN_NAME,
    NEXT_APP_FRONTEND_URL: process.env.NEXT_APP_FRONTEND_URL,
  },
};

export default nextConfig;
