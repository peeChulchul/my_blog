import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "types/posts";

interface IProps {
  post: IPost;
}

export default function CarouselCard({ post }: IProps) {
  return (
    <Link href={`/posts/${post.path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full border border-b-2 rounded-t-md h-[100px] sm:h-[200px]"
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-1 pb-2 gap-1 sm:p-4">
          <time className="self-end text-gray-700 text-xs sm:text-base">{post.date.toString()}</time>
          <h3 className="text-lg w-full font-bold truncate">{post.title}</h3>
          <p className="w-full truncate text-sm sm:text-base">{post.description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-3 mt-2">{post.category}</span>
        </div>
      </article>
    </Link>
  );
}
