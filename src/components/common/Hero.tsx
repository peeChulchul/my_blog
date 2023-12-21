import Image from "next/image";
import React from "react";
import profileImage from "public/images/profile.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Image priority className="mx-auto w-[250px] h-[250px] rounded-full" src={profileImage} alt="author image" />
      <h2 className="text-3xl font-bold mt-2">{"응애"}</h2>
      <h3 className="text-xl font-semibold">신생아 개발자</h3>
      <p>유통기한 2075-04-23</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
      </Link>
    </section>
  );
}
