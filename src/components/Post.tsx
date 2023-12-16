import { PostProps } from "@/types/Post";
import Link from "next/link";

export default function Post({ allPostsData, nextPage, allPages }: PostProps) {
  const previousPage = nextPage === 2 ? 1 : nextPage - 2
  const nextPostsPage = nextPage > allPages ? allPages : nextPage
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Blog</h1>
      {allPostsData.map((post, key) => (
        <div
          key={key}
          className="flex flex-col border-b py-4 hover:-mx-4 hover:bg-gray-100 hover:px-4"
        >
          <div className="flex justify-between ">
            <Link
              href={`/post/${post.id}`}
              className="text-lg font-medium text-black/80 hover:underline transition ease-out delay-100"
            >
              {post.title}
            </Link>
            <p className="text-sm text-black/60">{post.date}</p>
          </div>
          <div className="mt-2 flex gap-2">
            <Link
              href={`/category/next`}
              className="bg-slate-500 rounded px-3 py-1 text-xs text-white">Next</Link>
            <Link
              href={`/category/next`}
              className="bg-slate-500 rounded px-3 py-1 text-xs text-white">Next</Link>
          </div>
        </div>
      ))}
      <div className="mt-8 flex justify-end gap-5">
        <Link
          href={`/page/${previousPage}`}
          onClick={event => nextPage === 2 && event.preventDefault()}
          className={`
            w-28 rounded py-2 text-white flex justify-center
            ${nextPage === 2 ? 'cursor-not-allowed bg-slate-400' : 'bg-slate-800 '}
          `}>
          Previous
        </Link>
        <Link
          href={`/page/${nextPostsPage}`}
          onClick={event => nextPage > allPages && event.preventDefault()}
          className={`
            w-28 rounded py-2 text-white flex justify-center
            ${nextPage > allPages ? 'cursor-not-allowed bg-slate-400' : 'bg-slate-800 '}
          `}>
          Next
        </Link>
      </div>
    </>
  );
}
