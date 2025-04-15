import Post from "@/components/Post";
import { getAllPostsData } from "@/lib/blog-posts";
import { PostProps } from "@/types/Post";

export default function Home() {
  const allPostsData = getAllPostsData()
  const nextPage = 1
  const allPages = 1

  return (
    // @ts-ignore
    <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
  );
}
