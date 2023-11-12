import { generalTopics } from "@/data";
// import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const page = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-3">General Topics</h1>
      <div className="flex flex-wrap border border-gray-100 justify-stretch">
        {generalTopics.map((topic, index) => {
          return (
            <Link
              href={topic.link}
              className="w-1/2 md:w-1/3 lg:w-1/3"
              key={index}
            >
              <div className="h-32 border border-gray-100 gap-5 w-full flex flex-col justify-center items-center">
                <span>{topic.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
