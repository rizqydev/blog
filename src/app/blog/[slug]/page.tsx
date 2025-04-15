import "@/app/global.css";
// import "../../public/prism.css" // theme for pre
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
  // @ts-ignore
  const postData: Post = await getPostData(slug);

  // console.log("slug", postData);

  return (
    <>
      <h1 className="font-bold text-2xl mb-4 dark:text-slate-300">{postData.title}</h1>
      <div className="prose prose-slate dark:prose-p:text-slate-300 dark:prose-pre:bg-slate-500 dark:prose-code:text-slate-200 dark:prose-li:text-slate-300 dark:prose-strong:text-slate-300">
          {/* source={postData.source} scope={undefined} frontmatter={undefined} */}
          {/* {...postData.source} */}
        <MDXRemote
          // @ts-ignore
          source={postData.contentHtml}
          // @ts-ignore
          options={options}
        />
      </div>
    </>
  );
}


// export async function getStaticProps({ params }: { params: { id: number } }) {
//   const postData = await getPostData(params.id);

//   return {
//     props: { postData },
//   };
// }
