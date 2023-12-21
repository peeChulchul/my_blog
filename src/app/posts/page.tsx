import FilterablePosts from "@/components/posts/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "모든 포스트",
  description: "블로그 포스트들"
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const catagories = [...new Set(posts.map((post) => post.category))];
  return (
    <div>
      <FilterablePosts posts={posts} categories={catagories} />
    </div>
  );
}
