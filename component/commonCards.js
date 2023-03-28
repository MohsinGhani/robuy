import React from "react";
import CommonCard from "./commonCard";
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

const CommonCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

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
          const filteredTags = tags.filter((t) => {
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
        setBlogs(result);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="union">
        <Typography>
          <Image src={images.union2} />
        </Typography>
        <Typography> Посты блога</Typography>
      </div>

      <ButtonGroup>
        {blogs?.map((blog) =>
          blog?.fields?.tags?.map((t) => (
            <Button variant="contained2"> {t.name} </Button>
          ))
        )}
      </ButtonGroup>

      <div className="cardParent cp">
        <CommonCard />
        <div className="virticalCard">
          <Card sx={{ display: "flex" }}>
            <Image src={images.Roblox} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <div className="box">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                  <div className="box4"></div>
                  <Button variant="contained4">Игры</Button>
                  <Typography variant="subtitle1">
                    Roblox получила обновление графики
                  </Typography>
                  <Typography variant="subtitle2">
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

export default CommonCards;
