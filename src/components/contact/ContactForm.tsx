"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { IBanner } from "../common/Banner";
import { sendContactEmail } from "@/service/contact";

interface IForm {
  from: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<IForm>({ from: "", subject: "", message: "" });
  const [banner, setBanner] = useState<IBanner | null>(null);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await sendContactEmail(form);
      setBanner({ message: "메일전송에 성공했습니다.", state: "success" });
      setForm({ from: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setBanner({ message: "메일전송에 실패했습니다.", state: "error" });
    } finally {
      setTimeout(() => {
        setBanner(null);
      }, 3000);
    }
  }

  return (
    <section className="w-full max-w-md">
      {banner && <Banner message={banner.message} state={banner.state} />}
      <form className="w-full my-4 flex flex-col gap-2 p-4 bg-slate-700 rounded-xl text-white" onSubmit={onSubmit}>
        <label className="font-semibold" htmlFor="from">
          Your Email
        </label>
        <input
          className="text-black px-1"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        ></input>
        <label className="font-semibold" htmlFor="subject">
          Your subject
        </label>
        <input
          className="text-black px-1"
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        ></input>
        <label className="font-semibold " htmlFor="from">
          Your message
        </label>
        <textarea
          className="text-black resize-none p-1"
          id="message"
          rows={10}
          name="message"
          required
          value={form.message}
          onChange={onChange}
        ></textarea>
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">Submit</button>
      </form>
    </section>
  );
}
