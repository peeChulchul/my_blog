import { getNonFeaturedPosts } from "@/service/posts";
import React from "react";
import MultiCarousel from "../common/MultiCarousel";
import CarouselCard from "../common/CarouselCard";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-16">
      <h2 className="my-2 text-2xl font-bold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <CarouselCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
