import rehypeMdxCodeProps from "rehype-mdx-code-props"
import remarkGfm from "remark-gfm"
import createMDX from '@next/mdx'
import remarkPrism from "remark-prism"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkPrism],
    rehypePlugins: [rehypeMdxCodeProps],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
