import fs from "fs";
import path from "path";
import matter from "gray-matter";
import '@/styles/github-dark.css'
import { Post, PostProps } from "@/types/Post";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostsPerPage(page: number, category?: string): PostProps {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostData = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id, 
      ...matterResult.data,
      categories: matterResult.data.categories ? matterResult.data.categories.split(",") : [],
      date: matterResult.data.date,
      title: matterResult.data.title,
      source: matterResult.data.source,
      isDraft: matterResult.data.isDraft,
    };
  });

  const sortedPostData: Post[] = allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });



  const start = (page - 1) * 10
  const end = page * 10

  let allPostsData = []
let allPages = 0
  if (category) {
    const filteredPosts = sortedPostData.filter((post) => { 
      return post.categories.includes(category)
    })

    allPostsData = filteredPosts.slice(start, end)


    allPages = Math.ceil(filteredPosts.length / 10)
  } else {
    allPostsData = sortedPostData.slice(start, end)

    allPages = Math.ceil(sortedPostData.length / 10)
  }


  return {
    allPostsData,
    allPages,
    nextPage: page + 1
  }
}