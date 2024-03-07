import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My blog",
    template: "My blog | %s"
  },
  description: "넥스트로 만들어보는 블로그"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={inter.className}>
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col  w-full max-w-screen-xl mx-auto px-4 pb-32 ">
            <Header />
            <main className="grow">{children}</main>
          </div>
          <div className="flex-1"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
