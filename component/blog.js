import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import images from "../public/assets/images/index";
import { ButtonGroup } from "@mui/material";
import Image from "next/image";
import { Box, useTheme } from "@mui/system";
import Header from "./header";
import CommonCards from "./commonCards";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RobuySecondPage = () => {
  const [blog, setBlog] = useState(null);
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const { id } = router.query;

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
    console.log("id", id);

    client.getEntry(id).then((response) => {
      console.log("response", response);

      const filteredTags = tags.filter((t) => {
        const tt = response.metadata?.tags?.map((iTag) => {
          if (iTag.sys?.id === t.id) {
            return t;
          }
        });

        return tt[0] ? tt[0] : null;
      });

      const result = {
        ...response,
        fields: { ...response.fields, tags: filteredTags },
      };

      setBlog(result);
    });
  }, [id]);
  const description = blog?.fields?.description;

  return (
    <>
      <Header />
      <div className="robuySecondContainer">
        <div className="robuyProject">
          <Card sx={{ maxWidth: 658 }}>
            <img src={blog?.fields?.image?.fields?.file?.url} alt="Edit Icon" />

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
                    {/* <Button variant="contained2">Последняя новость</Button>
                    <Button variant="contained1">Обновления</Button> */}
                  </div>
                  <div className="text">
                    <Typography variant="body2">
                      {blog?.fields?.title}
                    </Typography>

                    {/* <Typography variant="body2" color="text.secondary">
                      {documentToReactComponents(description)}
                    </Typography> */}
                    {/* {console.log("🚀 ~ blog:", blog)}
                    {blog?.fields?.description?.content?.map((d) => {
                      console.log("🚀 ~ d:", d);
                    })} */}
                  </div>
                </CardContent>
                <div className="textCard">
                  <Card>
                    <Typography variant="body1">
                      {documentToReactComponents(description)}
                      {/* Инвестиции, которые мы делаем для расширения вовлеченности
                      в Roblox в разных{" "}
                      <b>
                        географических регионах и возрастных группах, приносят
                        своиплоды.{" "}
                      </b>
                      В 2022 году наше сообщество выросло на 23% и превысило 56
                      миллионов ежедневных пользователей по всему миру. Наши
                      пользователи провели более 49.3 миллиардов часов вместе,
                      создавая, играя, исследуя, обучаясь и общаясь. Сегодня
                      более половины пользователей Roblox — это люди от 13 лет и
                      старше, что свидетельствует о привлекательности нашей
                      платформы для широкого круга аудитории. */}
                    </Typography>
                  </Card>
                </div>
                {/* <div className="content">
                  <Typography variant="body1">
                    Заодно Дэвид сообщил, что студия прикладывает все возможные
                    усилия для обеспечения безопасной и комфортной игры:
                  </Typography>

                  <Typography variant="body1">
                    Поскольку сообщество Roblox продолжает расти, мы уделяем
                    большое внимание обеспечению безопасной среды для наших
                    пользователей. За последний год мы увеличили наши инвестиции
                    в ИИ и машинное обучение для автономного обнаружения и
                    предотвращения попыток игроков вступить во вредоносные связи
                    или загрузить вредоносный контент.
                  </Typography>
                </div> */}
              </div>
            </div>
          </Card>
        </div>
        {/* <div className="union">
          <Typography>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 0C1.39543 0 0.5 0.89543 0.5 2V12C0.5 13.1046 1.39543 14 2.5 14H9.5H11.5H12.5C14.1569 14 15.5 12.6569 15.5 11V3C15.5 2.44772 15.0523 2 14.5 2H13.5V11C13.5 11.5523 13.0523 12 12.5 12C11.9477 12 11.5 11.5523 11.5 11V2C11.5 0.895431 10.6046 0 9.5 0H2.5ZM3.5 2C2.94772 2 2.5 2.44772 2.5 3V5C2.5 5.55228 2.94772 6 3.5 6H5.5C6.05228 6 6.5 5.55228 6.5 5V3C6.5 2.44772 6.05228 2 5.5 2H3.5ZM2.5 9C2.5 9.55229 2.94772 10 3.5 10H8.5C9.05229 10 9.5 9.55229 9.5 9C9.5 8.44771 9.05228 8 8.5 8H3.5C2.94772 8 2.5 8.44771 2.5 9Z"
                fill="#1D2123"
              />
            </svg>
          </Typography>
          <Typography>Посты блога</Typography>
        </div> */}
        {/* <ButtonGroup>
          <Button variant="contained1">Все</Button>
          <Button variant="contained2">Новости</Button>
          <Button variant="contained3">Игры</Button>
          <Button variant="contained4">Обновления</Button>
        </ButtonGroup> */}
        {/* <img src={icon} alt="Edit Icon" /> */}

        {/* <div className="cardParent">
          <CommonCard />
          <div className="virticalCard">
            <Card sx={{ display: "flex" }}>
              <div className="image">
                <Image className="images" src={images.vector4} />
              </div>
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
        </div> */}
        <CommonCards />
      </div>
    </>
  );
};

export default RobuySecondPage;
