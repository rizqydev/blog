import { getPostsPerPage, getSortedPostsData } from "@/lib/post";
import Post from "@/components/Post";
import { PostProps } from "@/types/Post";

export default function Home({ allPostsData, nextPage, allPages }: PostProps) {
  return (
    <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
  );
}

export async function getStaticProps() {
  const { allPostsData, nextPage, allPages } = getPostsPerPage(1);

  return {
    props: {
      allPostsData,
      nextPage,
      allPages,
    },
  };
}
