import "@/app/global.css";
import "@/../public/prism.css"

import { getAllPostIds, getPostData } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Post } from "@/types/Post";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map(({ params: { slug } }) => ({ slug }))
}

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkGfm],
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <>
      <h1 className="font-bold text-2xl mb-4 dark:text-slate-300">{postData.title}</h1>
      <div className="prose prose-slate dark:prose-p:text-slate-300 dark:prose-pre:bg-slate-500 dark:prose-code:text-slate-200 dark:prose-li:text-slate-300 dark:prose-strong:text-slate-300">
        <MDXRemote
          source={postData.contentHtml}
          // @ts-ignore
          options={options}
        />
      </div>
    </>
  );
}
