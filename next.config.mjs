/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  env: {
    environment: "development",
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
