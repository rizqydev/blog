export type Post = {
  id: number | string;
  date: string;
  title: string;
  categories: string[];
  source?: any;
  isDraft?: boolean;
};

export type PostProps = {
  allPostsData: Post[];
  nextPage: number;
  allPages: number;
  category?: string;
};

export type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
};
