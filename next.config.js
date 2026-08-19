// Next.js config for GitHub Pages static export.
// NOTE: keep this CommonJS (`module.exports`) — `actions/configure-pages`
// parses it with an AST parser to inject `basePath`; ESM (`export default`)
// fails that parse.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
};

module.exports = nextConfig;