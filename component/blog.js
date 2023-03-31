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

  return (
    <>
      <Header />
      <div className="robuySecondContainer">
        <div className="robuyProject">
          <Card sx={{ maxWidth: 658 }}>
            <div className="top-icon">
              <img
                src={blog?.fields?.image?.fields?.file?.url}
                alt="Edit Icon"
              />
            </div>

            <div className="robuySecConChild">
              <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
                <div className="header">
                  <div className="headerChild">
                    <Typography variant="subtitle2">Блог Robuy</Typography>
                    <Typography variant="subtitle1">
                      Новости и обновления
                    </Typography>
                  </div>
                  <Button>Подписаться</Button>
                </div>
                <CardContent>
                  <div className="buttonParent">
                    {blog?.fields?.tags?.map((t) => (
                      <Button variant="contained1"> {t.name} </Button>
                    ))}
                  </div>
                  <div className="text">
                    <Typography variant="body2">
                      {blog?.fields?.title}
                    </Typography>
                  </div>
                </CardContent>

                <div className="textCard">
                  <Card>
                    <Typography variant="body1">
                      {documentToReactComponents(description)}
                    </Typography>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <BlogList />
      </div>
    </>
  );
};

export default RobuySecondPage;
