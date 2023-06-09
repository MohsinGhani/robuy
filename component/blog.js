import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import BlogDetail from "@/pages/blog/[id]";

const RobuySecondPage = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { id } = router.query;

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

  return (
    <>
      <BlogDetail />
    </>
  );
};

export default RobuySecondPage;
