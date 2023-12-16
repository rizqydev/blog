import { getPostsPerPage } from "@/lib/post";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { PostProps } from "@/types/Post";

export default function Page({ allPostsData, nextPage, allPages }: PostProps) {
  return (
    <Layout>
      <Post allPostsData={allPostsData} nextPage={nextPage} allPages={allPages} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO
  return {
    paths: ["/page/1", "/page/2"],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page ?? '0'
  const postsPage = (typeof page === 'string') ? parseInt(page) : parseInt(page.toString())

  const { allPostsData, allPages, nextPage } = getPostsPerPage(postsPage);

  return {
    props: {
      allPostsData,
      nextPage,
      allPages,
    },
  };
};
