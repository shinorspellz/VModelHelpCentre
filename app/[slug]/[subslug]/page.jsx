"use client";
import { egHTML, subTopicContent, subTopics } from "@/data";
import React from "react";
import "./styles.css";

const page = ({ params }) => {
  let contentHTML;
  try {
    const { slug, subslug } = params;
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
    <div className="faq">
      <div dangerouslySetInnerHTML={{ __html: contentHTML || egHTML }} />
    </div>
  );
};

export default page;
