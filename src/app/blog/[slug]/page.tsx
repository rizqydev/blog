import { getAllPostIds, getPostData, getPostTitle } from "@/lib/post";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map(({ params: { slug } }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const title = getPostTitle(slug);
  return {
    title: "Rizqy's Blog | " + title,
  };
}

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkGfm],
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">
        {postData.title}
      </h1>
      <h2 className="mb-6 mt-2 flex items-center gap-2 text-slate-700 dark:text-slate-200">
        <CalendarIcon className="w-5" />
        <span className="text-sm">Posted on {postData.publishDate}</span>
      </h2>
      <div
        className="
          prose 
          prose-slate
          prose-p:text-justify prose-table:w-max dark:prose-h2:text-slate-200 prose-h4:dark:text-slate-100 dark:prose-p:text-slate-300 prose-a:dark:text-slate-100
          dark:prose-strong:text-slate-300 
          dark:prose-code:text-slate-200
          dark:prose-pre:bg-black/90
          dark:prose-li:text-slate-300
          dark:prose-tr:text-slate-300
          dark:prose-th:text-slate-300
      "
      >
        <MDXRemote
          source={postData.contentHtml}
          // @ts-ignore
          options={options}
        />
      </div>
    </>
  );
}
