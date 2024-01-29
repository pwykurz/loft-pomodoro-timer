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
    webpack(config) {
        config.module.rules.push({
            test: /\.mp3$/,
            loader: 'url-loader'
        })
        return config
    },
}

module.exports = nextConfig
