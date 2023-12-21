import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "types/posts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface IProps {
  post: IPost;
  type: "next" | "prev";
}

export default function AdjacentPost({ post, type }: IProps) {
  return (
    <Link href={`/posts/${post.path}`} className="relative w-full bg-black">
      <div className="relative w-full h-56 ">
        <Image className="opacity-40 " src={`/images/posts/${post.path}.png`} alt={post.title} fill />
      </div>
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full justify-around items-center text-white px-8">
        {type === "prev" && <FaArrowLeft className="text-5xl m-4 text-sky-600 transition-all group-hover:text-6xl" />}
        <div className="px-2 w-full text-center">
          <h3 className="text-3xl font-bold">{post.title}</h3>
          <p className="font-bold">{post.description}</p>
        </div>
        {type === "next" && <FaArrowRight className="text-5xl m-4 text-sky-600 transition-all group-hover:text-6xl" />}
      </div>
    </Link>
  );
}
