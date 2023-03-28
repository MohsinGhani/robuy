import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../pages/shared/json/productCards";
import images from "../public/assets/images/index";
import Image from "next/image";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";

const CommonCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const client = createClient({
      space: "c288e1xhsyct",
      accessToken: "9F8haQVl_uqqdxbrDbTh6noeplOE4qbhBHNn9CekcLo",
    });

    client.getTags().then((response) => {
      setTags(
        response.items?.map((t) => ({
          id: t.sys?.id,
          name: t.name,
        }))
      );
    });

    client
      .getEntries({ content_type: "blog" })
      .then((response) => {
        const result = response.items?.map((item) => {
          const test = tags.filter((t) => {
            const tt = item.metadata?.tags?.map((iTag) => {
              if (iTag.sys?.id === t.id) {
                return t;
              }
            });

            return tt[0] ? tt[0] : null;
          });

          return {
            ...item,
            fields: { ...item.fields, tags: test },
          };
        });
        setBlogs(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handler = (id) => {
    router.push({
      pathname: "/blog",
      query: { id },
    });
  };

  return (
    <div className="productCard_container">
      {blogs?.map((blog) => {
        const { description } = blog.fields;
        const id = blog?.sys?.id;

        return (
          <Card sx={{ maxWidth: 320 }} onClick={() => handler(id)}>
            <div className="imgButton">
              <img src={blog?.fields?.image?.fields?.file?.url} />
              {blog?.fields?.tags?.map((t) => {
                return <Button variant="contained3">{t.name}</Button>;
              })}
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
      })}
    </div>
  );
};

export default CommonCard;
