import "@/app/global.css";

import { getAllPostIds, getPostData } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote";
import { Post } from "@/types/Post";

export default function Post({ postData }: { postData: Post }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">{postData.title}</h1>
      <div className="font-inter leading-6 text-justify prose">
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
