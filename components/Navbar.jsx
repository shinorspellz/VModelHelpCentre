"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./faqComponents/Sidebar";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between p-4">
        <Image height={65} src={logo} />
        {/* <span className="text-2xl font-bold">Help Center</span> */}
        <div className="flex ">
          <input
            type="search"
            placeholder="Search by keyword"
            className=" text-black px-3 py-2 bg-[#ffffff] rounded-[21px] mr-2 hidden md:block"
          />
          <select className="bg-inherit border border-[#CCD2DB] rounded-[21px] p-1 hidden md:block">
            <option className="bg-[#503C3B]">English</option>
            <option className="bg-[#503C3B]">French</option>
            <option className="bg-[#503C3B]">Spanish</option>
          </select>
        </div>
        <div className="md:hidden">
          <AiOutlineMenu size={32} onClick={() => setShow((init) => !init)} />
        </div>
        {show ? (
          <div className="absolute right-1 top-16 bg-black z-50">
            <Sidebar show={"mobile"} />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
