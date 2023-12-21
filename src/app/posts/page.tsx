import FilterablePosts from "@/components/posts/FilterablePosts";
import { getAllPosts } from "api/posts";
import React from "react";

export default async function PostPage() {
  const posts = await getAllPosts();
  const catagories = [...new Set(posts.map((post) => post.category))];
  return (
    <div>
      <FilterablePosts posts={posts} categories={catagories} />
    </div>
  );
}
