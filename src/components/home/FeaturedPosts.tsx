import React from "react";
import PostsGrid from "@/components/common/PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturePosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
