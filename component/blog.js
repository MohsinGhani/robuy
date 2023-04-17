import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "./header";
import BlogList from "./blogList";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BlogDetail from "./blogDetail";

const RobuySecondPage = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const client = createClient({
      space: "c288e1xhsyct",
      accessToken: "9F8haQVl_uqqdxbrDbTh6noeplOE4qbhBHNn9CekcLo",
    });

    const fetchData = async () => {
      try {
        const response = await client.getTags();
        const tags = response.items?.map((t) => ({
          id: t.sys?.id,
          name: t.name,
        }));

        const entryResponse = await client.getEntry(id);
        const filteredTags = tags.filter((t) => {
          const tt = entryResponse.metadata?.tags?.map((iTag) => {
            if (iTag.sys?.id === t.id) {
              return t;
            }
          });
          return tt[0] ? tt[0] : null;
        });

        const result = {
          ...entryResponse,
          fields: { ...entryResponse.fields, tags: filteredTags },
        };

        setBlog(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  const description = blog?.fields?.description;
  const description2 = blog?.fields?.description2;
  const description3 = blog?.fields?.description3;

  return (
    <>
      <Header />

      <BlogDetail />
    </>
  );
};

export default RobuySecondPage;
