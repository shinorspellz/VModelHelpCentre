"use client";
import { egHTML, subTopicContent, subTopics } from "@/data";
import React from "react";
import "./styles.css";
import Link from "next/link";
import FeedbackComponent from "@/components/FeedBack";

const page = ({ params }) => {
  let contentHTML;
  let count = 0;
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
        <div className="ml-[20px] mt-[20px]">
          <FeedbackComponent articleId={subslug}/>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="text-lg mb-3 text-[#edceab]">Related Topics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subTopics[slug].map((topic, index) => {
            if (topic.link === subslug) return null;
            count++;
            return (
              <Link
                href={"/" + slug + "/" + topic.link}
                className=""
                key={index}
              >
                <div
                  className={`h-24 border  border-[#a1a1a165] gap-5 flex flex-col justify-center items-center text-center p-2 rounded-[12px] cursor-pointer hover:bg-[#a1a1a165] 
                 
                  `}
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
