/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
            },
        ],
    },
}

module.exports = nextConfig
