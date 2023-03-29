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
  // const [tags, setTags] = useState([]);
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
        // setTags(tags);

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
        <BlogList />
      </div>
    </>
  );
};

export default RobuySecondPage;
