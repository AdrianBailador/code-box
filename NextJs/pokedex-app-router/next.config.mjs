/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // Match any image URL on the domain
                hostname: 'raw.githubusercontent.com',
                protocol: 'https',
            }
        ],
    },
};

export default nextConfig;
