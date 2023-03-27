import React from "react";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import images from "../public/assets/images/index";

import { ButtonGroup } from "@mui/material";

import Image from "next/image";
import { Box, useTheme } from "@mui/system";
import Header from "./header";
import CommonCard from "./commonCard";
import Card from "@mui/material/Card";
import { createClient } from "contentful";

const Robuy = () => {
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

  const theme = useTheme();
  return (
    <>
      <Header />
      <div className="robuyContainer">
        <div className="robuyParent">
          <Card className="robuychildcontainer" sx={{ maxWidth: 658 }}>
            <div className="box">
              <div className="box1"></div>
              <div className="box2"></div>
              <div className="box3"></div>
              <div className="box4"></div>
              <Card className="cardChild">
                <div className="header">
                  <div className="headerChild">
                    <Typography variant="subtitle2">Блог Robuy</Typography>
                    <Typography variant="subtitle1">
                      Новости и обновления
                    </Typography>
                  </div>
                  <Button>Подписаться</Button>
                </div>
                <img src={"/assets/images/image.svg"} alt="Edit Icon" />
                <CardContent className="newsCard">
                  <div className="buttonParent">
                    <Button variant="contained2">Последняя новость</Button>
                    <Button variant="contained1">Обновления</Button>
                  </div>
                  <div className="text">
                    <Typography variant="body2">
                      В 2022 году в Roblox ежедневно заходили 56 миллионов
                      игроков
                    </Typography>
                    <Typography variant="body1">
                      Roblox опубликовала свои финансовые результаты за
                      четвертый квартал 2022. У компании скачок выручки и
                      заказов, но убытки значительно увеличились.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
        <div className="union">
          <Typography>
            <Image src={images.union2} />
          </Typography>
          <Typography> Посты блога</Typography>
        </div>

        {blogs?.map((blog) => {
          console.log("blog", blog);
          return (
            <ButtonGroup>
              {blog?.fields?.tags?.map((t) => {
                return <Button variant="contained3">{t.name}</Button>;
              })}
              {/* <Button variant="contained1">Все</Button>
              <Button variant="contained2">Новости</Button>
              <Button variant="contained3">Игры</Button>
              <Button variant="contained4">Обновления</Button> ...*/}
            </ButtonGroup>
          );
        })}

        <div className="cardParent">
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
      </div>
    </>
  );
};

export default Robuy;
