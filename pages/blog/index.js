import RobuySecondPage from "@/component/blog";
import BlogDetail from "@/component/blogDetail";
import BlogList from "@/component/blogList";
import React from "react";

const Index = () => {
  return (
    <div className="Index">
      <RobuySecondPage />
      <div className="blogList">
        <BlogList />
      </div>
      <BlogDetail />
    </div>
  );
};

export default Index;
