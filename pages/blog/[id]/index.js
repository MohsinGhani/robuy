import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import { Button, Typography } from "@mui/material";
import Head from "next/head";
import BlogList from "@/component/blogList";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_SPACE,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    });

    const fetchData = async () => {
      try {
        const response = await client.getTags();
        const tags = response.items?.map((t) => ({
          id: t.sys?.id,
          name: t.name,
        }));

        const entryResponse = await client.getEntries(id);
        const filteredTags = tags.filter((t) => {
          const tt = entryResponse.items?.[0]?.metadata?.tags?.map((iTag) => {
            if (iTag.sys?.id === t.id) {
              return t;
            }
          });
          return tt[0] ? tt[0] : null;
        });
        const result = {
          ...entryResponse,
          fields: { ...entryResponse.fields, tags: filteredTags },
          tags,
        };
        setBlog(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const findItem = blog?.items?.find((x) => x?.fields?.slug == id);

  const description = findItem?.fields?.description;
  const description2 = findItem?.fields?.description2;
  const description3 = findItem?.fields?.description3;
  const tagDet = blog?.tags?.find(
    (item) => item?.id === findItem?.metadata?.tags[0]?.sys?.id
  );

  return (
    <div className="Index">
      <Head>
        <title>Robuy | Блог про робуксы и их выгодную покупку</title>
        <link rel="canonical" href="https://robuy.gg/blog"></link>
      </Head>

      <div className="blogDetail-container  fade-in">
        <div className="blogDetail-img">
          <img src={findItem?.fields?.image?.fields?.file?.url} alt="" />
        </div>
        <div className="blogdetail-content">
          <div className="border-arrow">
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
          <div className="card-content-parent">
            <div className="card-header-bar">
              <div>
                <Typography variant="h6">Блог Robuy</Typography>
                <Typography className="h6" variant="h6">
                  Новости и обновления
                </Typography>
              </div>
              <div>
                <Button
                  className="header-button"
                  onClick={() => router.push("https://robuy.gg/")}
                >
                  Купить робуксы
                </Button>
              </div>
            </div>
            <div className="button-tag">
              <Button className="first-button-tag"> {tagDet?.name} </Button>
            </div>
            <div className="content">
              <Typography variant="h6">{findItem?.fields?.title}</Typography>
              <Typography className="content-prg">
                {documentToReactComponents(description)}
              </Typography>
              <div className="color-cotent-card">
                <Typography variant="h6">
                  {documentToReactComponents(description2)}
                </Typography>
              </div>
              <Typography className="secondLast-text">
                {documentToReactComponents(description3)}
              </Typography>
              <Typography className="Last-text"></Typography>
            </div>
          </div>

          <div className="border-arrow">
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

      <div className="blogList">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogDetail;
