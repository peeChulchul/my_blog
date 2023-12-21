import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { IPost, IPostData } from "types/posts";

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data/posts", "posts.json");
  const data = await readFile(filePath, "utf-8");
  const result: IPost[] = JSON.parse(data);

  return result.sort((a, b) => (a.date > b.date ? -1 : 1));
});

export async function getFeaturedPosts(): Promise<IPost[]> {
  const allPost = await getAllPosts();
  return allPost.filter((post) => post.featured);
}
export async function getNonFeaturedPosts(): Promise<IPost[]> {
  const allPost = await getAllPosts();
  return allPost.filter((post) => !post.featured);
}

export async function getPostData(fileName: string): Promise<IPostData> {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const allPosts = await getAllPosts();
  const metaData = allPosts.find((post) => post.path === fileName);
  if (!metaData) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  const index = allPosts.indexOf(metaData);
  const next = index > 0 ? allPosts[index - 1] : null;
  const prev = index < allPosts.length - 1 ? allPosts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");

  return { ...metaData, content, next, prev };
}
