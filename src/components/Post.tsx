"use client";
import { parseDate } from "@/lib/utils";
import { PostProps } from "@/types/Post";
import Link from "next/link";

export default function Post({ allPostsData, nextPage, allPages, category }: PostProps) {
  const previousPage = nextPage === 2 ? 1 : nextPage - 2;
  const nextPostsPage = nextPage > allPages ? allPages : nextPage;

  const previousLink = category
    ? `/page/${previousPage}/category/${category}`
    : `/page/${previousPage}`;
  const nextLink = category
    ? `/page/${nextPostsPage}/category/${category}`
    : `/page/${nextPostsPage}`;

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-black/70 dark:text-slate-100">
        All Posts {category && `with Tag '${category}' `}
      </h1>
      {allPostsData &&
        allPostsData.map((post, key) => (
          <div
            key={key}
            className="flex flex-col border-b py-4 hover:-mx-4 hover:bg-gray-100 hover:px-4 dark:hover:bg-slate-700"
          >
            <div className="flex justify-between ">
              <Link
                href={`/blog/${post.id}`}
                className="text-lg font-medium text-black/80 transition delay-100 ease-out hover:underline dark:text-slate-200"
              >
                {post.title}
              </Link>
              <p className="hidden text-sm text-black/60 dark:text-slate-400 md:block">
                {parseDate(post.date)}
              </p>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex gap-2">
                {post.categories &&
                  post.categories.map((category, key) => {
                    if (category) {
                      return (
                        <Link
                          key={key}
                          href={`/page/1/category/${category}`}
                          className="rounded bg-slate-500 px-3 py-1 text-xs text-white"
                        >
                          {category}
                        </Link>
                      );
                    }
                  })}
              </div>

              <p className="block text-sm text-black/60 dark:text-slate-400 md:hidden">
                {parseDate(post.date)}
              </p>
            </div>
          </div>
        ))}
      {!allPostsData || (allPostsData.length === 0 && <p>Tidak ada data</p>)}
      {allPages > 1 && (
        <div className="mt-8 flex justify-end gap-5">
          <Link
            href={previousLink}
            onClick={(event) => nextPage === 2 && event.preventDefault()}
            className={`
            flex w-28 justify-center rounded py-2 text-white
            ${nextPage === 2 ? "cursor-not-allowed bg-slate-400" : "bg-slate-800 "}
          `}
          >
            Previous
          </Link>
          <Link
            href={nextLink}
            onClick={(event) => nextPage > allPages && event.preventDefault()}
            className={`
            flex w-28 justify-center rounded py-2 text-white
            ${nextPage > allPages ? "cursor-not-allowed bg-slate-400" : "bg-slate-800 "}
          `}
          >
            Next
          </Link>
        </div>
      )}
    </>
  );
}
