import { getPostsPerPage } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../layout";
import Post from "@/components/Post";

export default function Page({ posts, nextPage, allPages }) {
  return (
    <Layout>
      <Post allPostsData={posts} nextPage={nextPage} allPages={allPages} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/page/1", "/page/2"],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page ?? '0'
  const postsPage = (typeof page === 'string') ? parseInt(page) : parseInt(page.toString())

  const { allPostsData: posts, allPages, nextPage } = getPostsPerPage(postsPage);

  return {
    props: {
      posts,
      nextPage,
      allPages,
    },
  };
};
