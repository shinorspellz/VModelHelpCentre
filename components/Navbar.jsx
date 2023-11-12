"use client";
import React, { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./faqComponents/Sidebar";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between p-4">
        <div className="flex  items-center gap-3 md:gap-6 ">
          <Image
            alt="vmodel logo"
            height={65}
            className="h-14 md:h-16"
            src={logo}
          />
          <h1 className="text-2xl md:text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left ">
            Help Center
          </h1>
        </div>
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
        {show ? <Menu setShow={setShow} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;

const Menu = ({ setShow }) => {
  const pathname = usePathname();
  useEffect(() => {
    // Set the overflow property to 'hidden' when the component mounts
    document.body.style.overflow = "hidden";
    // Clean up: Set the overflow property back to 'auto' when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  // useEffect(() => {
  //   setShow(false);
  // }, [pathname[0], pathname[1], pathname[2]]);
  return (
    <div
      id="nav_menu"
      className="h-screen w-screen top-0 left-0 bottom-2 overflow-x-auto fixed z-50 bg-[#00000067] "
      onClick={(e) => e.target.id === "nav_menu" && setShow(false)}
    >
      <div className="relative">
        <div className="absolute right-4 px-4  pt-4 top-16 bg-black  mb-2 rounded-[21px]">
          <div className="flex justify-between ">
            <h1>Help Centre</h1>
            <AiOutlineClose size={32} onClick={() => setShow(false)} />
          </div>
          <Sidebar show={"mobile"} />
        </div>
      </div>
    </div>
  );
};
