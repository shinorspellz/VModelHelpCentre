"use client";
import { egHTML, subTopicContent, subTopics } from "@/data";
import React from "react";
import "./styles.css";
import Link from "next/link";

const page = ({ params }) => {
  let contentHTML;
  const { slug, subslug } = params;
  try {
    contentHTML = subTopicContent[slug][subslug];
  } catch (e) {
    contentHTML = `<article>
     <strong>404 subtopic for ${
       params?.slug || "this topic"
     } does not exist</strong>
    </article>
    
    `;
  }

  // console.log(contentHTML);
  return (
    <div>
      <div className="faq">
        <div dangerouslySetInnerHTML={{ __html: contentHTML || egHTML }} />
      </div>
      <div className="mt-7">
        <h3 className="text-lg mb-3 text-[#edceab]">Related Topics</h3>
        <div className="flex flex-wrap">
          {subTopics[slug].map((topic, index) => {
            return (
              <Link
                href={"/" + slug + "/" + topic.link}
                className="w-1/2 md:w-1/3 lg:w-1/3"
                key={index}
              >
                <div
                  className={`h-24 border mr-6 mb-6 border-[#a1a1a165] gap-5 flex flex-col justify-center items-center text-center p-2 rounded-md cursor-pointer hover:bg-[#a1a1a165]`}
                >
                  <span>{topic.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
