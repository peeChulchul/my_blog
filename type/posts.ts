export interface IPost {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export interface IPostData extends IPost {
  content: string;
  next: IPost | null;
  prev: IPost | null;
}
