import { getAllPostIds, getPostData, getPostTitle } from '@/lib/post';
// import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <>
      <h1 className="mb-4 border-b pb-2 text-4xl font-bold text-slate-800 dark:text-slate-100">
        {postData.title}
      </h1>
      <div
        className="
        prose-table:w-max-content prose 
        prose-slate dark:prose-h2:text-slate-200 prose-h4:dark:text-slate-100 dark:prose-p:text-slate-300 prose-a:dark:text-slate-100 dark:prose-strong:text-slate-300
      dark:prose-code:text-slate-200 
        dark:prose-pre:bg-slate-500 
      dark:prose-li:text-slate-300
      dark:prose-tr:text-slate-300
      dark:prose-th:text-slate-300
      "
      >
        {/* <MDXRemote
          source={postData.contentHtml}
          // @ts-ignore
          options={options}
        /> */}
      </div>
    </>
  );
}
