import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href={"/"}>
        <h1 className="text-xl font-bold sm:text-3xl">My Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href={"/"}>home</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
    </header>
  );
}
