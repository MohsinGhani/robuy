import RobuySecondPage from "@/component/blog";
import BlogList from "@/component/blogList";
import React from "react";

const Index = () => {
  return (
    <div className="Index">
      <RobuySecondPage />
      <div className="blogList">{/* <BlogList /> */}</div>
    </div>
  );
};

export default Index;
