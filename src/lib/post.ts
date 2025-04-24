import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseDate } from './utils';

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostData = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
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
    const slug = fileName.replace(/\.mdx$/, '');

    return {
      params: { slug },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postDirectory, `${id}.mdx`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    contentHtml: matterResult.content,
    title: matterResult.data.title as string,
    publishDate: parseDate(matterResult.data.date),
    ...matterResult.data,
  };
}

export function getPostsPerPage(page: number, category?: string) {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostData = fileNames
    .map((fileName: string) => {
      const id = fileName.replace(/\.mdx$/, '');

      const fullPath = path.join(postDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      const categories = matterResult.data.categories as string;
      const isDraft = matterResult.data.isDraft as boolean;
      // const isDraft = false

      if ((category && categories.indexOf(category) === -1) || isDraft) {
        return false;
      }

      return {
        id,
        ...matterResult.data,
        categories: categories.split(','),
      };
    })
    .filter((val) => val !== false);

  const sortedPostData = allPostData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  const allPages = Math.ceil(sortedPostData.length / 10);

  const start = (page - 1) * 10;
  const end = page * 10;

  return {
    allPostsData: sortedPostData.slice(start, end),
    allPages,
    nextPage: page + 1,
  };
}

export function getPostTitle(id: string): string {
  const fullPath = path.join(postDirectory, `${id}.mdx`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return matterResult.data.title as string;
}
