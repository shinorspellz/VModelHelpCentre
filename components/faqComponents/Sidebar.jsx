"use client";
import { generalTopics, subTopics } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ show }) => {
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const hoverEffect = "hover:bg-[#edceaba6]";

  const showMobile = show !== "mobile" ? "hidden  md:flex" : "flex md:hidden";
  console.log(showMobile);
  return (
    <div className={`flex-col min-w-[290px]  max-w-[290px] ${showMobile}`}>
      <Link href={"/"}>
        <p
          className={`p-4 ${hoverEffect} cursor-pointer ${
            !currentroute ? "text-[#EDCEAB] font-medium" : "text-white"
          }`}
          key={0o1}
        >
          {"Home"}
        </p>
      </Link>
      {generalTopics.map((topic, index) => {
        const subTopic = subTopics[topic.link];

        return (
          <>
            <Link href={"/" + topic.link} key={index + topic.link}>
              <p
                className={`p-4 ${hoverEffect} cursor-pointer  ${
                  topic.link === currentroute
                    ? "text-[#EDCEAB] font-medium "
                    : ""
                }`}
                key={index}
              >
                {topic.name}
              </p>
            </Link>
            {topic.link === currentroute ? (
              <div class=" ">
                {subTopic.map((topic, index) => {
                  return (
                    <Link
                      href={"/" + currentroute + "/" + topic.link}
                      key={index}
                    >
                      <div
                        className={`text-sm ml-7  text-gray-300  ${hoverEffect} p-2 m-2  `}
                      >
                        <span>{topic.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
