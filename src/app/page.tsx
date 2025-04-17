import Post from "@/components/Post";
import { getAllPostsPerPage } from "@/lib/blog-posts";

export default function Home() {
  const { allPostsData, nextPage, allPages } = getAllPostsPerPage(1)
  

  return (
    <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
  );
}
