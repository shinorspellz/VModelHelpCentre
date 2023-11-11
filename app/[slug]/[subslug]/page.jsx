"use client";
import { egHTML, subTopicContent, subTopics } from "@/data";
import React from "react";
import "./styles.css";

const page = ({ params }) => {
  const { slug, subslug } = params;

  const contentHTML = subTopicContent[slug][subslug];
  console.log(contentHTML);
  return (
    <div className="faq">
      <div dangerouslySetInnerHTML={{ __html: contentHTML || egHTML }} />
    </div>
  );
};

export default page;
