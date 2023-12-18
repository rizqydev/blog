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
  return {
    paths: ["/category/react", "/category/next"],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string

  const { allPostsData, allPages, nextPage } = getPostsPerPage(1, category);

  return {
    props: {
      allPostsData,
      nextPage,
      allPages,
    },
  };
};
