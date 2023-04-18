import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Card } from "@mui/material";

import { createClient } from "contentful";
import { useState, useEffect } from "react";
import BlogCard from "./blogCard";
import VirticalCard from "./virticalCard";

const BlogList = ({ setMainBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState();
  const [horizontalCard, setHorizontalCard] = useState(undefined);
  const [activeTag, setActiveTag] = useState(null);

  const handleButtonClick = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
  };

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
        setHorizontalCard(
          resultData.find((item) => item?.fields?.isHorizontalCard)
        );
        if (setMainBlog) {
          setMainBlog(resultData.find((item) => item?.fields?.isMainCard));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const blogsList = useMemo(() => {
    if (!activeTag) {
      return blogs;
    } else {
      return blogs?.filter((blog) =>
        blog?.fields?.tags.some((tg) => tg.name === activeTag)
      );
    }
  }, [blogs, activeTag]);

  return (
    <div className=" fade-in">
      <div className="btn-group  fade-in">
        <div className="union  fade-in">
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
        <div className="button-content  fade-in">
          {tags?.map((t) => (
            <Button
              key={t.name}
              className={`btns ${t.name === activeTag ? "active" : ""}`}
              style={{
                backgroundColor: t.name === activeTag ? "#6F2CFF" : "white",
                color: t.name === activeTag ? "white" : "#8D00D0",
              }}
              onClick={() => handleButtonClick(t.name)}
            >
              {t.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="cardParent cp  fade-in">
        <div className="productCard_container">
          {blogsList.map((blog) => {
            if (blog?.fields?.isHorizontalCard || blog?.fields?.isMainCard)
              return;

            return <BlogCard blog={blog} />;
          })}
        </div>
      </div>
      {horizontalCard && <VirticalCard blog={horizontalCard} />}
    </div>
  );
};

export default BlogList;
