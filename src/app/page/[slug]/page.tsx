import Post from "@/components/Post";
import { getAllPostsPerPage } from "@/lib/blog-posts";

export default async function PostPerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { allPostsData, nextPage, allPages } = getAllPostsPerPage(Number(slug));

  return <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />;
}
