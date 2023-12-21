import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PeeChulchul의 블로그",
    template: "PeeChulchul의 블로그 | %s"
  },
  description: "넥스트로 만들어보는 블로그"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={inter.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
