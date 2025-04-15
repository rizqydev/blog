import fs from "fs";
import path from "path";
import matter from "gray-matter";
import '@/styles/github-dark.css'

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostsData() {
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
    };
  });

  return allPostData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
