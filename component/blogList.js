import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import images from "../public/assets/images/index";
import { ButtonGroup } from "@mui/material";
import Image from "next/image";
import { createClient } from "contentful";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import BlogCard from "./blogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "c288e1xhsyct",
      accessToken: "9F8haQVl_uqqdxbrDbTh6noeplOE4qbhBHNn9CekcLo",
    });

    const fetchData = async () => {
      try {
        const responseTags = await client.getTags();
        const tagsData = responseTags.items?.map((t) => ({
          id: t.sys?.id,
          name: t.name,
        }));
        setTags(tagsData);

        const responseEntries = await client.getEntries({
          content_type: "blog",
        });
        const resultData = responseEntries.items?.map((item) => {
          const filteredTags = tagsData.filter((t) => {
            const tt = item.metadata?.tags?.map((iTag) => {
              if (iTag.sys?.id === t.id) {
                return t;
              }
            });
            return tt[0] ? tt[0] : null;
          });
          return {
            ...item,
            fields: { ...item.fields, tags: filteredTags },
          };
        });
        setBlogs(resultData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="union">
        <Typography>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 1C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H10H12H13C14.6569 15 16 13.6569 16 12V4C16 3.44772 15.5523 3 15 3H14V12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12V3C12 1.89543 11.1046 1 10 1H3ZM4 3C3.44772 3 3 3.44772 3 4V6C3 6.55228 3.44772 7 4 7H6C6.55228 7 7 6.55228 7 6V4C7 3.44772 6.55228 3 6 3H4ZM3 10C3 10.5523 3.44772 11 4 11H9C9.55229 11 10 10.5523 10 10C10 9.44771 9.55228 9 9 9H4C3.44772 9 3 9.44771 3 10Z"
              fill="#1D2123"
            />
          </svg>{" "}
        </Typography>
        <Typography> Посты блога</Typography>
      </div>

      <ButtonGroup>
        {tags?.map((t) => (
          <Button variant="contained2"> {t.name} </Button>
        ))}
      </ButtonGroup>

      <div className="cardParent cp">
        <div className="productCard_container">
          {/* {blogs.map((blog) => (
            // <BlogCard blog={blog} />
          ))} */}
        </div>
        <BlogCard />
        <div className="virticalCard">
          <Card sx={{ display: "flex" }}>
            <Image src={images.Roblox} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div className="virticalCard-box">
                  <div className="virticalCard-box1"></div>
                  <div className="virticalCard-box2"></div>
                  <div className="virticalCard-box3"></div>
                  <div className="virticalCard-box4"></div>
                  <Button variant="contained4">Игры</Button>
                  <Typography variant="h6" className="subtitle1">
                    Roblox получила обновление графики
                  </Typography>
                  <Typography variant="h6" className="subtitle2">
                    Разработчики Roblox, одной из самых популярных песочниц в
                    мире, выпустили обновление с различными графическими
                    улучшениями. Патч подтянул текстуры всех материалов игры:
                    Этим релизом мы улучшили визуальное...
                  </Typography>
                </div>
              </CardContent>
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BlogList;
