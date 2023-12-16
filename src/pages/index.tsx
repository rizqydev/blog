import { getPostsPerPage, getSortedPostsData } from "@/lib/post";
import "@/app/global.css";
import Layout from "@/components/Layout"
import Post from "@/components/Post";
import { PostProps } from "@/types/Post";

export default function Home({ allPostsData, nextPage, allPages }: PostProps) {
  return (
    <Layout>
      <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
    </Layout>
  );
}

export async function getStaticProps() {
  const {
    allPostsData,
    nextPage,
    allPages,
  } = getPostsPerPage(1);

  return {
    props: {
      allPostsData,
      nextPage,
      allPages,
    },
  };
}
