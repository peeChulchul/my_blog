import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
const LINKS = [
  { icon: <SiVelog />, url: "https://velog.io/@peechulchul" },
  { icon: <AiFillGithub />, url: "https://github.com/peeChulchul?tab=repositories" }
];

export const metadata: Metadata = {
  title: "Contact Me",
  description: "메일보내기"
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link) => (
          <a className="text-5xl hover:text-yellow-400" key={link.url} href={link.url} target="_blink" rel="noreferrer">
            {link.icon}
          </a>
        ))}
      </ul>
      <p>silo9506@gmail.com</p>
      <h2 className="text-xl font-semibold mt-8 ">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
