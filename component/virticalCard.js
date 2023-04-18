import React from "react";
import images from "../public/assets/images/index";
import Image from "next/image";
import { Button } from "@mui/material";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useRouter } from "next/router";

const VirticalCard = ({ blog }) => {
  const router = useRouter();
  const description = blog?.fields?.description;
  const id = blog?.sys?.id;

  const handler = (id) => {
    router.push({
      pathname: "/blog",
      query: { id },
    });
  };

  return (
    <>
      <div className="virticalCard cp" onClick={() => handler(id)}>
        <div className="virtical-child">
          <img src={blog?.fields?.image?.fields?.file?.url} />
        </div>

        <div className="content-container">
          <div className="border-container">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16V9C1 4.58172 4.58172 1 9 1H16"
                stroke="#F2F4F5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16V9C16 4.58172 12.4183 1 8 1H1"
                stroke="#F2F4F5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="content-card">
            {blog?.fields?.tags?.map((t) => (
              <Button className="btn">{t.name}</Button>
            ))}
            <h2 className="vati-hed">{blog?.fields?.title}</h2>
            <p className="prg">{documentToReactComponents(description)}</p>
          </div>

          <div className="border-containerlast">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1V8C1 12.4183 4.58172 16 9 16H16"
                stroke="#F2F4F5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1V8C16 12.4183 12.4183 16 8 16H1"
                stroke="#F2F4F5"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirticalCard;
