import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/faqComponents/Sidebar";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
// import { ThemeProvider } from "next-themes";
import ThemeProvider from "@/lib/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help | VModel",
  description: "FAP for vModel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en w-full">
      <body className={inter.className + " bg-[#503C3B] text-white"}>
        <Navbar />

        <div className="p-3 md:p-6 relative ">
          <div
            className=" gap-5  flex  max-w-5xl flex-col md:flex-row absolute top-0 left-0 right-0 bottom-0 mx-auto
           "
          >
            <div>
              <h1 className="text-3xl text-[#EDCEAB] font-semibold  ">
                Help Center
              </h1>
              <Sidebar show={"notmobile"} />
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
