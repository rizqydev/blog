export type Post = {
  id: number,
  date: string,
  title: string,
  categories: string[],
  source?: any,
}

export type PostProps = {
  allPostsData: Post[],
  nextPage: number,
  allPages: number,
}


