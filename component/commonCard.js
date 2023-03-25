import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../pages/shared/json/productCards";
// import images from "../public/assets/images/index";
import Image from "next/image";
import { createClient } from "contentful";
import { useState, useEffect } from "react";

const CommonCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "c288e1xhsyct",
      accessToken: "9F8haQVl_uqqdxbrDbTh6noeplOE4qbhBHNn9CekcLo",
    });

    client
      .getEntries({ content_type: "blog" })
      .then((response) => {
        // Handle the retrieved entries here
        console.log(response.items);
        setBlogs(response.items);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="productCard_container">
      {blogs?.map((blog) => {
        console.log("🚀 ~ blog:", blog);

        return (
          <Card sx={{ maxWidth: 320 }}>
            <div className="imgButton">
              <img src={blog?.fields?.image?.fields?.file?.url} />
              <Button variant="contained3">{blog?.fields?.tags}</Button>
            </div>
            <CardContent className="firstCard">
              <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
                <Typography variant="h5">{blog?.fields?.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog?.fields?.descriptions}
                </Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CommonCard;
