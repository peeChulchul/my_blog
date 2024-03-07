"use client";
import React, { useState } from "react";
import { IPost } from "types/posts";
import PostsGrid from "../common/PostsGrid";
import Categories from "./Categories";

interface IProps {
  posts: IPost[];
  categories: string[];
}

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: IProps) {
  const [seleted, setSeleted] = useState(ALL_POSTS);
  const filtered = seleted === ALL_POSTS ? posts : posts.filter((post) => post.category === seleted);

  return (
    <section className="flex m-4 flex-col  sm:flex-row-reverse ">
      <Categories
        categories={[ALL_POSTS, ...categories]}
        seleted={seleted}
        onClick={(seleted) => setSeleted(seleted)}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
