import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";

const BlogCard = ({ blog }) => {
  console.log("🚀 ~ blog?.fields?.tags:", blog?.fields?.tags);
  const router = useRouter();

  const handler = (id) => {
    router.push({
      pathname: "/blog",
      query: { id },
    });
  };

  const description = blog?.fields?.description;
  const id = blog?.sys?.id;

  return (
    <Card sx={{ maxWidth: 320 }} onClick={() => handler(id)}>
      <div className="imgButton">
        <img src={blog?.fields?.image?.fields?.file?.url} />
        {blog?.fields?.tags?.map((t) => (
          <Button variant="contained3">{t.name}</Button>
        ))}
      </div>
      <CardContent className="firstCard">
        <div className="box">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <Typography variant="h5">{blog?.fields?.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {documentToReactComponents(description)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
