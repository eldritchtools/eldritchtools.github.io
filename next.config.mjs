/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "./",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "storage.ko-fi.com",
            },
        ],
    },
};

export default nextConfig;