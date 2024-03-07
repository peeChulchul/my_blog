import Image from "next/image";
import React from "react";
import profileImage from "public/images/profile.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        priority
        className="mx-auto sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] rounded-full"
        src={profileImage}
        alt="author image"
      />
      <h2 className="text-3xl font-bold mt-4 leading-10">김현철</h2>
      <h3 className="text-xl leading-10">프론트엔드 개발자</h3>
      {/* <p>유통기한 2075-04-23</p> */}
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
      </Link>
    </section>
  );
}
