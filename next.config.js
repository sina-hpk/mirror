/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export: outputs a plain `out/` folder that runs on any
  // shared/Apache/WordPress host (no Node.js runtime needed).
  output: 'export',
  // Emit folder-style URLs (/products/index.html) so Apache serves them
  // without extra rewrite rules.
  trailingSlash: true,
  images: {
    // Static export cannot use the runtime optimizer; serve the already
    // pre-sized/compressed WebP files directly. Also removes any need for
    // the native `sharp` module.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
}

module.exports = nextConfig