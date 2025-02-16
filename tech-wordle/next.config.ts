// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    experimental: {
        optimizePackageImports: ['react', 'react-dom'],
    },
    productionBrowserSourceMaps: false,
    webpack: (config) => {
        config.resolve.fallback = { 
            fs: false,
            net: false,
            tls: false 
        };
        return config;
    }
};

export default nextConfig;