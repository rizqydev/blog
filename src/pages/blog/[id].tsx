import "@/app/global.css";

import { getAllPostIds, getPostData } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote";
import { Post } from "@/types/Post";

export default function Post({ postData }: { postData: Post }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 dark:text-slate-300">{postData.title}</h1>
      <div className="font-inter leading-6 text-justify prose dark:prose-h2:text-slate-400 dark:prose-p:text-slate-300 dark:prose-code:text-slate-200">
        <MDXRemote {...postData.source} />
      </div>
    </>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: number } }) {
  const postData = await getPostData(params.id);

  return {
    props: { postData },
  };
}
