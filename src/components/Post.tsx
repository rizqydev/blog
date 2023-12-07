import Link from "next/link";

export default function Post({ allPostsData, nextPage, allPages }) {
  const previousPage = nextPage === 2 ? 1 : nextPage - 2
  const nextPostsPage = nextPage > allPages ? allPages : nextPage
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Blog</h1>
      {allPostsData.map((post, key) => (
        <Link
          key={key}
          href={`/post/${post.id}`}
          className="flex justify-between border-b py-4 hover:-mx-4 hover:bg-gray-100 hover:px-4"
        >
          <p className="text-lg font-medium  text-black/80">{post.title}</p>
          <p className="text-sm text-black/60">{post.date}</p>
        </Link>
      ))}
      <div className="mt-8 flex justify-end gap-5">
        <Link
          href={`/page/${previousPage}`}
          className={`
            w-28 rounded bg-slate-800 py-2 text-white flex justify-center
            ${nextPage === 2 && 'cursor-not-allowed bg-slate-400'}
          `}>
          Previous
        </Link>
        <Link
          href={`/page/${nextPostsPage}`}
          className={`
            w-28 rounded bg-slate-800 py-2 text-white flex justify-center
            ${nextPage > allPages && 'cursor-not-allowed bg-slate-400'}
          `}>
          Next
        </Link>
      </div>
    </>
  );
}
