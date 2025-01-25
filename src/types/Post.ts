export type Post = {
  id: number,
  date: string,
  title: string,
  categories: string[],
  source?: any,
  isDraft?: boolean,
}

export type PostProps = {
  allPostsData: Post[],
  nextPage: number,
  allPages: number,
}


