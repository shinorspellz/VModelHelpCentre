import { egHTML } from "@/data";
import React from "react";
import "./styles.css";
const page = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: egHTML }} />
    </div>
  );
};

export default page;
