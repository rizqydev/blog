import Post from "@/components/Post";
import { getAllPostsPerPage } from "@/lib/blog-posts";

export default async function PostPerPage({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {
  const { slug, category } = await params;
  const { allPostsData, nextPage, allPages } = getAllPostsPerPage(Number(slug), category);

  return (
    <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} category={category} />
  );
}
