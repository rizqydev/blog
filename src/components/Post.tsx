import { PostProps } from "@/types/Post";
import Link from "next/link";

function parseDate(dateValue: string) {
  const objDate = new Date(dateValue)

  return `${objDate.getMonth() + 1}/${objDate.getDate()}/${objDate.getFullYear()}`
}

export default function Post({ allPostsData, nextPage, allPages }: PostProps) {
  const previousPage = nextPage === 2 ? 1 : nextPage - 2
  const nextPostsPage = nextPage > allPages ? allPages : nextPage
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold dark:text-slate-500 text-black/70 text-center">All Posts</h1>
      {allPostsData && allPostsData.map((post, key) => (
        <div
          key={key}
          className="flex flex-col border-b py-4 hover:-mx-4 hover:bg-gray-100 hover:px-4 dark:hover:bg-slate-700"
        >
          <div className="flex justify-between ">
            <Link
              href={`/blog/${post.id}`}
              className="text-lg font-medium dark:text-slate-200 text-black/80 hover:underline transition ease-out delay-100"
            >
              {post.title}
            </Link>
            <p className="hidden md:block text-sm dark:text-slate-400 text-black/60">{parseDate(post.date)}</p>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex gap-2">
              {
                post.categories && post.categories.map((category, key) => {
                  if (category) {
                    return (
                      <Link
                        key={key}
                        href={`/category/${category}`}
                        className="bg-slate-500 rounded px-3 py-1 text-xs text-white">{category}</Link>
                    )
                  }
                })
              }
            </div>

            <p className="block md:hidden text-sm dark:text-slate-400 text-black/60">{parseDate(post.date)}</p>
          </div>
        </div>
      ))}
      {!allPostsData || allPostsData.length === 0 && <p>Tidak ada data</p>}
      {
        allPostsData && allPostsData.length > 10 && (
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
        )
      }
    </>
  );
}
