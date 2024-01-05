// const withMDX = require("@next/mdx")({
//   options: {
//     rehypePlugins: [require("rehype-mdx-code-props")]
//   }
// });
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
//   // Optionally, add any other Next.js config below
// };
//
// module.exports = withMDX(nextConfig);

import rehypeMdxCodeProps from "rehype-mdx-code-props"
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [rehypeMdxCodeProps],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
