import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { serialize } from "next-mdx-remote/serialize";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostData = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    return {
      id, ...matterResult.data,
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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.mdx$/, "");

    return {
      params: { id },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const mdxSource = await serialize(matterResult.content)

  return {
    id,
    contentHtml: matterResult.content,
    ...matterResult.data,
    source: mdxSource
  };
}


export function getPostsPerPage(page: number) {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostData = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    return {
      id, ...matterResult.data,
    };
  });

  const sortedPostData = allPostData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  const allPages = Math.ceil(sortedPostData.length / 10)

  const start = (page - 1) * 10
  const end = page * 10

  return {
    allPostsData: sortedPostData.slice(start, end),
    allPages,
    nextPage: page + 1
  }
}
