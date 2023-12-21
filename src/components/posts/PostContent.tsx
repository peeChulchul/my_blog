import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/common/MarkdownViewer";
import { IPostData } from "types/posts";

interface IProps {
  post: IPostData;
}

export default function PostContent({ post }: IProps) {
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{post.date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-xl font-bold">{post.description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
      <MarkdownViewer content={post.content} />
    </section>
  );
}
