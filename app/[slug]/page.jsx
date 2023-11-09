import React from "react";
import { generalTopics, subTopics } from "@/data";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
const page = ({ params }) => {
  const subTopic = subTopics[params.slug];

  if (!subTopic) {
    return (
      <div>
        <h1>404 Topic not found</h1>
      </div>
    );
  }
  const heading = generalTopics.find((topic) => topic.link === params.slug);
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium">{heading.name}</h1>
      <div>
        {subTopic.map((topic, index) => {
          return (
            <Link href={params.slug + "/" + topic.link} key={index}>
              <div
                className={`${
                  !!index && "border-t"
                } p-4 border-gray-100 w-full flex  sm:gap-5 md:gap-16 lg:gap-48 justify-between font-medium item-center  `}
              >
                <span>{topic.name}</span>
                <AiOutlineRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
