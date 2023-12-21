import AdjacentPost from "@/components/posts/AdjacentPost";
import PostContent from "@/components/posts/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
interface IProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: IProps): Promise<Metadata> {
  const post = await getPostData(slug);
  const { title, description } = post;
  return {
    title,
    description
  };
}

export default async function PostPage({ params: { slug } }: IProps) {
  const post = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={720}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {post.prev && <AdjacentPost post={post.prev} type="prev" />}
        {post.next && <AdjacentPost post={post.next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path
  }));
}
