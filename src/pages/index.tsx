import { getSortedPostsData } from "@/lib/post";
import "@/app/global.css";
import Layout from "./layout"
import Link from "next/link";
import Post from "@/components/Post";

export default function Home({ allPostsData, nextPage, allPages }) {
  return (
    <Layout>
      <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
      nextPage: 2,
      allPages: 2,
    },
  };
}
